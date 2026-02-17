import { Badge } from "@/components/ui/badge";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="section-space border-b border-black/8">
      <div className="section-shell">
        <Badge>{eyebrow}</Badge>
        <h1 className="mt-6 max-w-4xl font-semibold text-[#000000]">{title}</h1>
        <p className="mt-6 max-w-3xl text-[18px] leading-[1.6] text-[#000000]">{description}</p>
      </div>
    </section>
  );
}
