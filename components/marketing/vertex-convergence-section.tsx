import Image from "next/image";
import { type Locale } from "@/lib/i18n";

const contentByLocale: Record<
  Locale,
  {
    title: string;
    description: string;
    oscarRole: string;
    emilRole: string;
    oscarBullets: string[];
    emilBullets: string[];
    outputTitle: string;
    outputBullets: string[];
    mobileTagline: string;
  }
> = {
  da: {
    title: "Hvorfor hedder vi Vertex?",
    description:
      "I geometri er en vertex et punkt, hvor to eller flere linjer skærer eller krydser hinanden. Det betegner ofte et spids- eller toppunkt. For os beskriver det præcist vores rolle: stedet hvor teknologi, forretning og levering samles i én retning.",
    oscarRole: "IT & arkitektur",
    emilRole: "Kommercielt & strategi",
    oscarBullets: [
      "Systemarkitektur og drift i produktion",
      "RAG, embeddings og retrieval pipelines",
      "Data layer: Postgres/pgvector, ingestion, versionering",
      "Sikkerhed: RBAC, isolation, logging",
      "Integrationer og performance-optimering",
    ],
    emilBullets: [
      "B2B go-to-market og partnerskaber",
      "Procesforankring og implementering i organisationer",
      "Scoping, prioritering og business case",
      "Stakeholder management og beslutningsoplæg",
      "Platform- og produktstrategi",
    ],
    outputTitle: "Det vi leverer",
    outputBullets: [
      "Produktionsklare AI- og dataflows",
      "Workflow automation og beslutningsstøtte",
      "Videnssystemer på interne data (RAG)",
      "Dokumentintelligens (udtræk, struktur, validering)",
      "Governance-by-design (GDPR, sporbarhed, cost-control)",
    ],
    mobileTagline: "Krydspunktet mellem arkitektur, forretning og stabil levering.",
  },
  en: {
    title: "Why we are called Vertex",
    description:
      "In geometry, a vertex is the point where two or more lines intersect. It often marks a tip or peak. For us, it defines our role precisely: the point where technology, business, and delivery converge into one direction.",
    oscarRole: "IT & architecture",
    emilRole: "Commercial & strategy",
    oscarBullets: [
      "System architecture and production operations",
      "RAG, embeddings, and retrieval pipelines",
      "Data layer: Postgres/pgvector, ingestion, versioning",
      "Security: RBAC, isolation, logging",
      "Integrations and performance optimization",
    ],
    emilBullets: [
      "B2B go-to-market and partnerships",
      "Process anchoring and organizational implementation",
      "Scoping, prioritization, and business case",
      "Stakeholder management and decision material",
      "Platform and product strategy",
    ],
    outputTitle: "What we deliver",
    outputBullets: [
      "Production-grade AI and data flows",
      "Workflow automation and decision support",
      "Knowledge systems on internal data (RAG)",
      "Document intelligence (extraction, structure, validation)",
      "Governance-by-design (GDPR, traceability, cost control)",
    ],
    mobileTagline: "The convergence point of architecture, business, and reliable delivery.",
  },
};

function MiniNode() {
  return (
    <div className="flex items-center justify-center py-1">
      <span className="h-px w-10 bg-black/80" />
      <span className="mx-2 inline-flex size-3 rounded-full bg-[#163e64]" />
      <span className="h-px w-10 bg-black/80" />
    </div>
  );
}

