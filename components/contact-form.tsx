"use client";

import { useState } from "react";
import { type Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const inquiryTypeOptionsByLocale = {
  da: [
    { value: "moede", label: "Book et møde" },
    { value: "losning", label: "Skitsering af løsning" },
    { value: "services", label: "Pilot/production build" },
    { value: "sikkerhed", label: "Teknologi & sikkerhed" },
    { value: "demo", label: "Case/demo forespørgsel" },
    { value: "andet", label: "Andet" },
  ],
  en: [
    { value: "moede", label: "Book a meeting" },
    { value: "losning", label: "Solution scoping" },
    { value: "services", label: "Pilot/production build" },
    { value: "sikkerhed", label: "Technology & security" },
    { value: "demo", label: "Case/demo inquiry" },
    { value: "andet", label: "Other" },
  ],
};

type FormState = {
  name: string;
  company: string;
  email: string;
  inquiryType: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  inquiryType: "moede",
  message: "",
};

export function ContactForm({
  locale,
  defaultInquiryType = "moede",
}: {
  locale: Locale;
  defaultInquiryType?: string;
}) {
  const isDanish = locale === "da";
  const labels = isDanish
    ? {
        name: "Navn *",
        company: "Virksomhed / organisation *",
        email: "E-mail *",
        inquiryType: "Hvad drejer det sig om? *",
        message: "Kort beskrivelse *",
        messagePlaceholder: "Hvilken proces vil I automatisere, og hvad er jeres vigtigste krav?",
        submit: "Send besked",
        sending: "Sender...",
        privacy: "Vi behandler data fortroligt og privacy-first.",
        submitError: "Kunne ikke sende din besked.",
        submitSuccess: "Tak. Vi vender tilbage hurtigst muligt.",
        genericError: "Der opstod en fejl.",
      }
    : {
        name: "Name *",
        company: "Company / organization *",
        email: "Email *",
        inquiryType: "What is this about? *",
        message: "Short description *",
        messagePlaceholder: "Which process do you want to automate, and what are your key requirements?",
        submit: "Send message",
        sending: "Sending...",
        privacy: "We process data confidentially and privacy-first.",
        submitError: "Could not send your message.",
        submitSuccess: "Thanks. We will get back to you as soon as possible.",
        genericError: "An error occurred.",
      };

  const inquiryTypeOptions = inquiryTypeOptionsByLocale[locale];
  const safeInquiryType = inquiryTypeOptions.some((option) => option.value === defaultInquiryType)
    ? defaultInquiryType
    : "moede";

  const [form, setForm] = useState<FormState>({ ...initialState, inquiryType: safeInquiryType });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, lang: locale }),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(payload?.error ?? labels.submitError);
      }

      setStatus("success");
      setFeedback(labels.submitSuccess);
      setForm({ ...initialState, inquiryType: safeInquiryType });
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : labels.genericError);
    }
  }

  return (
    <form onSubmit={onSubmit} className="surface-card rounded-[10px] p-8 shadow-none md:p-10">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <Label htmlFor="name">{labels.name}</Label>
          <Input
            id="name"
            autoComplete="name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="company">{labels.company}</Label>
          <Input
            id="company"
            autoComplete="organization"
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="email">{labels.email}</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="inquiryType">{labels.inquiryType}</Label>
          <select
            id="inquiryType"
            className="flex h-12 w-full border-0 border-b-2 border-[var(--brand-blue)] bg-transparent px-2 py-2 text-lg text-[#000000] focus-visible:outline-none"
            value={form.inquiryType}
            onChange={(event) => updateField("inquiryType", event.target.value)}
            required
          >
            {inquiryTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-8">
        <Label htmlFor="message">{labels.message}</Label>
        <Textarea
          id="message"
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder={labels.messagePlaceholder}
          required
        />
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? labels.sending : labels.submit}
        </Button>
        <p className="text-sm text-[#000000]">{labels.privacy}</p>
      </div>

      {feedback ? (
        <p
          className={`mt-4 text-sm font-semibold ${
            status === "error" ? "text-[#9f1b1b]" : "text-[var(--brand-blue)]"
          }`}
        >
          {feedback}
        </p>
      ) : null}
    </form>
  );
}
