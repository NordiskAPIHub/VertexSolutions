"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const inquiryTypeOptions = [
  { value: "moede", label: "Book et møde" },
  { value: "losning", label: "Skitsering af løsning" },
  { value: "services", label: "Pilot/production build" },
  { value: "sikkerhed", label: "Teknologi & sikkerhed" },
  { value: "demo", label: "Case/demo forespørgsel" },
  { value: "andet", label: "Andet" },
];

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

export function ContactForm({ defaultInquiryType = "moede" }: { defaultInquiryType?: string }) {
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
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(payload?.error ?? "Kunne ikke sende din besked.");
      }

      setStatus("success");
      setFeedback("Tak. Vi vender tilbage hurtigst muligt.");
      setForm({ ...initialState, inquiryType: safeInquiryType });
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Der opstod en fejl.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="surface-card rounded-[10px] p-8 shadow-none md:p-10">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <Label htmlFor="name">Navn *</Label>
          <Input
            id="name"
            autoComplete="name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="company">Virksomhed / organisation *</Label>
          <Input
            id="company"
            autoComplete="organization"
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="email">E-mail *</Label>
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
          <Label htmlFor="inquiryType">Hvad drejer det sig om? *</Label>
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
        <Label htmlFor="message">Kort beskrivelse *</Label>
        <Textarea
          id="message"
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Hvilken proces vil I automatisere, og hvad er jeres vigtigste krav?"
          required
        />
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sender..." : "Send besked"}
        </Button>
        <p className="text-sm text-[#000000]">Vi behandler data fortroligt og privacy-first.</p>
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
