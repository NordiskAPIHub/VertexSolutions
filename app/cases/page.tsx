import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { CtaSection } from "@/components/marketing/cta-section";
import { PageHero } from "@/components/marketing/page-hero";
import { type Locale } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n-server";
import { getCasesOverview } from "@/lib/cases";
import { buildMetadata } from "@/lib/seo";

const metadataByLocale: Record<
  Locale,
  { title: string; description: string; keywords: string[] }
> = {
  da: {
    title: "Cases",
    description: "Overblik over Vertex-cases med adgang til detaljeret casebeskrivelse for hver løsning i drift.",
    keywords: ["AI cases", "Lovguiden", "RAG", "governance", "case study"],
  },
  en: {
    title: "Cases",
    description: "Overview of Vertex cases with access to detailed case descriptions for each production solution.",
    keywords: ["AI cases", "Lovguiden", "RAG", "governance", "case study"],
  },
};

const copyByLocale: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    overviewLabel: string;
    caseCountLabel: string;
    detailsLabel: string;
    externalLabel: string;
    ctaHeading: string;
    ctaDescription: string;
    ctaPrimary: string;
    ctaSecondary: string;
  }
> = {
  da: {
    eyebrow: "Cases",
    title: "Referencecases",
    description:
      "Her finder I et samlet overblik over vores cases. Hver case har sin egen detaljeside med kontekst, arkitektur, leverance og resultat.",
    overviewLabel: "Overblik",
    caseCountLabel: "cases i overblikket",
    detailsLabel: "Se detaljer",
    externalLabel: "Besøg løsning",
    ctaHeading: "Vil I have en tilsvarende case i jeres kontekst?",
    ctaDescription: "Vi vurderer use-case, integrationsdybde og governance-krav i et konkret scopingsforløb.",
    ctaPrimary: "Book et møde",
    ctaSecondary: "Kontakt",
  },
  en: {
    eyebrow: "Cases",
    title: "Reference cases",
    description:
      "Here you can see a complete overview of our cases. Each case has its own detail page with context, architecture, delivery, and outcome.",
    overviewLabel: "Overview",
    caseCountLabel: "cases in overview",
    detailsLabel: "See details",
    externalLabel: "Visit solution",
    ctaHeading: "Do you want a similar case in your context?",
    ctaDescription: "We assess use case, integration depth, and governance requirements in a concrete scoping process.",
    ctaPrimary: "Book a meeting",
    ctaSecondary: "Contact",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const copy = metadataByLocale[locale];

  return buildMetadata({
    title: copy.title,
    description: copy.description,
    path: "/cases",
    keywords: copy.keywords,
    locale,
  });
}

export default async function CasesPage() {
  const locale = await getLocale();
  const copy = copyByLocale[locale];
  const cases = getCasesOverview(locale);

  return (
    <>
      <PageHero eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

      <section className="section-space">
        <div className="section-shell">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-black/12 pb-5">
            <p className="text-[14px] font-semibold uppercase tracking-[0.06em] text-[var(--brand-blue)]">
              {copy.overviewLabel}
            </p>
            <p className="text-[16px] text-black">
              {cases.length} {copy.caseCountLabel}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {cases.map((item) => (
              <article key={item.slug} className="surface-card card-hover relative overflow-hidden">
                <Link
                  href={`/cases/${item.slug}`}
                  aria-label={`${copy.detailsLabel}: ${item.title}`}
                  className="absolute inset-0 z-10 rounded-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-2"
                />
                <div className="relative h-52 border-b border-black/10 bg-[var(--surface-strong)] md:h-56">
                  <Image src={item.image} alt={item.imageAlt} fill className="object-contain p-6" />
                </div>

                <div className="space-y-5 p-7 md:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-[14px] font-medium uppercase tracking-[0.06em] text-black/70">{item.category}</p>
                    <span className="rounded-full border border-black/15 px-3 py-1 text-[13px] font-medium text-black">
                      {item.status}
                    </span>
                  </div>

                  <h2 className="text-[36px] leading-[1.15] text-black">{item.title}</h2>
                  <p className="text-[18px] leading-[1.6] text-black">{item.summary}</p>

                  <ul className="space-y-2 text-[16px] leading-[1.55] text-black">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>• {highlight}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap items-center gap-5 pt-1">
                    <p className="inline-flex items-center gap-2 text-[16px] font-semibold text-[var(--brand-blue)]">
                      {copy.detailsLabel}
                      <ArrowUpRight className="size-4" />
                    </p>
                    <a
                      href={item.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-20 inline-flex items-center gap-2 text-[16px] font-semibold text-black"
                    >
                      {copy.externalLabel}
                      <ArrowUpRight className="size-4" />
                    </a>
                  </div>
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
        secondaryHref="/kontakt"
      />
    </>
  );
}
