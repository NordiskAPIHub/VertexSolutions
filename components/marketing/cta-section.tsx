import Link from "next/link";
import { Button } from "@/components/ui/button";

type CtaSectionProps = {
  heading: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
};

export function CtaSection({
  heading,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CtaSectionProps) {
  return (
    <section className="section-space">
      <div className="section-shell border-t border-black/20 pt-14">
        <h2 className="max-w-3xl font-semibold text-[#000000]">{heading}</h2>
        <p className="mt-6 max-w-2xl text-[18px] leading-[1.6] text-[#000000]">{description}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href={primaryHref}>{primaryLabel}</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href={secondaryHref}>{secondaryLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
