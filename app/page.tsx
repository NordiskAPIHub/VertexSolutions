import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { CtaSection } from "@/components/marketing/cta-section";
import { ProcessTimeline } from "@/components/marketing/process-timeline";
import { VertexConvergenceSection } from "@/components/marketing/vertex-convergence-section";
import { Button } from "@/components/ui/button";
import { getCasesOverview } from "@/lib/cases";
import { type Locale } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n-server";
import { buildMetadata } from "@/lib/seo";

const metadataByLocale: Record<
  Locale,
  { title: string; description: string; keywords: string[] }
> = {
  da: {
    title: "Vertex Solutions | Digital rådgivning og strategi",
    description:
      "Vi hjælper virksomheder med digital strategi, AI-implementering og teknisk rådgivning. Specialiseret i skalering og effektivisering.",
    keywords: ["AI automatisering", "RAG", "workflow automation", "GDPR", "enterprise AI"],
  },
  en: {
    title: "Vertex Solutions | Digital advisory and strategy",
    description:
      "We help companies with digital strategy, AI implementation, and technical advisory. Specialized in scaling and optimization.",
    keywords: ["AI automation", "RAG", "workflow automation", "GDPR", "enterprise AI"],
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const copy = metadataByLocale[locale];

  return buildMetadata({
    title: copy.title,
    description: copy.description,
    path: "/",
    keywords: copy.keywords,
    locale,
  });
}

const methodByLocale: Record<
  Locale,
  Array<{ title: string; description: string; deliverables: string[] }>
> = {
  da: [
    {
      title: "Analyse af arbejdsgange og scope",
      description:
        "Vi kortlægger jeres nuværende processer, manuelle flaskehalse og datakilder, så projektet starter med et realistisk mål.",
      deliverables: ["Proceskort", "Baseline for tid og kvalitet", "Scope-dokument", "Succeskriterier"],
    },
    {
      title: "Skræddersyet systemdesign",
      description:
        "Vi designer en løsning til jeres konkrete kontekst med arkitektur, datamodeller, governance og sikkerhed fra dag ét.",
      deliverables: ["Løsningsdesign", "Datakontrakter", "RBAC-design", "Integrationsplan"],
    },
    {
      title: "Integration med eksisterende systemer",
      description:
        "Vi kobler løsningen til jeres nuværende systemlandskab via API, webhook eller batch, så dataflow og adgang fungerer stabilt.",
      deliverables: ["Integrationer i testmiljø", "Stabil data ingestion", "Adgangs- og logstruktur"],
    },
    {
      title: "Pilot og implementering",
      description:
        "Løsningen afprøves med realistiske data og brugere, så effekt, kvalitet og driftsklarhed dokumenteres før fuld produktion.",
      deliverables: [
        "Pilot i drift-kontekst",
        "Evalueringsramme",
        "Brugertræning",
        "Beslutningsoplæg til produktion",
      ],
    },
    {
      title: "Produktionssætning",
      description:
        "Vi sætter løsningen i produktion med monitorering, kvalitetssikring og kontrolleret release-proces.",
      deliverables: [
        "Produktionssætning",
        "Monitorering (metrics, tracing, alerts)",
        "Kontrolflow",
        "Release-proces",
      ],
    },
    {
      title: "Løbende support og optimering",
      description:
        "Efter go-live optimerer vi løbende performance, omkostning og kvalitet med faste driftsrytmer og tydelig ansvarlighed.",
      deliverables: [
        "SLA/SLO (hvis aftalt)",
        "Månedlig performance- og cost-review",
        "Kontrollerede forbedringer",
        "Governance-opfølgning",
      ],
    },
  ],
  en: [
    {
      title: "Workflow and scope analysis",
      description:
        "We map your current processes, manual bottlenecks, and data sources so the project starts with a realistic target state.",
      deliverables: ["Process map", "Time and quality baseline", "Scope document", "Success criteria"],
    },
    {
      title: "Tailored system design",
      description:
        "We design the solution for your context with architecture, data models, governance, and security from day one.",
      deliverables: ["Solution design", "Data contracts", "RBAC design", "Integration plan"],
    },
    {
      title: "Integration with existing systems",
      description:
        "We connect the solution to your current system landscape via API, webhook, or batch for stable access and data flow.",
      deliverables: ["Test-environment integrations", "Stable data ingestion", "Access and logging structure"],
    },
    {
      title: "Pilot and implementation",
      description:
        "The solution is validated with realistic data and users so impact, quality, and operational readiness are documented before full production.",
      deliverables: [
        "Pilot in an operational context",
        "Evaluation framework",
        "User enablement",
        "Production decision basis",
      ],
    },
    {
      title: "Production deployment",
      description:
        "We deploy with monitoring, quality assurance, and a controlled release process.",
      deliverables: [
        "Production deployment",
        "Monitoring (metrics, tracing, alerts)",
        "Control flow",
        "Release process",
      ],
    },
    {
      title: "Ongoing support and optimization",
      description:
        "After go-live we continuously optimize performance, cost, and quality through defined operating routines.",
      deliverables: [
        "SLA/SLO (if agreed)",
        "Monthly performance and cost review",
        "Controlled improvements",
        "Governance follow-up",
      ],
    },
  ],
};

const pageCopyByLocale: Record<
  Locale,
  {
    heroKicker: string;
    heroTitleA: string;
    heroTitleB: string;
    heroDescription: string;
    heroBullets: string[];
    primaryCta: string;
    secondaryCta: string;
    solutionsHeading: string;
    solutionsDescription: string;
    solutionsBullets: string[];
    methodHeading: string;
    methodDescription: string;
    deliverablesLabel: string;
    previousCasesHeading: string;
    allCases: string;
    finalCtaHeading: string;
    finalCtaDescription: string;
    finalPrimaryCta: string;
    finalSecondaryCta: string;
  }
> = {
  da: {
    heroKicker: "Vertex Solutions ApS",
    heroTitleA: "Automatisér arbejdet.",
    heroTitleB: "Behold kontrollen.",
    heroDescription:
      "Produktionsklare AI- og dataplatforme til organisationer, der kræver stabil drift, sporbarhed og governance.",
    heroBullets: ["Fra data til beslutningsstøtte", "Automation af workflows", "Enterprise sikkerhed og drift"],
    primaryCta: "Book et møde",
    secondaryCta: "Se cases",
    solutionsHeading: "Skræddersyede AI- og dataløsninger til drift",
    solutionsDescription:
      "Vi bygger produktionsmodne systemer, der automatiserer gentagne processer og gør viden operationel. Fokus er kontrolleret drift, governance og sporbarhed.",
    solutionsBullets: [
      "Workflow automation (triage, routing, kvalitetssikring)",
      "Videnssystemer på interne data (RAG)",
      "Dokumentintelligens (udtræk, struktur, validering)",
      "Data ingestion og harmonisering til stabilt beslutningsgrundlag",
    ],
    methodHeading: "Teknologisk metode i produktion",
    methodDescription:
      "En vertikal, kontrolleret leverancepipeline fra afklaring til drift. Hver fase har et konkret leverance-output og et beslutningspunkt.",
    deliverablesLabel: "I får",
    previousCasesHeading: "Tidligere cases",
    allCases: "Se alle",
    finalCtaHeading: "Ønsker I et kvalificeret estimat på effekt og tilbagebetalingstid?",
    finalCtaDescription:
      "Book et møde. Vi vurderer use-case, integrationsdybde, governance-krav og forventet forretningsgevinst.",
    finalPrimaryCta: "Book et møde",
    finalSecondaryCta: "Kontakt",
  },
  en: {
    heroKicker: "Vertex Solutions ApS",
    heroTitleA: "Automate the work.",
    heroTitleB: "Keep control.",
    heroDescription:
      "Production-grade AI and data platforms for organizations that require stable operations, traceability, and governance.",
    heroBullets: ["From data to decision support", "Workflow automation", "Enterprise security and operations"],
    primaryCta: "Book a meeting",
    secondaryCta: "See cases",
    solutionsHeading: "Tailored AI and data solutions for operations",
    solutionsDescription:
      "We build production-ready systems that automate repetitive processes and make knowledge operational. The focus is controlled operations, governance, and traceability.",
    solutionsBullets: [
      "Workflow automation (triage, routing, quality assurance)",
      "Knowledge systems on internal data (RAG)",
      "Document intelligence (extraction, structuring, validation)",
      "Data ingestion and harmonization for a stable decision foundation",
    ],
    methodHeading: "Technology method in production",
    methodDescription:
      "A controlled, vertical delivery pipeline from scoping to operations. Each phase has a concrete deliverable and a decision gate.",
    deliverablesLabel: "Deliverables",
    previousCasesHeading: "Previous cases",
    allCases: "See all",
    finalCtaHeading: "Do you want a qualified estimate of impact and payback time?",
    finalCtaDescription:
      "Book a meeting. We assess use case, integration depth, governance requirements, and expected business value.",
    finalPrimaryCta: "Book a meeting",
    finalSecondaryCta: "Contact",
  },
};

export default async function Home() {
  const locale = await getLocale();
  const copy = pageCopyByLocale[locale];
  const method = methodByLocale[locale];
  const cases = getCasesOverview(locale);

  return (
    <>
      <section className="section-space bg-[#000000] pb-[120px] pt-[120px] text-white">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[1px] text-white/65">{copy.heroKicker}</p>
            <h1 className="mt-6 font-semibold !text-white">
              {copy.heroTitleA}
              <br />
              {copy.heroTitleB}
            </h1>
            <p className="mt-6 max-w-2xl text-[18px] leading-[1.6] text-white/82">{copy.heroDescription}</p>
            <ul className="mt-8 space-y-3 text-[16px] text-white/85">
              {copy.heroBullets.map((bullet) => (
                <li key={bullet}>• {bullet}</li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/kontakt">{copy.primaryCta}</Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="border-white text-white hover:bg-white/5">
                <Link href="/cases" className="inline-flex items-center gap-2">
                  {copy.secondaryCta}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-black/8 bg-[var(--surface-strong)] py-[140px]">
        <Image
          src="/Vertex Tema 2.png"
          alt=""
          fill
          aria-hidden
          className="pointer-events-none object-cover opacity-[0.1]"
        />
        <div className="section-shell relative">
          <h2 className="text-[#000000]">{copy.solutionsHeading}</h2>
          <p className="mt-6 max-w-3xl text-[18px] leading-[1.6] text-[#000000]">{copy.solutionsDescription}</p>
          <ul className="mt-8 space-y-2 text-[16px] leading-[1.55] text-[#000000]">
            {copy.solutionsBullets.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <h3 className="mt-14 text-[36px] font-semibold leading-[1.2] text-[#000000]">{copy.methodHeading}</h3>
          <p className="mt-4 max-w-3xl text-[18px] leading-[1.6] text-[#000000]">{copy.methodDescription}</p>
          <ProcessTimeline steps={method} deliverablesLabel={copy.deliverablesLabel} />
        </div>
      </section>

      <VertexConvergenceSection locale={locale} />

      <section className="section-space border-y border-black/8 bg-[var(--surface-strong)]">
        <div className="section-shell">
          <div className="flex items-end justify-between gap-4">
            <h2>{copy.previousCasesHeading}</h2>
            <Link href="/cases" className="text-[16px] font-semibold text-[var(--brand-blue)]">
              {copy.allCases}
            </Link>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {cases.map((item) => (
              <Link key={item.slug} href={`/cases/${item.slug}`} className="group block">
                <article className="surface-card card-hover h-full overflow-hidden">
                  <div className="relative h-52 border-b border-black/10 bg-[var(--surface-strong)]">
                    <Image src={item.image} alt={item.imageAlt} fill className="object-contain p-6" />
                  </div>

                  <div className="space-y-4 p-8">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="text-[14px] font-medium uppercase tracking-[0.06em] text-black/70">{item.category}</p>
                      <span className="rounded-full border border-black/15 px-3 py-1 text-[13px] font-medium text-black">
                        {item.status}
                      </span>
                    </div>

                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-[18px] leading-[1.6] text-black">{item.summary}</p>
                    <ul className="space-y-1 text-[16px] leading-[1.55] text-black">
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>• {highlight}</li>
                      ))}
                    </ul>
                    <p className="inline-flex items-center gap-2 pt-1 text-[16px] font-semibold text-[var(--brand-blue)]">
                      {item.openLabel}
                      <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        heading={copy.finalCtaHeading}
        description={copy.finalCtaDescription}
        primaryLabel={copy.finalPrimaryCta}
        primaryHref="/kontakt"
        secondaryLabel={copy.finalSecondaryCta}
        secondaryHref="/kontakt"
      />
    </>
  );
}
