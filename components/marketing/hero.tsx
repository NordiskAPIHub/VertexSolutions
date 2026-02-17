import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type HeroProps = {
  headline: string;
  subheadline: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  bullets: string[];
};

export function Hero({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  bullets,
}: HeroProps) {
  return (
    <section className="network-bg section-space overflow-hidden pb-18 pt-16 md:pt-20">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="fade-up">
          <Badge>Produktionsklare AI- og dataløsninger</Badge>
          <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.04] text-black sm:text-6xl">
            {headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[#2f3740]">{subheadline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href={secondaryCta.href} className="inline-flex items-center gap-2">
                {secondaryCta.label}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div
          className="surface-card fade-up rounded-2xl p-6 md:p-8"
          style={{ animationDelay: "120ms" }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-[var(--brand-blue)]">
            Hvad I får fra dag ét
          </p>
          <ul className="mt-5 space-y-4">
            {bullets.map((bullet, index) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="mt-[0.42rem] block size-2 rounded-full bg-[var(--brand-blue)]" />
                <span className="text-base text-[#262e37]">
                  <span className="mr-2 text-sm font-semibold text-[var(--brand-blue)]">
                    0{index + 1}
                  </span>
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-black/10 pt-4 text-sm text-[#39424d]">
            Vi bygger ikke demos. Vi bygger systemer der kører.
          </p>
        </div>
      </div>
    </section>
  );
}
