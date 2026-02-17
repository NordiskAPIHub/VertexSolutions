import type { Metadata } from "next";
import Image from "next/image";
import { CtaSection } from "@/components/marketing/cta-section";
import { PageHero } from "@/components/marketing/page-hero";
import { type Locale } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n-server";
import { buildMetadata } from "@/lib/seo";

const metadataByLocale: Record<
  Locale,
  { title: string; description: string; keywords: string[] }
> = {
  da: {
    title: "Om os",
    description: "Baggrund, kernekompetencer og leveranceprincipper hos Vertex Solutions.",
    keywords: ["Vertex team", "AI kompetencer", "RAG arkitektur", "governance-first"],
  },
  en: {
    title: "About",
    description: "Background, core competencies, and delivery principles at Vertex Solutions.",
    keywords: ["Vertex team", "AI competencies", "RAG architecture", "governance-first"],
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const copy = metadataByLocale[locale];

  return buildMetadata({
    title: copy.title,
    description: copy.description,
    path: "/om-os",
    keywords: copy.keywords,
    locale,
  });
}

const founderProfilesByLocale: Record<
  Locale,
  Array<{
    name: string;
    role: string;
    image: string;
    imageAlt: string;
    intro: string;
    focus: string[];
    experience: string[];
    education: string[];
  }>
> = {
  da: [
    {
      name: "Oscar Hoffmann",
      role: "Founder · AI Engineering & Arkitektur",
      image: "/Oscar photo.png",
      imageAlt: "Oscar Hoffmann portræt",
      intro:
        "B.Eng. i Electrical Engineering fra DTU. Oscar arbejder i krydsfeltet mellem semantisk søgning, RAG-arkitektur og driftsstabil softwareudvikling.",
      focus: [
        "RAG, retrieval pipelines og vektorbaseret søgning",
        "Datamodeldesign og systemarkitektur",
        "Full-stack udvikling og SaaS-leverance",
        "Automatisering af dokument- og dataflows",
      ],
      experience: [
        "Teknisk chef, Økonomi & Personale Academy (2024–nu): udvikling af Lovguiden og semantisk juridisk søgning.",
        "Full Stack Engineer, Spaak Technologies (2025): kode, LLM-træning og produktionsnær implementering.",
        "Tidligere hardware- og EMC-erfaring (LINAK/DTU), som styrker systemdisciplin og robust design.",
      ],
      education: ["B.Eng., Electrical Engineering, DTU (2018–2022)"],
    },
    {
      name: "Emil Kanneworff",
      role: "Founder · Kommerciel Forankring & Strategi",
      image: "/Emil photo.png",
      imageAlt: "Emil Kanneworff portræt",
      intro:
        "DTU-ingeniør i Process & Innovation og MSc-studerende i Digital Business på CBS. Emil binder teknologi sammen med forretningsmål, implementering og beslutningskraft i organisationen.",
      focus: [
        "B2B go-to-market, partnerskaber og salgsforankring",
        "Procesoptimering og digital implementering",
        "Projektgovernance, stakeholder management og change management",
        "Platformstrategi og værdikæde i digitale forretningsmodeller",
      ],
      experience: [
        "Bachelorprojekt med Novo Nordisk (2024–2025): procesoptimering, tværfaglige workshops og digital standardisering af handovers.",
        "B2B Sales & Partnerships, SUPPLME (2024): kommerciel skalering og kunde-/partnerdialog.",
        "Løbende driftsnær salgs- og kundeerfaring i operative roller.",
      ],
      education: [
        "MSc, Digital Business, Copenhagen Business School (2025–2027, igangværende)",
        "B.Eng., Process & Innovation, DTU (2021–2025)",
      ],
    },
  ],
  en: [
    {
      name: "Oscar Hoffmann",
      role: "Founder · AI Engineering & Architecture",
      image: "/Oscar photo.png",
      imageAlt: "Portrait of Oscar Hoffmann",
      intro:
        "Founder of Lovguiden.dk and B.Eng. in Electrical Engineering from DTU. Oscar works at the intersection of semantic search, RAG architecture, and production-stable software engineering.",
      focus: [
        "RAG, retrieval pipelines, and vector-based search",
        "Data model design and system architecture",
        "Full-stack development and SaaS delivery",
        "Automation of document and data flows",
      ],
      experience: [
        "Technical Lead, Økonomi & Personale Academy (2024–present): development of Lovguiden and semantic legal search.",
        "Full Stack Engineer, Spaak Technologies (2025): coding, LLM training, and production-near implementation.",
        "Previous hardware and EMC experience (LINAK/DTU), strengthening engineering discipline and robust design.",
      ],
      education: ["B.Eng., Electrical Engineering, DTU (2018–2022)"],
    },
    {
      name: "Emil Kanneworff",
      role: "Founder · Commercial Execution & Strategy",
      image: "/Emil photo.png",
      imageAlt: "Portrait of Emil Kanneworff",
      intro:
        "DTU engineer in Process & Innovation and MSc candidate in Digital Business at CBS. Emil connects technology with business outcomes, implementation, and decision momentum in organizations.",
      focus: [
        "B2B go-to-market, partnerships, and commercial anchoring",
        "Process optimization and digital implementation",
        "Project governance, stakeholder management, and change management",
        "Platform strategy and value chain design in digital business models",
      ],
      experience: [
        "Bachelor thesis with Novo Nordisk (2024–2025): process optimization, cross-functional workshops, and digital handover standardization.",
        "B2B Sales & Partnerships, SUPPLME (2024): commercial scaling and customer/partner dialogue.",
        "Ongoing operational sales and customer experience in frontline roles.",
      ],
      education: [
        "MSc, Digital Business, Copenhagen Business School (2025–2027, ongoing)",
        "B.Eng., Process & Innovation, DTU (2021–2025)",
      ],
    },
  ],
};

const copyByLocale: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    foundersHeading: string;
    foundersDescription: string;
    focusHeading: string;
    experienceHeading: string;
    educationHeading: string;
    ctaHeading: string;
    ctaDescription: string;
    ctaPrimary: string;
    ctaSecondary: string;
  }
