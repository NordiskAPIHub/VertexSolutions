import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name: string;
  company: string;
  email: string;
  inquiryType: string;
  message: string;
};

const inquiryTypeLabels: Record<string, string> = {
  moede: "Book et møde",
  losning: "Skitsering af løsning",
  services: "Pilot / production build",
  sikkerhed: "Teknologi & sikkerhed",
  demo: "Case / demo",
  andet: "Andet",
};

function sanitize(value: unknown) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim();
}

function validate(payload: ContactPayload) {
  if (!payload.name || payload.name.length < 2) {
    return "Udfyld venligst navn.";
  }
  if (!payload.company || payload.company.length < 2) {
    return "Udfyld venligst virksomhed/organisation.";
  }
  if (!payload.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return "Udfyld venligst en gyldig e-mail.";
  }
  if (!payload.message || payload.message.length < 10) {
    return "Beskeden er for kort.";
  }
  return null;
}

async function sendWithResend(payload: ContactPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return false;
  }

  const resend = new Resend(apiKey);
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "kontakt@vertexsolutions.dk";
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    replyTo: payload.email,
    subject: `Ny henvendelse: ${inquiryTypeLabels[payload.inquiryType] ?? "Kontaktformular"}`,
    text: [
      `Navn: ${payload.name}`,
      `Virksomhed: ${payload.company}`,
      `E-mail: ${payload.email}`,
      `Emne: ${inquiryTypeLabels[payload.inquiryType] ?? payload.inquiryType}`,
      "",
      payload.message,
    ].join("\n"),
  });

  return true;
}

async function sendWithFormspree(payload: ContactPayload) {
  const endpoint = process.env.FORMSPREE_ENDPOINT;
  if (!endpoint) {
    return false;
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: payload.name,
      company: payload.company,
      email: payload.email,
      inquiry_type: inquiryTypeLabels[payload.inquiryType] ?? payload.inquiryType,
      message: payload.message,
    }),
  });

  if (!response.ok) {
    throw new Error("Formspree-afsendelse fejlede.");
  }

  return true;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;

    const payload: ContactPayload = {
      name: sanitize(body.name),
      company: sanitize(body.company),
      email: sanitize(body.email),
      inquiryType: sanitize(body.inquiryType).toLowerCase() || "moede",
      message: sanitize(body.message),
    };

    const validationError = validate(payload);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    try {
      const sentWithResend = await sendWithResend(payload);
      if (sentWithResend) {
        return NextResponse.json({ ok: true });
      }

      const sentWithFormspree = await sendWithFormspree(payload);
      if (sentWithFormspree) {
        return NextResponse.json({ ok: true });
      }
    } catch (error) {
      console.error("Contact delivery error:", error);
      return NextResponse.json(
        { error: "Beskeden kunne ikke sendes. Prøv igen om lidt." },
        { status: 502 },
      );
    }

    return NextResponse.json(
      {
        error:
          "Kontaktflow er ikke konfigureret. Sæt RESEND_API_KEY eller FORMSPREE_ENDPOINT i miljøvariabler.",
      },
      { status: 500 },
    );
  } catch (error) {
    console.error("Contact API parse error:", error);
    return NextResponse.json({ error: "Ugyldig forespørgsel." }, { status: 400 });
  }
}
