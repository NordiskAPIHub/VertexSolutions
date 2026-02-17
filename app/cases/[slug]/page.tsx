import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { CtaSection } from "@/components/marketing/cta-section";
import { PageHero } from "@/components/marketing/page-hero";
import { getCaseBySlug, getCaseSlugs } from "@/lib/cases";
import { getLocale } from "@/lib/i18n-server";
import { buildMetadata } from "@/lib/seo";

type CaseDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getCaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CaseDetailPageProps): Promise<Metadata> {
  const [{ slug }, locale] = await Promise.all([params, getLocale()]);
  const caseData = getCaseBySlug(slug, locale);

  if (!caseData) {
    return buildMetadata({
      title: locale === "da" ? "Case ikke fundet" : "Case not found",
      description: locale === "da" ? "Den ønskede case kunne ikke findes." : "The requested case could not be found.",
      path: "/cases",
      locale,
    });
  }

  return buildMetadata({
    title: caseData.detail.title,
    description: caseData.detail.description,
    path: `/cases/${caseData.slug}`,
    keywords:
      locale === "da"
        ? ["case study", "Lovguiden", "RAG", "juridisk AI", "governance"]
        : ["case study", "Lovguiden", "RAG", "legal AI", "governance"],
    locale,
  });
}

export default async function CaseDetailPage({ params }: CaseDetailPageProps) {
  const [{ slug }, locale] = await Promise.all([params, getLocale()]);
  const caseData = getCaseBySlug(slug, locale);

  if (!caseData) {
    notFound();
  }

  const { detail } = caseData;

  return (
    <>
      <PageHero eyebrow={detail.eyebrow} title={detail.title} description={detail.description} />

      <section className="section-space">
        <div className="section-shell space-y-8">
          <article className="surface-card rounded-[10px] p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--brand-blue)]">{detail.caseLabel}</p>
            <h2 className="mt-4">{detail.caseTitle}</h2>
            <p className="mt-4 text-[18px] font-medium leading-[1.6] text-black">{detail.challengeSummary}</p>

            <div className="mt-8 space-y-8">
              <section>
                <h3 className="text-[28px] font-semibold leading-[1.2] text-black">{detail.situationHeading}</h3>
                <p className="mt-3 text-[18px] leading-[1.6] text-black">{detail.situationText}</p>
              </section>

              <section>
                <h3 className="text-[28px] font-semibold leading-[1.2] text-black">{detail.challengeHeading}</h3>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-[18px] leading-[1.6] text-black">
                  {detail.challengePoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-[28px] font-semibold leading-[1.2] text-black">{detail.solutionHeading}</h3>
                <div className="mt-4 space-y-4">
                  {detail.solutionPhases.map((phase) => (
                    <div key={phase.title}>
                      <p className="text-[18px] font-semibold leading-[1.4] text-black">{phase.title}</p>
                      <p className="mt-1 text-[18px] leading-[1.6] text-black">{phase.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-[28px] font-semibold leading-[1.2] text-black">{detail.resultHeading}</h3>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-[18px] leading-[1.6] text-black">
                  {detail.resultPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="mt-8 grid gap-4 sm:items-center">
              <div className="relative h-24 overflow-hidden rounded-[8px] border border-black/10 bg-[var(--surface-strong)]">
                <Image src={caseData.image} alt={caseData.imageAlt} fill className="object-contain p-4" />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-5">
              <a
                href={caseData.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[16px] font-semibold text-[var(--brand-blue)]"
              >
                {detail.externalLabel}
                <ArrowUpRight className="size-4" />
              </a>
              <Link href="/cases" className="inline-flex items-center gap-2 text-[16px] font-semibold text-black">
                <ArrowLeft className="size-4" />
                {detail.backToCasesLabel}
              </Link>
            </div>
          </article>
        </div>
      </section>

      <CtaSection
        heading={locale === "da" ? "Skal vi vurdere jeres use-case?" : "Should we assess your use case?"}
        description={
          locale === "da"
            ? "Vi omsætter behov til løsningsdesign med tydelig governance og driftsmodel."
            : "We translate your needs into solution design with clear governance and an operating model."
        }
        primaryLabel={locale === "da" ? "Book et møde" : "Book a meeting"}
        primaryHref="/kontakt"
        secondaryLabel={locale === "da" ? "Se alle cases" : "See all cases"}
        secondaryHref="/cases"
      />
    </>
  );
}
