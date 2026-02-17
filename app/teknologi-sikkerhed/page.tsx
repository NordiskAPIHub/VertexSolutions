import type { Metadata } from "next";
import Image from "next/image";
import { CtaSection } from "@/components/marketing/cta-section";
import { PageHero } from "@/components/marketing/page-hero";
import { ProcessTimeline } from "@/components/marketing/process-timeline";
import { type Locale } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n-server";
import { buildMetadata } from "@/lib/seo";

const metadataByLocale: Record<
  Locale,
  { title: string; description: string; keywords: string[] }
> = {
  da: {
    title: "Teknologi & Sikkerhed",
    description: "Lagdelt RAG-arkitektur med kontrolleret retrieval, structured output og governance-first design.",
    keywords: ["RAG", "pgvector", "VoyageAI", "RBAC", "audit logs", "structured output"],
  },
  en: {
    title: "Technology & Security",
    description: "Layered RAG architecture with controlled retrieval, structured output, and governance-first design.",
    keywords: ["RAG", "pgvector", "VoyageAI", "RBAC", "audit logs", "structured output"],
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const copy = metadataByLocale[locale];

  return buildMetadata({
    title: copy.title,
    description: copy.description,
    path: "/teknologi-sikkerhed",
    keywords: copy.keywords,
    locale,
  });
}

const legalRagFlowByLocale: Record<Locale, Array<{ title: string; description: string }>> = {
  da: [
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
  ],
  en: [
    {
      title: "Segmentation and indexing of legal sources",
      description:
        "Legal sources, rulings, and guidance are split into chunks, embedded, and stored in a versioned semantic data layer.",
    },
    {
      title: "Question understanding and query expansion",
      description:
        "User questions are converted into semantic retrieval signals. When needed, multiple query variants are generated to improve recall.",
    },
    {
      title: "Retrieval and re-ranking",
      description:
        "The system fetches the most relevant chunks and prioritizes candidates mathematically before model invocation to reduce noise.",
    },
    {
      title: "Answer generation with source grounding",
      description:
        "The LLM generates answers with verified sources in context and returns traceable, controlled output.",
    },
  ],
};

const copyByLocale: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    sectionTitle: string;
    sectionDescription: string;
    ctaHeading: string;
    ctaDescription: string;
    ctaPrimary: string;
    ctaSecondary: string;
  }
> = {
  da: {
    eyebrow: "Teknologi & Sikkerhed",
    title: "Governance-first arkitektur til kritiske arbejdsgange",
    description:
      "Kernestack: Next.js, Supabase/Postgres, pgvector, VoyageAI og OpenAI. Designet til præcision, sporbarhed og driftskontrol.",
    sectionTitle: "Hvordan virker vores AI-drevne juridiske informationssystem?",
    sectionDescription:
      "Sådan fungerer RAG i juridisk kontekst: fra indeksering af kilder til dokumenterede svar med lav hallucinationsrisiko.",
    ctaHeading: "Har I tekniske krav fra CIO, CISO eller DPO?",
    ctaDescription: "Vi oversætter krav til en arkitektur med tydelig ansvarsdeling og kontrollerbar drift.",
    ctaPrimary: "Book et møde",
    ctaSecondary: "Kontakt",
  },
  en: {
    eyebrow: "Technology & Security",
    title: "Governance-first architecture for critical workflows",
    description:
      "Core stack: Next.js, Supabase/Postgres, pgvector, VoyageAI, and OpenAI. Built for precision, traceability, and operational control.",
    sectionTitle: "How does our AI-driven legal information system work?",
    sectionDescription:
      "How RAG works in a legal context: from source indexing to documented answers with low hallucination risk.",
    ctaHeading: "Do you have technical requirements from CIO, CISO, or DPO?",
    ctaDescription: "We translate requirements into architecture with clear ownership and controllable operations.",
    ctaPrimary: "Book a meeting",
    ctaSecondary: "Contact",
  },
};

export default async function TechnologyAndSecurityPage() {
  const locale = await getLocale();
  const copy = copyByLocale[locale];
  const legalRagFlow = legalRagFlowByLocale[locale];

  return (
    <>
      <PageHero eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

      <section className="section-space relative overflow-hidden border-y border-black/8 bg-[var(--surface-strong)]">
        <Image
          src="/Vertex Tema.png"
          alt=""
          fill
          aria-hidden
          className="pointer-events-none object-cover opacity-[0.08]"
        />
        <div className="section-shell relative">
          <h2>{copy.sectionTitle}</h2>
          <p className="mt-6 max-w-3xl text-[18px] leading-[1.6] text-[#000000]">{copy.sectionDescription}</p>
          <ProcessTimeline steps={legalRagFlow} deliverablesLabel={locale === "da" ? "I får" : "Deliverables"} />
        </div>
      </section>

      <CtaSection
        heading={copy.ctaHeading}
        description={copy.ctaDescription}
        primaryLabel={copy.ctaPrimary}
        primaryHref="/kontakt"
        secondaryLabel={copy.ctaSecondary}
        secondaryHref="/kontakt"
      />
    </>
  );
}
