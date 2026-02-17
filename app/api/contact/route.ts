import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name: string;
  company: string;
  email: string;
  inquiryType: string;
  message: string;
  lang: "da" | "en";
};

const inquiryTypeLabels: Record<"da" | "en", Record<string, string>> = {
  da: {
    moede: "Book et møde",
    losning: "Skitsering af løsning",
    services: "Pilot / production build",
    sikkerhed: "Teknologi & sikkerhed",
    demo: "Case / demo",
    andet: "Andet",
  },
  en: {
    moede: "Book a meeting",
    losning: "Solution scoping",
    services: "Pilot / production build",
    sikkerhed: "Technology & security",
    demo: "Case / demo",
    andet: "Other",
  },
};

function sanitize(value: unknown) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeLang(value: unknown): "da" | "en" {
  return String(value ?? "").toLowerCase() === "en" ? "en" : "da";
}

function validate(payload: ContactPayload) {
  const isDanish = payload.lang === "da";

  if (!payload.name || payload.name.length < 2) {
    return isDanish ? "Udfyld venligst navn." : "Please fill in your name.";
  }
  if (!payload.company || payload.company.length < 2) {
    return isDanish
      ? "Udfyld venligst virksomhed/organisation."
      : "Please fill in company/organization.";
  }
  if (!payload.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return isDanish ? "Udfyld venligst en gyldig e-mail." : "Please enter a valid email.";
  }
  if (!payload.message || payload.message.length < 10) {
    return isDanish ? "Beskeden er for kort." : "The message is too short.";
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
    subject: `${
      payload.lang === "da" ? "Ny henvendelse" : "New inquiry"
    }: ${inquiryTypeLabels[payload.lang][payload.inquiryType] ?? "Contact form"}`,
    text: [
      `${payload.lang === "da" ? "Navn" : "Name"}: ${payload.name}`,
      `${payload.lang === "da" ? "Virksomhed" : "Company"}: ${payload.company}`,
      `Email: ${payload.email}`,
      `${payload.lang === "da" ? "Emne" : "Topic"}: ${
        inquiryTypeLabels[payload.lang][payload.inquiryType] ?? payload.inquiryType
      }`,
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
      inquiry_type: inquiryTypeLabels[payload.lang][payload.inquiryType] ?? payload.inquiryType,
      message: payload.message,
    }),
  });

  if (!response.ok) {
    throw new Error(
      payload.lang === "da" ? "Formspree-afsendelse fejlede." : "Formspree delivery failed.",
    );
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
      lang: normalizeLang(body.lang),
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
        {
          error:
            payload.lang === "da"
              ? "Beskeden kunne ikke sendes. Prøv igen om lidt."
              : "The message could not be sent. Please try again shortly.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json(
      {
        error:
          payload.lang === "da"
            ? "Kontaktflow er ikke konfigureret. Sæt RESEND_API_KEY eller FORMSPREE_ENDPOINT i miljøvariabler."
            : "Contact flow is not configured. Set RESEND_API_KEY or FORMSPREE_ENDPOINT in environment variables.",
      },
      { status: 500 },
    );
  } catch (error) {
    console.error("Contact API parse error:", error);
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
