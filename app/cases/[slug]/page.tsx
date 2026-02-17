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

            <div className="mt-6">
              <div className="relative h-64 overflow-hidden rounded-[10px] border border-black/10 bg-[var(--surface-strong)] md:h-[420px]">
                <Image src={caseData.image} alt={caseData.imageAlt} fill className="object-cover" />
              </div>
            </div>

            <div className="mt-10 space-y-10">
              <section>
                <h2>{detail.overviewHeading}</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {detail.overviewItems.map((item) => (
                    <div key={item.label} className="rounded-[10px] border border-black/10 bg-white p-5">
                      <p className="text-[14px] font-semibold uppercase tracking-[0.06em] text-[var(--brand-blue)]">
                        {item.label}
                      </p>
                      <p className="mt-2 text-[18px] leading-[1.6] text-black">{item.value}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2>{detail.situationChallengeHeading}</h2>
                <p className="mt-4 text-[20px] font-medium leading-[1.5] text-black">{detail.situationLead}</p>

                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  <div className="rounded-[10px] border border-black/10 bg-white p-5">
                    <h3 className="text-[20px]">{detail.professionalSourcesHeading}</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-[17px] leading-[1.55] text-black">
                      {detail.professionalSources.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-[10px] border border-black/10 bg-white p-5">
                    <h3 className="text-[20px]">{detail.modelRiskHeading}</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-[17px] leading-[1.55] text-black">
                      {detail.modelRiskPoints.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-[10px] border border-black/10 bg-white p-5">
                    <h3 className="text-[20px]">{detail.needHeading}</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-[17px] leading-[1.55] text-black">
                      {detail.needPoints.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2>{detail.solutionHeading}</h2>
                <p className="mt-4 text-[18px] leading-[1.6] text-black">{detail.solutionIntro}</p>

                <div className="mt-6 space-y-4">
                  {detail.solutionPhases.map((phase) => (
                    <div key={phase.title} className="rounded-[10px] border border-black/10 bg-white p-5">
                      <h3 className="text-[24px]">{phase.title}</h3>
                      <ul className="mt-3 list-disc space-y-2 pl-5 text-[17px] leading-[1.55] text-black">
                        {phase.points.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      {phase.note ? <p className="mt-4 text-[17px] leading-[1.55] text-black">{phase.note}</p> : null}
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2>{detail.architectureHeading}</h2>
                <p className="mt-4 text-[18px] leading-[1.6] text-black">{detail.architectureIntro}</p>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-[18px] leading-[1.6] text-black">
                  {detail.architecturePoints.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-4 text-[18px] leading-[1.6] text-black">{detail.architectureOutro}</p>
              </section>

              <section>
                <h2>{detail.resultHeading}</h2>
                <p className="mt-4 text-[18px] leading-[1.6] text-black">{detail.resultIntro}</p>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-[18px] leading-[1.6] text-black">
                  {detail.resultPoints.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-4 text-[18px] leading-[1.6] text-black">{detail.resultOutro}</p>
              </section>

              <section>
                <h2>{detail.positioningHeading}</h2>
                <p className="mt-4 text-[18px] leading-[1.6] text-black">{detail.positioningIntro}</p>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-[18px] leading-[1.6] text-black">
                  {detail.positioningPoints.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-4 text-[18px] font-medium leading-[1.6] text-black">{detail.positioningOutro}</p>
              </section>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5">
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
