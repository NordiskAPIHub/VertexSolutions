import type { Metadata } from "next";
import Image from "next/image";
import { CtaSection } from "@/components/marketing/cta-section";
import { PageHero } from "@/components/marketing/page-hero";
import { ProcessTimeline } from "@/components/marketing/process-timeline";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Teknologi & Sikkerhed",
  description: "Lagdelt RAG-arkitektur med kontrolleret retrieval, structured output og governance-first design.",
  path: "/teknologi-sikkerhed",
  keywords: ["RAG", "pgvector", "VoyageAI", "RBAC", "audit logs", "structured output"],
});

const legalRagFlow = [
  {
    title: "Opdeling og indeksering af juridiske kilder",
    description:
      "Retsinformation, domme og vejledninger opdeles i chunks, embeddes og lagres i et versionsstyret semantisk datalag.",
  },
  {
    title: "Spørgsmålsforståelse og forespørgselsudvidelse",
    description:
      "Brugerens spørgsmål omsættes til semantiske søgesignaler. Ved behov genereres flere query-varianter for højere recall.",
  },
  {
    title: "Retrieval og re-ranking",
    description:
      "Systemet henter de mest relevante chunks og prioriterer kandidater matematisk før modelkald for at reducere støj.",
  },
  {
    title: "Svargenerering med kildedækning",
    description:
      "LLM genererer svar med verificerede kilder i prompten og leverer validerbart output med sporbarhed.",
  },
];

export default function TechnologyAndSecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Teknologi & Sikkerhed"
        title="Governance-first arkitektur til kritiske arbejdsgange"
        description="Kernestack: Next.js, Supabase/Postgres, pgvector, VoyageAI og OpenAI. Designet til præcision, sporbarhed og driftskontrol."
      />

      <section className="section-space relative overflow-hidden border-y border-black/8 bg-[var(--surface-strong)]">
        <Image
          src="/Vertex Tema.png"
          alt=""
          fill
          aria-hidden
          className="pointer-events-none object-cover opacity-[0.08]"
        />
        <div className="section-shell relative">
          <h2>Hvordan virker vores AI-drevne juridiske informationssystem?</h2>
          <p className="mt-6 max-w-3xl text-[18px] leading-[1.6] text-[#000000]">
            Sådan fungerer RAG i juridisk kontekst: fra indeksering af kilder til dokumenterede
            svar med lav hallucinationsrisiko.
          </p>
          <ProcessTimeline steps={legalRagFlow} />
        </div>
      </section>

      <CtaSection
        heading="Har I tekniske krav fra CIO, CISO eller DPO?"
        description="Vi oversætter krav til en arkitektur med tydelig ansvarsdeling og kontrollerbar drift."
        primaryLabel="Book et møde"
        primaryHref="/kontakt"
        secondaryLabel="Kontakt"
        secondaryHref="/kontakt"
      />
    </>
  );
}