> = {
  da: {
    eyebrow: "Om os",
    title: "Specialiseret AI-engineering med driftsansvar",
    description: "Vi bygger produktionsklare platforme til organisationer med krav til sporbarhed, kontrol og stabil drift.",
    foundersHeading: "Founders med dokumenteret teknisk og kommerciel tyngde",
    foundersDescription:
      "Vertex er bygget på en klar arbejdsdeling: dyb teknisk arkitektur kombineret med forretningsmæssig forankring. Det gør os i stand til at levere løsninger, der både virker i kodebasen og i organisationen.",
    focusHeading: "Fokusområder",
    experienceHeading: "Udvalgt erfaring",
    educationHeading: "Uddannelse",
    ctaHeading: "Skal vi vurdere jeres use-case?",
    ctaDescription: "Vi giver en præcis vurdering af potentiale, risiko og implementeringsvej.",
    ctaPrimary: "Book et møde",
    ctaSecondary: "Se cases",
  },
  en: {
    eyebrow: "About",
    title: "Specialized AI engineering with operational accountability",
    description:
      "We build production-ready platforms for organizations with requirements for traceability, control, and stable operations.",
    foundersHeading: "Founders with proven technical and commercial depth",
    foundersDescription:
      "Vertex is built on clear role separation: deep technical architecture combined with commercial execution. This enables solutions that work both in the codebase and in the organization.",
    focusHeading: "Focus areas",
    experienceHeading: "Selected experience",
    educationHeading: "Education",
    ctaHeading: "Should we assess your use case?",
    ctaDescription: "We provide a precise assessment of potential, risk, and implementation path.",
    ctaPrimary: "Book a meeting",
    ctaSecondary: "See cases",
  },
};

export default async function AboutPage() {
  const locale = await getLocale();
  const copy = copyByLocale[locale];
  const founderProfiles = founderProfilesByLocale[locale];

  return (
    <>
      <PageHero eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

      <section className="section-space border-y border-black/8 bg-[var(--surface-strong)]">
        <div className="section-shell">
          <h2>{copy.foundersHeading}</h2>
          <p className="mt-6 max-w-4xl text-[18px] leading-[1.6] text-[#000000]">{copy.foundersDescription}</p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {founderProfiles.map((profile) => (
              <article key={profile.name} className="surface-card rounded-[10px] p-8">
                <div className="flex items-center gap-4">
                  <Image
                    src={profile.image}
                    alt={profile.imageAlt}
                    width={88}
                    height={88}
                    className="rounded-[10px] object-cover"
                  />
                  <div>
                    <h3>{profile.name}</h3>
                    <p className="mt-1 text-[16px] font-medium text-[#000000]">{profile.role}</p>
                  </div>
                </div>

                <p className="mt-6 text-[18px] leading-[1.6] text-[#000000]">{profile.intro}</p>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--brand-blue)]">
                    {copy.focusHeading}
                  </p>
                  <ul className="mt-3 space-y-2 text-[16px] text-[#000000]">
                    {profile.focus.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--brand-blue)]">
                    {copy.experienceHeading}
                  </p>
                  <ul className="mt-3 space-y-2 text-[16px] text-[#000000]">
                    {profile.experience.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--brand-blue)]">
                    {copy.educationHeading}
                  </p>
                  <ul className="mt-3 space-y-2 text-[16px] text-[#000000]">
                    {profile.education.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
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
