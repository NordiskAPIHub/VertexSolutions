import type { Metadata } from "next";
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
    title: "Løsninger",
    description: "Løsninger designet til produktion: automation, knowledge systems og dokumentintelligens.",
    keywords: ["AI knowledge platform", "workflow automation", "document intelligence", "data ingestion"],
  },
  en: {
    title: "Solutions",
    description: "Solutions designed for production: automation, knowledge systems, and document intelligence.",
    keywords: ["AI knowledge platform", "workflow automation", "document intelligence", "data ingestion"],
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

type VisualBlueprintItem = {
  title: string;
  purpose: string;
  useCase?: string;
  flow?: string[];
  caption?: string;
  prompt: string[];
};

const designSystemPromptByLocale: Record<Locale, string[]> = {
  da: [
    "Maintain consistent design system:",
    "Primary color: #163e64",
    "Text: #000000",
    "Secondary elements: #404040",
    "No gradients",
    "No shadows",
    "No 3D",
    "No playful design",
    "Enterprise minimalism",
    "High-end SaaS presentation quality",
    "Designed for boardroom presentation",
  ],
  en: [
    "Maintain consistent design system:",
    "Primary color: #163e64",
    "Text: #000000",
    "Secondary elements: #404040",
    "No gradients",
    "No shadows",
    "No 3D",
    "No playful design",
    "Enterprise minimalism",
    "High-end SaaS presentation quality",
    "Designed for boardroom presentation",
  ],
};

const visualBlueprintsByLocale: Record<Locale, VisualBlueprintItem[]> = {
  da: [
    {
      title: "1) Skræddersyet Chatbot (pyramide)",
      purpose: "Positionér Vertex-chatbots som vertikalt specialiserede systemer, ikke generel AI.",
      prompt: [
        "Create an ultra-minimalist enterprise-style vector diagram on white background.",
        "",
        "Design a clean comparison pyramid.",
        "",
        "Bottom layer (wide trapezoid, muted grey #404040 20% opacity):",
        'Title: "Generel AI"',
        "Small bullet points inside:",
        "- Trænet på bred internetdata",
        "- Ingen domæneafgrænsning",
        "- Ingen garanti for kilder",
        "- Varierende præcision",
        "",
        "Above it, a smaller sharp triangle in deep navy #163e64:",
        'Title inside triangle: "Vertex Skræddersyet Chatbot"',
        "Small text:",
        "- Afgrænset datagrundlag",
        "- RAG-baseret retrieval",
        "- Validerbare kilder",
        "- Rollebaseret adgang",
        "- Kontekststyret output",
        "",
        "On the left side, a thin vertical axis labeled:",
        '"Præcision & Kontrol" (arrow upward)',
        "",
        "On the bottom horizontal axis:",
        '"Datakvalitet"',
        "",
        "Use thin black lines (#000000).",
        "Perfect symmetry.",
        "Modern Swiss typography style.",
        "Very high whitespace.",
        "Enterprise SaaS visual identity.",
        "Flat vector design.",
      ],
    },
    {
      title: "2) Automatiseret arbejdsgang – kundeservice",
      purpose: "Vis et realistisk flow fra henvendelse til automatisk svar eller kontrolleret eskalering.",
      useCase: "Kundeservice automatisering",
      flow: [
        "Kunde henvendelse",
        "Klassificering (AI)",
        "Match mod videnbase",
        "Generer svar",
        "Decision diamond: Automatisk sendt / Eskaler til medarbejder",
      ],
      caption: "Reducerer manuel behandling med op til 70%",
      prompt: [
        "Create a horizontal process flow diagram in ultra-clean enterprise style.",
        "White background.",
        "Thin black lines.",
        "Accent color #163e64.",
        "",
        "Flow:",
        "[Kunde henvendelse]",
        "→ [Klassificering (AI)]",
        "→ [Match mod videnbase]",
        "→ [Generer svar]",
        "→ Decision diamond:",
        "  - Automatisk sendt",
        "  - Eskaler til medarbejder",
        "",
        "All shapes minimal rounded rectangles.",
        "Use consistent spacing grid.",
        "No icons.",
        "No clipart.",
        "No 3D.",
        "",
        'Add small caption under diagram: "Reducerer manuel behandling med op til 70%"',
        "Style inspired by Stripe product documentation diagrams.",
        "Flat vector.",
        "Extremely clean.",
      ],
    },
    {
      title: "3) Automatiseret arbejdsgang – internt beslutningsflow",
      purpose: "Vis kontrolleret kvalitetssikring med tydelig adskillelse mellem AI-trin og menneskelig godkendelse.",
      useCase: "Klagehåndtering / kvalitetssikring",
      flow: [
        "Sag oprettes",
        "AI analyserer dokumenter",
        "Sammenligner med historiske afgørelser",
        "Genererer risikoscore",
        "Jurist godkender",
        "Opdaterer vidensbank automatisk",
      ],
      prompt: [
        "Create a vertical enterprise workflow diagram.",
        "White background.",
        "Minimalist.",
        "Thin 2px lines.",
        "",
        "Flow blocks:",
        "- Sag oprettes",
        "- AI analyserer dokumenter",
        "- Sammenligner med historiske afgørelser",
        "- Genererer risikoscore",
        "- Jurist godkender",
        "- Opdaterer vidensbank automatisk",
        "",
        "Highlight AI-driven steps with deep navy #163e64 background and white text.",
        "Human steps in white boxes with black outline.",
        "No decoration.",
        "Only structural clarity.",
        "Modern SaaS system architecture style.",
        "Extremely structured.",
        "Very high whitespace.",
        "Designed for CIO-level presentation.",
      ],
    },
    {
      title: "4) Komplet AI-platform (RAG pipeline)",
      purpose: "Flagship-visual: én lineær pipeline fra datakilder til struktureret beslutningsoutput.",
      flow: [
        "Datakilder (API, Dokumenter, CRM, ERP)",
        "Chunking & Strukturering",
        "Embeddings",
        "Vector Database",
        "Retrieval & Re-ranking",
        "LLM",
        "Struktureret Output (JSON / Rapport / Handling)",
      ],
      caption: "Kontrolleret pipeline fra data til beslutning",
      prompt: [
        "Create a modern enterprise AI architecture diagram.",
        "Horizontal layout.",
        "White background.",
        "Clean grid.",
        "",
        "Left column:",
        '"Datakilder" (API, Dokumenter, CRM, ERP)',
        "",
        "Arrow → Chunking & Strukturering",
        "Arrow → Embeddings",
        "Arrow → Vector Database",
        "Arrow → Retrieval & Re-ranking",
        "Arrow → LLM",
        "Arrow → Struktureret Output (JSON / Rapport / Handling)",
        "",
        "Use deep navy #163e64 for system core components.",
        "Use black thin arrows.",
        "No vendor logos.",
        "No MongoDB.",
        "No OpenAI icons.",
        "",
        'Small caption bottom: "Kontrolleret pipeline fra data til beslutning"',
        "Flat vector.",
        "Ultra minimal.",
        "Designed for technical decision makers.",
      ],
    },
    {
      title: "5) Automatiseret mail-system",
      purpose: "Vis kontrolleret, kontekstbaseret outbound-flow fra nye dokumenter til segmenteret udsendelse.",
      flow: [
        "Nye dokumenter",
        "AI analyserer & kategoriserer",
        "Genererer opsummering",
        "Segmenterer modtagerliste",
        "Sender personaliseret email",
      ],
      caption: "Automatiseret, kontekstbaseret kommunikation",
      prompt: [
        "Create a clean automated email system diagram.",
        "Horizontal flow.",
        "White background.",
        "",
        "Blocks:",
        "- Nye dokumenter",
        "- AI analyserer & kategoriserer",
        "- Genererer opsummering",
        "- Segmenterer modtagerliste",
        "- Sender personaliseret email",
        "",
        "Use subtle accent color #163e64 only for AI block.",
        "All other blocks white with black border.",
        "",
        'Add small subtext: "Automatiseret, kontekstbaseret kommunikation"',
        "Minimalist.",
        "No icons.",
        "No envelope graphics.",
        "No illustrations.",
        "Just structured boxes and arrows.",
        "Modern enterprise documentation style.",
      ],
    },
    {
      title: "6) Automatiseret salgsagent",
      purpose: "Vis et strategisk lead-to-CRM flow med tydelige AI-komponenter og seriøs enterprise-tone.",
      flow: [
        "Lead indsamles",
        "Data berigelse",
        "Intent analyse (AI)",
        "Generer personaliseret outreach",
        "Automatisk opfølgning",
        "CRM opdatering",
      ],
      caption: "AI-drevet salgsagent – fra lead til lukket dialog",
      prompt: [
        "Create a premium SaaS style sales automation architecture diagram.",
        "White background.",
        "High whitespace.",
        "",
        "Flow:",
        "Lead indsamles",
        "→ Data berigelse",
        "→ Intent analyse (AI)",
        "→ Generer personaliseret outreach",
        "→ Automatisk opfølgning",
        "→ CRM opdatering",
        "",
        "Highlight AI-driven components with navy #163e64.",
        "Use very thin black lines.",
        "No icons.",
        "No stock visuals.",
        "Clean Swiss layout.",
        "Balanced spacing.",
        "Serious enterprise tone.",
        "",
        'Caption: "AI-drevet salgsagent – fra lead til lukket dialog"',
      ],
    },
  ],
  en: [
    {
      title: "1) Tailored chatbot (pyramid)",
      purpose: "Position Vertex chatbots as vertically specialized systems, not general AI.",
      prompt: [
        "Create an ultra-minimalist enterprise-style vector diagram on white background.",
        "",
        "Design a clean comparison pyramid.",
        "",
        "Bottom layer (wide trapezoid, muted grey #404040 20% opacity):",
        'Title: "General AI"',
        "Small bullet points inside:",
        "- Trained on broad internet data",
        "- No domain boundary",
        "- No source guarantees",
        "- Variable precision",
        "",
        "Above it, a smaller sharp triangle in deep navy #163e64:",
        'Title inside triangle: "Vertex Tailored Chatbot"',
        "Small text:",
        "- Scoped data foundation",
        "- RAG-based retrieval",
        "- Verifiable sources",
        "- Role-based access",
        "- Context-governed output",
        "",
        'On the left side, a thin vertical axis labeled: "Precision & Control" (arrow upward)',
        'On the bottom horizontal axis: "Data Quality"',
        "",
        "Use thin black lines (#000000).",
        "Perfect symmetry.",
        "Modern Swiss typography style.",
        "Very high whitespace.",
        "Enterprise SaaS visual identity.",
        "Flat vector design.",
      ],
    },
    {
      title: "2) Automated workflow – customer service",
      purpose: "Show a realistic flow from inquiry to automatic response or controlled escalation.",
      useCase: "Customer service automation",
      flow: [
        "Customer inquiry",
        "Classification (AI)",
        "Match against knowledge base",
        "Generate answer",
        "Decision diamond: Auto-send / Escalate to employee",
      ],
      caption: "Reduces manual processing by up to 70%",
      prompt: [
        "Create a horizontal process flow diagram in ultra-clean enterprise style.",
        "White background.",
        "Thin black lines.",
        "Accent color #163e64.",
        "",
        "Flow:",
        "[Customer inquiry]",
        "→ [Classification (AI)]",
        "→ [Match against knowledge base]",
        "→ [Generate answer]",
        "→ Decision diamond:",
        "  - Auto-send",
        "  - Escalate to employee",
        "",
        "All shapes minimal rounded rectangles.",
        "Use consistent spacing grid.",
        "No icons.",
        "No clipart.",
        "No 3D.",
        "",
        'Add small caption under diagram: "Reduces manual processing by up to 70%"',
        "Style inspired by Stripe product documentation diagrams.",
        "Flat vector.",
        "Extremely clean.",
      ],
    },
    {
      title: "3) Automated workflow – internal decision flow",
      purpose: "Show controlled quality assurance with clear separation between AI steps and human approval.",
      useCase: "Complaint handling / quality assurance",
      flow: [
        "Case created",
        "AI analyzes documents",
        "Compares with historical decisions",
        "Generates risk score",
        "Lawyer approves",
        "Updates knowledge base automatically",
      ],
      prompt: [
        "Create a vertical enterprise workflow diagram.",
        "White background.",
        "Minimalist.",
        "Thin 2px lines.",
        "",
        "Flow blocks:",
        "- Case created",
        "- AI analyzes documents",
        "- Compares with historical decisions",
        "- Generates risk score",
        "- Lawyer approves",
        "- Updates knowledge base automatically",
        "",
        "Highlight AI-driven steps with deep navy #163e64 background and white text.",
        "Human steps in white boxes with black outline.",
        "No decoration.",
        "Only structural clarity.",
        "Modern SaaS system architecture style.",
        "Extremely structured.",
        "Very high whitespace.",
        "Designed for CIO-level presentation.",
      ],
    },
    {
      title: "4) Complete AI platform (RAG pipeline)",
      purpose: "Flagship visual: one linear pipeline from data sources to structured decision output.",
      flow: [
        "Data sources (API, Documents, CRM, ERP)",
        "Chunking & Structuring",
        "Embeddings",
        "Vector Database",
        "Retrieval & Re-ranking",
        "LLM",
        "Structured Output (JSON / Report / Action)",
      ],
      caption: "Controlled pipeline from data to decision",
      prompt: [
        "Create a modern enterprise AI architecture diagram.",
        "Horizontal layout.",
        "White background.",
        "Clean grid.",
        "",
        "Left column:",
        '"Data sources" (API, Documents, CRM, ERP)',
        "",
        "Arrow → Chunking & Structuring",
        "Arrow → Embeddings",
        "Arrow → Vector Database",
        "Arrow → Retrieval & Re-ranking",
        "Arrow → LLM",
        "Arrow → Structured Output (JSON / Report / Action)",
        "",
        "Use deep navy #163e64 for system core components.",
        "Use black thin arrows.",
        "No vendor logos.",
        "No MongoDB.",
        "No OpenAI icons.",
        "",
        'Small caption bottom: "Controlled pipeline from data to decision"',
        "Flat vector.",
        "Ultra minimal.",
        "Designed for technical decision makers.",
      ],
    },
    {
      title: "5) Automated email system",
      purpose: "Show controlled, context-based outbound flow from new documents to segmented distribution.",
      flow: [
        "New documents",
        "AI analyzes & categorizes",
        "Generates summary",
        "Segments recipient list",
        "Sends personalized email",
      ],
      caption: "Automated, context-based communication",
      prompt: [
        "Create a clean automated email system diagram.",
        "Horizontal flow.",
        "White background.",
        "",
        "Blocks:",
        "- New documents",
        "- AI analyzes & categorizes",
        "- Generates summary",
        "- Segments recipient list",
        "- Sends personalized email",
        "",
        "Use subtle accent color #163e64 only for AI block.",
        "All other blocks white with black border.",
        "",
        'Add small subtext: "Automated, context-based communication"',
        "Minimalist.",
        "No icons.",
        "No envelope graphics.",
        "No illustrations.",
        "Just structured boxes and arrows.",
        "Modern enterprise documentation style.",
      ],
    },
    {
      title: "6) Automated sales agent",
      purpose: "Show a strategic lead-to-CRM flow with clear AI components and enterprise tone.",
      flow: [
        "Lead captured",
        "Data enrichment",
        "Intent analysis (AI)",
        "Generate personalized outreach",
        "Automated follow-up",
        "CRM update",
      ],
      caption: "AI-driven sales agent – from lead to closed dialogue",
      prompt: [
        "Create a premium SaaS style sales automation architecture diagram.",
        "White background.",
        "High whitespace.",
        "",
        "Flow:",
        "Lead captured",
        "→ Data enrichment",
        "→ Intent analysis (AI)",
        "→ Generate personalized outreach",
        "→ Automated follow-up",
        "→ CRM update",
        "",
        "Highlight AI-driven components with navy #163e64.",
        "Use very thin black lines.",
        "No icons.",
        "No stock visuals.",
        "Clean Swiss layout.",
        "Balanced spacing.",
        "Serious enterprise tone.",
        "",
        'Caption: "AI-driven sales agent – from lead to closed dialogue"',
      ],
    },
  ],
};

const visualSectionCopyByLocale: Record<
  Locale,
  {
    heading: string;
    description: string;
    useCaseLabel: string;
    flowLabel: string;
    promptLabel: string;
    consistencyHeading: string;
  }
> = {
  da: {
    heading: "Visuale løsningsblueprints",
    description:
      "Her er seks præcise prompt-skabeloner til enterprise-diagrammer, der kan bruges direkte til at visualisere løsningsforslag under salg, workshops og beslutningsoplæg.",
    useCaseLabel: "Anvendelse",
    flowLabel: "Flow",
    promptLabel: "Prompt (klar til brug)",
    consistencyHeading: "Fælles designkrav (tilføjes i alle prompts)",
  },
  en: {
    heading: "Visual solution blueprints",
    description:
      "Six precise prompt templates for enterprise diagrams, ready to use for solution visualization in sales, workshops, and decision material.",
    useCaseLabel: "Use case",
    flowLabel: "Flow",
    promptLabel: "Prompt (ready to use)",
    consistencyHeading: "Shared design constraints (append to all prompts)",
  },
};

const copyByLocale: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    ctaHeading: string;
    ctaDescription: string;
    ctaPrimary: string;
    ctaSecondary: string;
  }
