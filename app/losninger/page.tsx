import type { Metadata } from "next";
import { CtaSection } from "@/components/marketing/cta-section";
import { PageHero } from "@/components/marketing/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type Locale } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n-server";
import { buildMetadata } from "@/lib/seo";

type SolutionItem = {
  title: string;
  description: string;
  points: string[];
};

type ProcessItem = {
  step: string;
  title: string;
  description: string;
};

const metadataByLocale: Record<
  Locale,
  { title: string; description: string; keywords: string[] }
> = {
  da: {
    title: "Løsninger",
    description: "Skræddersyede AI- og dataløsninger til drift med fokus på kontrol, kvalitet og forretningsværdi.",
    keywords: ["AI løsninger", "RAG", "workflow automation", "dokumentintelligens", "data platform"],
  },
  en: {
    title: "Solutions",
    description: "Tailored AI and data solutions for operations with focus on control, quality, and business value.",
    keywords: ["AI solutions", "RAG", "workflow automation", "document intelligence", "data platform"],
  },
};

const copyByLocale: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    sectionTitle: string;
    sectionDescription: string;
    solutions: SolutionItem[];
    processTitle: string;
    processDescription: string;
    process: ProcessItem[];
    ctaHeading: string;
    ctaDescription: string;
    ctaPrimary: string;
    ctaSecondary: string;
  }