export function VertexConvergenceSection({ locale }: { locale: Locale }) {
  const copy = contentByLocale[locale];

  return (
    <section className="bg-[#e9eaec] py-12">
      <div className="mx-auto max-w-[1600px] px-6">
        <div className="mb-8 max-w-4xl">
          <h2 className="mt-3 text-[40px] font-semibold leading-[1.2] text-[#000000]">{copy.title}</h2>
          <p className="mt-6 text-[18px] leading-[1.6] text-[#000000]">{copy.description}</p>
        </div>

        <div className="relative hidden aspect-[1680/860] w-full lg:block">
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 1680 860"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden
          >
            <line x1="500" y1="215" x2="790" y2="430" stroke="#000000" strokeWidth="6" />
            <line x1="530" y1="705" x2="790" y2="430" stroke="#000000" strokeWidth="6" />
            <line x1="790" y1="430" x2="1220" y2="430" stroke="#000000" strokeWidth="6" />

            <polygon points="-12,-7 16,0 -12,7" fill="#000000" transform="translate(615 300) rotate(36)" />
            <polygon points="-12,-7 16,0 -12,7" fill="#000000" transform="translate(640 589) rotate(-47)" />
            <polygon points="-12,-7 16,0 -12,7" fill="#000000" transform="translate(1000 430)" />
          </svg>

          <span className="pointer-events-none absolute left-[47%] top-[50%] z-20 size-[50px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#163e64]" />

          <article className="absolute left-0 top-4 w-[34%] space-y-3 text-[#000000]">
            <div className="flex items-center gap-4">
              <Image
                src="/Oscar photo.png"
                alt="Oscar Hoffmann"
                width={88}
                height={88}
                className="rounded-[10px] object-cover"
              />
              <div>
                <h3 className="text-[20px] font-semibold leading-[1.2]">Oscar Hoffmann</h3>
                <p className="text-[16px] font-medium leading-[1.55]">{copy.oscarRole}</p>
              </div>
            </div>
            <ul className="list-disc space-y-2 pl-6 text-[15px] leading-[1.55]">
              {copy.oscarBullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>

          <article className="absolute bottom-0 left-0 w-[34%] space-y-3 text-[#000000]">
            <div className="flex items-center gap-4">
              <Image
                src="/Emil photo.png"
                alt="Emil Kanneworff"
                width={88}
                height={88}
                className="rounded-[10px] object-cover"
              />
              <div>
                <h3 className="text-[20px] font-semibold leading-[1.2]">Emil Kanneworff</h3>
                <p className="text-[16px] font-medium leading-[1.55]">{copy.emilRole}</p>
              </div>
            </div>
            <ul className="list-disc space-y-2 pl-6 text-[15px] leading-[1.55]">
              {copy.emilBullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>

          <div className="pointer-events-none absolute left-[49.7%] top-[52.6%] z-20">
            <p className="font-serif text-[64px] leading-[0.88] text-[#404040]">Vertex</p>
            <p className="ml-3 mt-1 font-serif text-[25px] leading-[0.88] text-[var(--brand-blue)]">Solutions</p>
          </div>

          <article className="absolute right-0 top-[31%] w-[24%] space-y-3 text-[#000000]">
            <h3 className="text-[20px] font-semibold leading-[1.2]">{copy.outputTitle}</h3>
            <ul className="list-disc space-y-2 pl-6 text-[15px] leading-[1.55]">
              {copy.outputBullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="space-y-10 lg:hidden">
          <article className="space-y-3 text-[#000000]">
            <div className="flex items-center gap-4">
              <Image
                src="/Oscar photo.png"
                alt="Oscar Hoffmann"
                width={60}
                height={60}
                className="rounded-[6px] object-cover"
              />
              <div>
                <h3 className="text-[19px] font-semibold leading-[1.2]">Oscar Hoffmann</h3>
                <p className="text-[16px] font-medium leading-[1.55]">{copy.oscarRole}</p>
              </div>
            </div>
            <ul className="list-disc space-y-2 pl-5 text-[15px] leading-[1.55]">
              {copy.oscarBullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>

          <MiniNode />

          <article className="space-y-3 text-[#000000]">
            <div className="flex items-center gap-4">
              <Image
                src="/Emil photo.png"
                alt="Emil Kanneworff"
                width={60}
                height={60}
                className="rounded-[6px] object-cover"
              />
              <div>
                <h3 className="text-[19px] font-semibold leading-[1.2]">Emil Kanneworff</h3>
                <p className="text-[16px] font-medium leading-[1.55]">{copy.emilRole}</p>
              </div>
            </div>
            <ul className="list-disc space-y-2 pl-5 text-[15px] leading-[1.55]">
              {copy.emilBullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>

          <MiniNode />

          <div className="space-y-2 text-[#000000]">
            <p className="font-serif text-[44px] leading-[0.9] text-[#404040]">Vertex</p>
            <p className="ml-1 font-serif text-[30px] leading-[0.9] text-[var(--brand-blue)]">Solutions</p>
            <p className="pt-2 text-[15px] leading-[1.55]">{copy.mobileTagline}</p>
          </div>

          <MiniNode />

          <article className="space-y-3 text-[#000000]">
            <h3 className="text-[19px] font-semibold leading-[1.2]">{copy.outputTitle}</h3>
            <ul className="list-disc space-y-2 pl-5 text-[15px] leading-[1.55]">
              {copy.outputBullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
