import type { Locale } from "@/lib/i18n";

export const caseSlugs = ["lovguiden"] as const;
export type CaseSlug = (typeof caseSlugs)[number];

type CaseOverview = {
  category: string;
  title: string;
  summary: string;
  highlights: string[];
  status: string;
  openLabel: string;
};

type CaseDetail = {
  eyebrow: string;
  title: string;
  description: string;
  caseLabel: string;
  overviewHeading: string;
  overviewItems: Array<{ label: string; value: string }>;
  situationChallengeHeading: string;
  situationLead: string;
  professionalSourcesHeading: string;
  professionalSources: string[];
  modelRiskHeading: string;
  modelRiskPoints: string[];
  needHeading: string;
  needPoints: string[];
  solutionHeading: string;
  solutionIntro: string;
  solutionPhases: Array<{ title: string; points: string[]; note?: string }>;
  architectureHeading: string;
  architectureIntro: string;
  architecturePoints: string[];
  architectureOutro: string;
  resultHeading: string;
  resultIntro: string;
  resultPoints: string[];
  resultOutro: string;
  positioningHeading: string;
  positioningIntro: string;
  positioningPoints: string[];
  positioningOutro: string;
  externalLabel: string;
  backToCasesLabel: string;
};

type CaseLocaleEntry = {
  overview: CaseOverview;
  detail: CaseDetail;
};

type CaseDefinition = {
  slug: CaseSlug;
  images: {
    teaser: string;
    detail: string;
  };
  imageAlt: Record<
    Locale,
    {
      teaser: string;
      detail: string;
    }
  >;
  externalUrl: string;
  locale: Record<Locale, CaseLocaleEntry>;
};