> = {
  da: {
    eyebrow: "Løsninger",
    title: "Skræddersyede AI- og dataløsninger til drift",
    description:
      "Vi bygger produktionsmodne systemer, der automatiserer gentagne processer og gør viden operationel med governance, sporbarhed og kontrolleret drift.",
    sectionTitle: "Det vi kan levere",
    sectionDescription:
      "Hver løsning designes til jeres kontekst, integrationskrav og beslutningsflow. Fokus er høj signalværdi, lav kompleksitet i brugeroplevelsen og stabil drift.",
    solutions: [
      {
        title: "Skræddersyet Chatbot (RAG)",
        description:
          "Domænespecifik chatbot på egne data med kildeunderbyggede svar og kontrolleret svarlogik.",
        points: ["Afgrænset datagrundlag", "Validerbare kilder", "Rollebaseret adgang"],
      },
      {
        title: "Workflow Automation",
        description:
          "Automatisering af triage, routing, kvalitetstjek og beslutningsstøtte i driftskritiske processer.",
        points: ["Færre manuelle trin", "Mere ensartet kvalitet", "Højere kapacitet"],
      },
      {
        title: "Dokumentintelligens",
        description:
          "Udtræk, strukturering og validering af dokumenter i en skalerbar pipeline med sporbarhed.",
        points: ["Struktureret output", "Reduceret fejlrisiko", "Hurtigere sagsbehandling"],
      },
      {
        title: "Komplet AI-platform",
        description:
          "Lineær RAG-pipeline fra datakilder til struktureret output med styring af retrieval og outputkontrakter.",
        points: ["Kontrolleret dataflow", "Re-ranking før modelkald", "JSON/rapport som output"],
      },
      {
        title: "Automatiseret kundekommunikation",
        description:
          "Kontekstbaseret kommunikationsflow, hvor indhold analyseres, segmenteres og udsendes automatisk.",
        points: ["Målrettet udsendelse", "Ensartet kvalitet", "Sparret behandlingstid"],
      },
      {
        title: "AI-drevet salgsagent",
        description:
          "Fra lead til CRM-opdatering med berigelse, intent-analyse og personaliseret outreach i samme flow.",
        points: ["Hurtigere leadbehandling", "Stærkere relevans", "Kontrolleret opfølgning"],
      },
    ],
    processTitle: "Fra behov til løsning i drift",
    processDescription:
      "Vi arbejder i korte, kontrollerede forløb med tydelige leverancer, så I får beslutningsgrundlag tidligt og produktion hurtigt.",
    process: [
      {
        step: "01",
        title: "Afklaring",
        description: "Vi fastlægger use-case, datakilder, integrationspunkter og governance-krav.",
      },
      {
        step: "02",
        title: "Implementering",
        description: "Vi bygger den konkrete løsning med fokus på kontrol, kvalitet og teknisk holdbarhed.",
      },
      {
        step: "03",
        title: "Drift og optimering",
        description: "Vi følger performance, omkostning og kvalitet og forbedrer løbende med dokumenterede ændringer.",
      },
    ],
    ctaHeading: "Vil I se, hvilken løsning der passer til jeres drift?",
    ctaDescription: "Vi omsætter jeres proces til en konkret løsningsskitse med arkitektur, integration og effektestimat.",
    ctaPrimary: "Book et møde",
    ctaSecondary: "Se cases",
  },
  en: {
    eyebrow: "Solutions",
    title: "Tailored AI and data solutions for operations",
    description:
      "We build production-ready systems that automate repetitive processes and make knowledge operational with governance, traceability, and controlled operations.",
    sectionTitle: "What we deliver",
    sectionDescription:
      "Each solution is designed for your context, integration landscape, and decision flow. The focus is high signal value, low UX complexity, and stable operations.",
    solutions: [
      {
        title: "Tailored Chatbot (RAG)",
        description:
          "Domain-specific chatbot on internal data with source-backed answers and controlled answer logic.",
        points: ["Scoped data foundation", "Verifiable sources", "Role-based access"],
      },
      {
        title: "Workflow Automation",
        description:
          "Automation of triage, routing, quality checks, and decision support in operationally critical processes.",
        points: ["Fewer manual steps", "More consistent quality", "Higher capacity"],
      },
      {
        title: "Document Intelligence",
        description:
          "Extraction, structuring, and validation of documents in a scalable pipeline with traceability.",
        points: ["Structured output", "Lower error risk", "Faster case handling"],
      },
      {
        title: "Complete AI Platform",
        description:
          "Linear RAG pipeline from data sources to structured output with controlled retrieval and output contracts.",
        points: ["Controlled data flow", "Re-ranking before model calls", "JSON/report output"],
      },
      {
        title: "Automated Customer Communication",
        description:
          "Context-based communication flow where content is analyzed, segmented, and distributed automatically.",
        points: ["Targeted distribution", "Consistent quality", "Reduced handling time"],
      },
      {
        title: "AI-driven Sales Agent",
        description:
          "From lead to CRM update with enrichment, intent analysis, and personalized outreach in one flow.",
        points: ["Faster lead handling", "Stronger relevance", "Controlled follow-up"],
      },
    ],
    processTitle: "From requirement to solution in production",
    processDescription:
      "We work in short, controlled engagements with clear deliverables, so you get decision basis early and production fast.",
    process: [
      {
        step: "01",
        title: "Scoping",
        description: "We define use case, data sources, integration points, and governance requirements.",
      },
      {
        step: "02",
        title: "Implementation",
        description: "We build the concrete solution with focus on control, quality, and technical durability.",
      },
      {
        step: "03",
        title: "Operations and optimization",
        description: "We track performance, cost, and quality, and improve continuously through controlled changes.",
      },
    ],
    ctaHeading: "Do you want to see which solution fits your operations?",
    ctaDescription: "We translate your process into a concrete solution sketch with architecture, integration, and impact estimate.",
    ctaPrimary: "Book a meeting",
    ctaSecondary: "See cases",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const copy = metadataByLocale[locale];

  return buildMetadata({
    title: copy.title,
    description: copy.description,
    path: "/losninger",
    keywords: copy.keywords,
    locale,
  });
}

export default async function SolutionsPage() {
  const locale = await getLocale();
  const copy = copyByLocale[locale];

  return (
    <>
      <PageHero eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

      <section className="section-space">
        <div className="section-shell">
          <h2>{copy.sectionTitle}</h2>
          <p className="mt-6 max-w-4xl text-[18px] leading-[1.6] text-black">{copy.sectionDescription}</p>

          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {copy.solutions.map((solution) => (
              <Card key={solution.title} className="card-hover h-full">
                <CardHeader>
                  <CardTitle>{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[18px] leading-[1.6] text-black">{solution.description}</p>
                  <ul className="mt-6 space-y-2 text-[16px] leading-[1.55] text-black">
                    {solution.points.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-black/8 bg-[var(--surface-strong)]">
        <div className="section-shell">
          <h2>{copy.processTitle}</h2>
          <p className="mt-6 max-w-4xl text-[18px] leading-[1.6] text-black">{copy.processDescription}</p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {copy.process.map((item) => (
              <article key={item.step} className="surface-card p-6">
                <p className="text-[14px] font-semibold uppercase tracking-[0.06em] text-[var(--brand-blue)]">{item.step}</p>
                <h3 className="mt-3 text-[28px]">{item.title}</h3>
                <p className="mt-4 text-[18px] leading-[1.6] text-black">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        heading={copy.ctaHeading}
        description={copy.ctaDescription}
        primaryLabel={copy.ctaPrimary}
        primaryHref="/kontakt"
        secondaryLabel={copy.ctaSecondary}
        secondaryHref="/cases"
      />
    </>
  );
}
