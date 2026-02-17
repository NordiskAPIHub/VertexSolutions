import type { Metadata } from "next";
import Image from "next/image";
import { CtaSection } from "@/components/marketing/cta-section";
import { PageHero } from "@/components/marketing/page-hero";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Om os",
  description: "Baggrund, kernekompetencer og leveranceprincipper hos Vertex Solutions.",
  path: "/om-os",
  keywords: ["Vertex team", "AI kompetencer", "RAG arkitektur", "governance-first"],
});

const founderProfiles = [
  {
    name: "Oscar Hoffmann",
    role: "Founder · AI Engineering & Arkitektur",
    image: "/Oscar photo.png",
    imageAlt: "Oscar Hoffmann portræt",
    intro:
      "Founder af Lovguiden.dk og B.Eng. i Electrical Engineering fra DTU. Oscar arbejder i krydsfeltet mellem semantisk søgning, RAG-arkitektur og driftsstabil softwareudvikling.",
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
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Om os"
        title="Specialiseret AI-engineering med driftsansvar"
        description="Vi bygger produktionsklare platforme til organisationer med krav til sporbarhed, kontrol og stabil drift."
      />

      <section className="section-space border-y border-black/8 bg-[var(--surface-strong)]">
        <div className="section-shell">
          <h2>Founders med dokumenteret teknisk og kommerciel tyngde</h2>
          <p className="mt-6 max-w-4xl text-[18px] leading-[1.6] text-[#000000]">
            Vertex er bygget på en klar arbejdsdeling: dyb teknisk arkitektur kombineret med
            forretningsmæssig forankring. Det gør os i stand til at levere løsninger, der både virker
            i kodebasen og i organisationen.
          </p>

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
                    Fokusområder
                  </p>
                  <ul className="mt-3 space-y-2 text-[16px] text-[#000000]">
                    {profile.focus.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--brand-blue)]">
                    Udvalgt erfaring
                  </p>
                  <ul className="mt-3 space-y-2 text-[16px] text-[#000000]">
                    {profile.experience.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--brand-blue)]">
                    Uddannelse
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
        heading="Skal vi vurdere jeres use-case?"
        description="Vi giver en præcis vurdering af potentiale, risiko og implementeringsvej."
        primaryLabel="Book et møde"
        primaryHref="/kontakt"
        secondaryLabel="Se cases"
        secondaryHref="/cases"
      />
    </>
  );
}
