import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { CtaSection } from "@/components/marketing/cta-section";
import { ProcessTimeline } from "@/components/marketing/process-timeline";
import { VertexConvergenceSection } from "@/components/marketing/vertex-convergence-section";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Automatisér arbejdet. Behold kontrollen.",
  description:
    "Vertex udvikler produktionsklare AI- og dataplatforme til organisationer med krav til drift, sporbarhed og governance.",
  path: "/",
  keywords: ["AI automatisering", "RAG", "workflow automation", "GDPR", "enterprise AI"],
});

const method = [
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
    deliverables: ["Produktionssætning", "Monitorering (metrics, tracing, alerts)", "Kontrolflow", "Release-proces"],
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
];

const cases = [
  {
    title: "Lovguiden",
    summary:
      "Fuldautomatiseret vidensplatform, der dagligt indsamler og strukturerer dansk og europæisk lovstof fra officielle kilder.",
    effect:
      "RAG med embeddings og re-ranking forankrer svar i konkrete kilder og leverer tydelig sporbarhed.",
    image: "/Lovguiden.png",
    imageAlt: "Lovguiden ikon",
    href: "https://www.lovguiden.dk/",
    external: true,
  },
];

export default function Home() {
  return (
    <>
      <section className="section-space bg-[#000000] pb-[120px] pt-[120px] text-white">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[1px] text-white/65">Vertex Solutions ApS</p>
            <h1 className="mt-6 font-semibold !text-white">
              Automatisér arbejdet.
              <br />
              Behold kontrollen.
            </h1>
            <p className="mt-6 max-w-2xl text-[18px] leading-[1.6] text-white/82">
              Produktionsklare AI- og dataplatforme til organisationer, der kræver stabil drift,
              sporbarhed og governance.
            </p>
            <ul className="mt-8 space-y-3 text-[16px] text-white/85">
              <li>• Fra data til beslutningsstøtte</li>
              <li>• Automation af workflows</li>
              <li>• Enterprise sikkerhed og drift</li>
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/kontakt">Book et møde</Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="border-white text-white hover:bg-white/5">
                <Link href="/cases" className="inline-flex items-center gap-2">
                  Se cases
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
          <h2 className="text-[#000000]">Skræddersyede AI- og dataløsninger til drift</h2>
          <p className="mt-6 max-w-3xl text-[18px] leading-[1.6] text-[#000000]">
            Vi bygger produktionsmodne systemer, der automatiserer gentagne processer og gør viden
            operationel. Fokus er kontrolleret drift, governance og sporbarhed.
          </p>
          <ul className="mt-8 space-y-2 text-[16px] leading-[1.55] text-[#000000]">
            <li>• Workflow automation (triage, routing, kvalitetssikring)</li>
            <li>• Videnssystemer på interne data (RAG)</li>
            <li>• Dokumentintelligens (udtræk, struktur, validering)</li>
            <li>• Data ingestion og harmonisering til stabilt beslutningsgrundlag</li>
          </ul>
          <h3 className="mt-14 text-[36px] font-semibold leading-[1.2] text-[#000000]">
            Teknologisk metode i produktion
          </h3>
          <p className="mt-4 max-w-3xl text-[18px] leading-[1.6] text-[#000000]">
            En vertikal, kontrolleret leverancepipeline fra afklaring til drift. Hver fase har et
            konkret leverance-output og et beslutningspunkt.
          </p>
          <ProcessTimeline steps={method} />
        </div>
      </section>

      <VertexConvergenceSection />

      <section className="section-space border-y border-black/8 bg-[var(--surface-strong)]">
        <div className="section-shell">
          <div className="flex items-end justify-between gap-4">
            <h2>Tidligere cases</h2>
            <Link href="/cases" className="text-[16px] font-semibold text-[var(--brand-blue)]">
              Se alle
            </Link>
          </div>
          <div className="mt-10 max-w-3xl">
            {cases.map((item) => (
              <article key={item.title} className="surface-card card-hover px-8 py-8">
                <div className="relative h-28 overflow-hidden rounded-[8px] border border-black/10 bg-[var(--surface-strong)]">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <h3 className="mt-5 font-semibold">{item.title}</h3>
                <p className="mt-4 text-[18px] leading-[1.6]">{item.summary}</p>
                <p className="mt-3 text-[16px] text-[var(--brand-blue)]">{item.effect}</p>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-[16px] font-semibold text-[var(--brand-blue)]"
                  >
                    Besøg Lovguiden
                    <ArrowRight className="size-4" />
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="mt-6 inline-flex items-center gap-2 text-[16px] font-semibold text-[var(--brand-blue)]"
                  >
                    Læs case
                    <ArrowRight className="size-4" />
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        heading="Ønsker I et kvalificeret estimat på effekt og tilbagebetalingstid?"
        description="Book et møde. Vi vurderer use-case, integrationsdybde, governance-krav og forventet forretningsgevinst."
        primaryLabel="Book et møde"
        primaryHref="/kontakt"
        secondaryLabel="Kontakt"
        secondaryHref="/kontakt"
      />
    </>
  );
}
