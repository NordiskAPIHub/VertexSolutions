import type { Locale } from "@/lib/i18n";

export const caseSlugs = ["lovguiden"] as const;
export type CaseSlug = (typeof caseSlugs)[number];

type CaseLocaleEntry = {
  overview: {
    category: string;
    title: string;
    summary: string;
    highlights: string[];
    status: string;
    openLabel: string;
  };
  detail: {
    eyebrow: string;
    title: string;
    description: string;
    caseLabel: string;
    caseTitle: string;
    challengeSummary: string;
    situationHeading: string;
    situationText: string;
    challengeHeading: string;
    challengePoints: string[];
    solutionHeading: string;
    solutionPhases: Array<{ title: string; description: string }>;
    resultHeading: string;
    resultPoints: string[];
    externalLabel: string;
    backToCasesLabel: string;
  };
};

type CaseDefinition = {
  slug: CaseSlug;
  image: string;
  imageAlt: Record<Locale, string>;
  externalUrl: string;
  locale: Record<Locale, CaseLocaleEntry>;
};

const caseDefinitions: CaseDefinition[] = [
  {
    slug: "lovguiden",
    image: "/Lovguiden.png",
    imageAlt: {
      da: "Lovguiden symbol",
      en: "Lovguiden symbol",
    },
    externalUrl: "https://www.lovguiden.dk/",
    locale: {
      da: {
        overview: {
          category: "Juridisk vidensplatform",
          title: "Lovguiden",
          summary:
            "Fuldautomatiseret juridisk vidensplatform med retrieval-baseret arkitektur, der leverer kildeverificerede svar i kontrolleret drift.",
          highlights: [
            "30+ officielle retskilder",
            "120.000+ domme og afgørelser",
            "Opdateringer flere gange dagligt",
          ],
          status: "I drift",
          openLabel: "Læs case",
        },
        detail: {
          eyebrow: "Case",
          title: "Lovguiden — Vidensplatform med retrieval i produktion",
          description: "Hvordan en juridisk AI-platform blev etableret med sporbarhed, governance og dokumenterbar præcision.",
          caseLabel: "CASE STUDY",
          caseTitle: "Kildeforankret juridisk research i produktionsdrift",
          challengeSummary:
            "Lovguiden blev etableret for at samle fragmenteret juridisk data i én platform med verificerbare svar, sporbarhed og stabil drift.",
          situationHeading: "Situation",
          situationText:
            "Før løsningen var juridisk research fordelt på mange kilder, manuelle søgeflows og uens dokumentation. Det gav høj tidsbelastning, varierende kvalitet i resultater og begrænset mulighed for ensartet governance.",
          challengeHeading: "Udfordring",
          challengePoints: [
            "Manglende sammenhæng mellem love, domme, afgørelser og vejledninger på tværs af kilder.",
            "Risiko for upræcise svar uden entydig kildehenvisning og juridisk kontekst.",
            "Ingen skalerbar mekanisme til løbende opdatering, konsolidering og versionsspor.",
          ],
          solutionHeading: "Løsning",
          solutionPhases: [
            {
              title: "01 — Datainfrastruktur og konsolidering",
              description:
                "Vertex etablerede automatiseret ingestion fra officielle retskilder, konsolidering af lovændringer og versionsstyring af datagrundlaget.",
            },
            {
              title: "02 — Retrieval-baseret AI-arkitektur",
              description:
                "Platformen blev bygget med chunking, embeddings, semantisk retrieval og re-ranking, så modelkald altid forankres i verificerede kilder.",
            },
            {
              title: "03 — Drift, kontrol og dokumentation",
              description:
                "Output blev standardiseret med tydelige kildehenvisninger, krydsreferencer og sporbarhed, så løsningen kunne anvendes i professionel juridisk praksis.",
            },
          ],
          resultHeading: "Resultat",
          resultPoints: [
            "30+ officielle retskilder integreret i én operationel platform.",
            "120.000+ domme og afgørelser indekseret i et semantisk datalag.",
            "Automatiseret opdateringsfrekvens flere gange dagligt.",
            "Kildeverificerede svar med dokumenterbarhed og governance i drift.",
          ],
          externalLabel: "Besøg lovguiden.dk",
          backToCasesLabel: "Tilbage til alle cases",
        },
      },
      en: {
        overview: {
          category: "Legal knowledge platform",
          title: "Lovguiden",
          summary:
            "Fully automated legal knowledge platform with retrieval-based architecture that delivers source-verified answers in controlled operations.",
          highlights: [
            "30+ official legal sources",
            "120,000+ rulings and decisions",
            "Updates multiple times daily",
          ],
          status: "In production",
          openLabel: "Read case",
        },
        detail: {
          eyebrow: "Case",
          title: "Lovguiden — Knowledge platform with production retrieval",
          description: "How a legal AI platform was established with traceability, governance, and documentable precision.",
          caseLabel: "CASE STUDY",
          caseTitle: "Source-anchored legal research in production",
          challengeSummary:
            "Lovguiden was established to unify fragmented legal data into one platform with verifiable answers, traceability, and stable operations.",
          situationHeading: "Situation",
          situationText:
            "Before implementation, legal research was spread across multiple sources, manual search flows, and inconsistent documentation. This created high time pressure, variable answer quality, and limited governance control.",
          challengeHeading: "Challenge",
          challengePoints: [
            "No unified context between statutes, case law, administrative rulings, and guidance.",
            "Risk of imprecise answers without explicit source references and legal context.",
            "No scalable mechanism for continuous updates, consolidation, and version traceability.",
          ],
          solutionHeading: "Solution",
          solutionPhases: [
            {
              title: "01 — Data infrastructure and consolidation",
              description:
                "Vertex implemented automated ingestion from official legal sources, law-change consolidation, and version-controlled data management.",
            },
            {
              title: "02 — Retrieval-based AI architecture",
              description:
                "The platform was built with chunking, embeddings, semantic retrieval, and re-ranking to ground every model response in verified sources.",
            },
            {
              title: "03 — Operations, control, and documentation",
              description:
                "Output was standardized with explicit source references, cross-linking, and traceability to support professional legal workflows.",
            },
          ],
          resultHeading: "Result",
          resultPoints: [
            "30+ official legal sources integrated into one operational platform.",
            "120,000+ rulings and decisions indexed in a semantic data layer.",
            "Automated updates executed multiple times per day.",
            "Source-verified responses with production-grade governance and traceability.",
          ],
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
      image: item.image,
      imageAlt: item.imageAlt[locale],
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
    image: match.image,
    imageAlt: match.imageAlt[locale],
    externalUrl: match.externalUrl,
    overview: localized.overview,
    detail: localized.detail,
  };
}
