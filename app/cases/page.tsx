import type { Metadata } from "next";
import Image from "next/image";
import { CtaSection } from "@/components/marketing/cta-section";
import { PageHero } from "@/components/marketing/page-hero";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Cases",
  description: "Lovguiden: fuldautomatiseret vidensplatform med retrieval-baseret pipeline i produktion.",
  path: "/cases",
  keywords: ["AI cases", "Lovguiden", "RAG", "governance", "juridisk vidensplatform"],
});

const cases = [
  {
    name: "Lovguiden",
    domain: "Juridisk vidensplatform i drift",
    overview:
      "Lovguiden er en fuldautomatiseret vidensplatform, der dagligt indsamler og strukturerer dansk og europæisk lovstof fra officielle kilder og gør det søgbart på tværs af store dokumentmængder. Platformen anvender en retrieval-baseret pipeline (RAG) med embeddings og re-ranking, så svar forankres i konkrete kilder og kan dokumenteres. Systemet opdateres flere gange dagligt, etablerer automatiske krydsreferencer mellem love, afgørelser og vejledninger og leverer output i kontrollerede formater med tydelig sporbarhed.",
    image: "/Lovguiden.png",
    imageAlt: "Lovguiden symbol",
    href: "https://www.lovguiden.dk/",
  },
];

export default function CasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Cases"
        title="Lovguiden — Vidensplatform med retrieval i produktion"
        description="Fuldautomatiseret vidensplatform med daglig indsamling, semantisk retrieval og kontrolleret output."
      />

      <section className="section-space">
        <div className="section-shell space-y-8">
          {cases.map((item) => (
            <article key={item.name} className="surface-card rounded-[10px] p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--brand-blue)]">
                {item.domain}
              </p>
              <h2 className="mt-4">{item.name}</h2>
              <p className="mt-4 text-[18px] leading-[1.6] text-black">{item.overview}</p>
              <div className="mt-6 grid gap-4 sm:items-center">
                <div className="relative h-24 overflow-hidden rounded-[8px] border border-black/10 bg-[var(--surface-strong)]">
                  <Image src={item.image} alt={item.imageAlt} fill className="object-contain p-4" />
                </div>
              </div>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-[16px] font-semibold text-[var(--brand-blue)]"
              >
                Besøg lovguiden.dk
              </a>
            </article>
          ))}
        </div>
      </section>

      <CtaSection
        heading="Næste skridt: konkret vurdering af jeres case"
        description="Vi omsætter behov til løsningsdesign med tydelig governance og driftsmodel."
        primaryLabel="Book et møde"
        primaryHref="/kontakt"
        secondaryLabel="Se teknologi"
        secondaryHref="/teknologi-sikkerhed"
      />
    </>
  );
}