const caseDefinitions: CaseDefinition[] = [
  {
    slug: "lovguiden",
    images: {
      teaser: "/Lovguiden.png",
      detail: "/Lovguiden Case.jpeg",
    },
    imageAlt: {
      da: {
        teaser: "Lovguiden symbol",
        detail: "Lovguiden case visual",
      },
      en: {
        teaser: "Lovguiden symbol",
        detail: "Lovguiden case visual",
      },
    },
    externalUrl: "https://www.lovguiden.dk/",
    locale: {
      da: {
        overview: {
          category: "Juridisk AI-platform",
          title: "Lovguiden",
          summary:
            "Opbygning af en fuldautomatiseret juridisk AI-platform med verificerbar præcision, kildeforankring og kontinuerlig opdatering.",
          highlights: [
            "30+ officielle retskilder",
            "120.000+ domme og afgørelser",
            "Flere daglige opdateringer via automatiseret ingestion",
          ],
          status: "I drift",
          openLabel: "Læs case",
        },
        detail: {
          eyebrow: "Case",
          title: "Lovguiden",
          description: "Opbygning af en fuldautomatiseret juridisk AI-platform med verificerbar præcision.",
          caseLabel: "CASE",
          overviewHeading: "Overblik",
          overviewItems: [
            {
              label: "Platform",
              value: "Komplet AI-drevet juridisk research- og vidensplatform.",
            },
            {
              label: "Teknologi",
              value: "RAG-arkitektur med embeddings, vektorindeks, semantisk retrieval og automatisk kildevalidering.",
            },
            {
              label: "Datagrundlag",
              value: "30+ officielle retskilder. 120.000+ domme og afgørelser. Konsolideret dansk og EU-lovgivning.",
            },
            {
              label: "Opdateringsfrekvens",
              value: "Flere gange dagligt via automatiseret ingestion pipeline.",
            },
          ],
          situationChallengeHeading: "Situation & udfordring",
          situationLead: "Juridisk research er fragmenteret, tidskrævende og risikofyldt.",
          professionalSourcesHeading: "Professionelle brugere arbejder på tværs af:",
          professionalSources: [
            "Retsinformation",
            "Domstolsdatabaser",
            "EU-retskilder",
            "Administrative afgørelser",
            "Vejledninger og forarbejder",
          ],
          modelRiskHeading: "Generelle AI-modeller skaber yderligere usikkerhed:",
          modelRiskPoints: [
            "Ingen kildegaranti",
            "Ingen konsolideret lovgivning",
            "Risiko for hallucinationer",
            "Manglende juridisk kontekst",
          ],
          needHeading: "Der var behov for en platform, der:",
          needPoints: [
            "Samler hele retsgrundlaget ét sted",
            "Forstår juridisk semantik",
            "Svarer udelukkende på verificerede kilder",
            "Dokumenterer hvert svar",
          ],
          solutionHeading: "Løsning",
          solutionIntro:
            "Vertex Solutions designede og implementerede en vertikal AI-arkitektur specifikt til juridisk informationsbehandling.",
          solutionPhases: [
            {
              title: "1. Datainfrastruktur",
              points: [
                "Automatisk indsamling fra 30+ officielle retskilder",
                "Konsolidering af lovændringer i gældende lovtekst",
                "Automatisk versionsstyring",
                "Krydsreferencer mellem love, domme og forarbejder",
              ],
            },
            {
              title: "2. Retrieval-baseret AI (RAG)",
              points: [
                "Chunking af dokumenter",
                "Vektorembeddings",
                "Semantisk matchning",
                "Re-ranking før modelkald",
                "Prompt-berigelse med verificerede kilder",
              ],
              note: "AI’en svarer kun på baggrund af indekserede retskilder, ikke generel internetinformation. Det reducerer hallucinationer markant og øger dokumenterbarheden.",
            },
            {
              title: "3. Funktionelle moduler",
              points: [
                "AI-assisteret søgning: naturligt sprog til semantisk forståelse og kildebaseret svar",
                "Skræddersyede overvågningsrapporter: automatiseret monitorering af nye domme og lovændringer",
                "Dokumentassistent: upload, analyse og præcise sidehenvisninger",
                "EU- og dansk ret integreret i samme model",
              ],
            },
          ],
          architectureHeading: "Arkitektur",
          architectureIntro: "Platformen er udviklet med:",
          architecturePoints: [
            "Supabase (EU-hostet database)",
            "Vektorindeks",
            "Streaming AI-respons",
            "SSR-auth integration",
            "Retrieval-augmented generation pipeline",
          ],
          architectureOutro: "Systemet er fuldautomatiseret og opdaterer databasen flere gange dagligt.",
          resultHeading: "Resultat",
          resultIntro: "Lovguiden leverer:",
          resultPoints: [
            "Kildeverificerede svar",
            "Konsolideret lovgivning",
            "Automatisk krydsreferering",
            "Daglige opdateringer",
            "Juridisk semantisk søgning",
            "Dokumenterbar præcision",
          ],
          resultOutro:
            "Platformen fungerer i dag som en komplet juridisk AI-infrastruktur, ikke blot en chatbot, men et system.",
          positioningHeading: "Teknologisk positionering",
          positioningIntro: "Lovguiden demonstrerer Vertex Solutions’ kernekompetence:",
          positioningPoints: [
            "Produktion af domænespecifikke AI-systemer",
            "Kontrolleret RAG-arkitektur",
            "Datagovernance og sporbarhed",
            "Hallucinationsreduktion gennem prompt-grounding",
            "Full-stack AI-udvikling",
          ],
          positioningOutro: "Dette er ikke generisk AI. Det er vertikal, kontrolleret AI i produktion.",
          externalLabel: "Besøg lovguiden.dk",
          backToCasesLabel: "Tilbage til alle cases",
        },
      },
      en: {
        overview: {
          category: "Legal AI platform",
          title: "Lovguiden",
          summary:
            "Building a fully automated legal AI platform with verifiable precision, source grounding, and continuous updates.",
          highlights: [
            "30+ official legal sources",
            "120,000+ rulings and decisions",
            "Multiple daily updates via automated ingestion",
          ],
          status: "In production",
          openLabel: "Read case",
        },
        detail: {
          eyebrow: "Case",
          title: "Lovguiden",
          description: "Building a fully automated legal AI platform with verifiable precision.",
          caseLabel: "CASE",
          overviewHeading: "Overview",
          overviewItems: [
            {
              label: "Platform",
              value: "Complete AI-driven legal research and knowledge platform.",
            },
            {
              label: "Technology",
              value: "RAG architecture with embeddings, vector index, semantic retrieval, and automated source validation.",
            },
            {
              label: "Data foundation",
              value: "30+ official legal sources. 120,000+ rulings and decisions. Consolidated Danish and EU law.",
            },
            {
              label: "Update frequency",
              value: "Multiple times daily through an automated ingestion pipeline.",
            },
          ],
          situationChallengeHeading: "Situation & challenge",
          situationLead: "Legal research is fragmented, time-consuming, and risk-prone.",
          professionalSourcesHeading: "Professional users work across:",
          professionalSources: [
            "Retsinformation",
            "Court databases",
            "EU legal sources",
            "Administrative rulings",
            "Guidance and preparatory works",
          ],
          modelRiskHeading: "General AI models create additional uncertainty:",
          modelRiskPoints: [
            "No source guarantees",
            "No consolidated legal text",
            "Risk of hallucinations",
            "Missing legal context",
          ],
          needHeading: "There was a need for a platform that:",
          needPoints: [
            "Collects the entire legal basis in one place",
            "Understands legal semantics",
            "Answers exclusively from verified sources",
            "Documents every answer",
          ],
          solutionHeading: "Solution",
          solutionIntro:
            "Vertex Solutions designed and implemented a vertical AI architecture specifically for legal information processing.",
          solutionPhases: [
            {
              title: "1. Data infrastructure",
              points: [
                "Automated collection from 30+ official legal sources",
                "Consolidation of law changes into current legal text",
                "Automated version control",
                "Cross-references between laws, rulings, and preparatory works",
              ],
            },
            {
              title: "2. Retrieval-based AI (RAG)",
              points: [
                "Document chunking",
                "Vector embeddings",
                "Semantic matching",
                "Re-ranking before model calls",
                "Prompt enrichment with verified sources",
              ],
              note: "The AI answers only from indexed legal sources, not general internet content. This significantly reduces hallucinations and increases documentability.",
            },
            {
              title: "3. Functional modules",
              points: [
                "AI-assisted search: natural language to semantic understanding and source-backed answers",
                "Tailored monitoring reports: automated monitoring of new rulings and legal changes",
                "Document assistant: upload, analysis, and precise page references",
                "EU and Danish law integrated in the same model",
              ],
            },
          ],
          architectureHeading: "Architecture",
          architectureIntro: "The platform is built with:",
          architecturePoints: [
            "Supabase (EU-hosted database)",
            "Vector index",
            "Streaming AI response",
            "SSR-auth integration",
            "Retrieval-augmented generation pipeline",
          ],
          architectureOutro: "The system is fully automated and updates the database multiple times daily.",
          resultHeading: "Result",
          resultIntro: "Lovguiden delivers:",
          resultPoints: [
            "Source-verified answers",
            "Consolidated legal text",
            "Automated cross-referencing",
            "Daily updates",
            "Legal semantic search",
            "Documentable precision",
          ],
          resultOutro:
            "Today the platform operates as complete legal AI infrastructure, not just a chatbot, but a system.",
          positioningHeading: "Technology positioning",
          positioningIntro: "Lovguiden demonstrates Vertex Solutions’ core competence in:",
          positioningPoints: [
            "Production of domain-specific AI systems",
            "Controlled RAG architecture",
            "Data governance and traceability",
            "Hallucination reduction through prompt grounding",
            "Full-stack AI development",
          ],
          positioningOutro: "This is not generic AI. It is vertical, controlled AI in production.",
          externalLabel: "Visit lovguiden.dk",
          backToCasesLabel: "Back to all cases",
        },
      },
    },
  },
];

export function getCaseSlugs(): CaseSlug[] {
  return caseDefinitions.map((item) => item.slug);
}

export function getCasesOverview(locale: Locale) {
  return caseDefinitions.map((item) => {
    const localized = item.locale[locale];
    return {
      slug: item.slug,
      image: item.images.teaser,
      imageAlt: item.imageAlt[locale].teaser,
      externalUrl: item.externalUrl,
      ...localized.overview,
    };
  });
}

export function getCaseBySlug(slug: string, locale: Locale) {
  const match = caseDefinitions.find((item) => item.slug === slug);
  if (!match) {
    return null;
  }

  const localized = match.locale[locale];

  return {
    slug: match.slug,
    image: match.images.detail,
    imageAlt: match.imageAlt[locale].detail,
    externalUrl: match.externalUrl,
    overview: localized.overview,
    detail: localized.detail,
  };
}