> = {
  da: {
    eyebrow: "Løsninger",
    title: "Løsninger, der afvikler flaskehalse i driften",
    description: "Vi leverer konkrete outputs med tydelig effekt, ikke demonstrationsprojekter.",
    ctaHeading: "Klar til et konkret løsningsoplæg?",
    ctaDescription: "Vi prioriterer værdiskabelse, risikostyring og teknisk holdbarhed fra første sprint.",
    ctaPrimary: "Book et møde",
    ctaSecondary: "Se cases",
  },
  en: {
    eyebrow: "Solutions",
    title: "Solutions that remove operational bottlenecks",
    description: "We deliver concrete outputs with measurable impact, not demo projects.",
    ctaHeading: "Ready for a concrete solution proposal?",
    ctaDescription: "We prioritize value creation, risk management, and technical durability from sprint one.",
    ctaPrimary: "Book a meeting",
    ctaSecondary: "See cases",
  },
};

export default async function SolutionsPage() {
  const locale = await getLocale();
  const copy = copyByLocale[locale];
  const visualCopy = visualSectionCopyByLocale[locale];
  const visualBlueprints = visualBlueprintsByLocale[locale];
  const designSystemPrompt = designSystemPromptByLocale[locale];

  return (
    <>
      <PageHero eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

      <section className="section-space border-y border-black/8 bg-[var(--surface-strong)]">
        <div className="section-shell">
          <h2>{visualCopy.heading}</h2>
          <p className="mt-6 max-w-4xl text-[18px] leading-[1.6] text-[#000000]">{visualCopy.description}</p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {visualBlueprints.map((item) => (
              <article key={item.title} className="surface-card rounded-[10px] p-6 md:p-8">
                <h3 className="text-[28px] leading-[1.2]">{item.title}</h3>
                <p className="mt-4 text-[16px] leading-[1.6] text-[#000000]">{item.purpose}</p>

                {item.useCase ? (
                  <p className="mt-4 text-[15px] font-medium text-[#000000]">
                    {visualCopy.useCaseLabel}: {item.useCase}
                  </p>
                ) : null}

                {item.flow && item.flow.length > 0 ? (
                  <div className="mt-4">
                    <p className="text-[14px] font-semibold uppercase tracking-[0.06em] text-[var(--brand-blue)]">
                      {visualCopy.flowLabel}
                    </p>
                    <ul className="mt-2 space-y-1 text-[15px] leading-[1.55] text-[#000000]">
                      {item.flow.map((step) => (
                        <li key={step}>• {step}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {item.caption ? <p className="mt-4 text-[15px] italic text-[#000000]">&quot;{item.caption}&quot;</p> : null}

                <div className="mt-5">
                  <p className="text-[14px] font-semibold uppercase tracking-[0.06em] text-[var(--brand-blue)]">
                    {visualCopy.promptLabel}
                  </p>
                  <pre className="mt-2 overflow-x-auto rounded-[8px] border border-black/10 bg-white p-4 text-[13px] leading-[1.55] text-[#000000]">
{[...item.prompt, "", ...designSystemPrompt].join("\n")}
                  </pre>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 surface-card rounded-[10px] p-6 md:p-8">
            <p className="text-[14px] font-semibold uppercase tracking-[0.06em] text-[var(--brand-blue)]">
              {visualCopy.consistencyHeading}
            </p>
            <pre className="mt-2 overflow-x-auto rounded-[8px] border border-black/10 bg-white p-4 text-[13px] leading-[1.55] text-[#000000]">
{designSystemPrompt.join("\n")}
            </pre>
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
