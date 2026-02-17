import { Badge } from "@/components/ui/badge";

export function TrustSection({
  title,
  intro,
  bullets,
}: {
  title: string;
  intro: string;
  bullets: string[];
}) {
  return (
    <section className="section-space">
      <div className="section-shell rounded-2xl border border-black/10 bg-[#dfe2e7] px-6 py-10 md:px-10 md:py-12">
        <Badge>Security & compliance</Badge>
        <h2 className="mt-4 max-w-3xl text-4xl font-semibold text-black sm:text-5xl">{title}</h2>
        <p className="mt-4 max-w-3xl text-lg text-[#2f3740]">{intro}</p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {bullets.map((bullet) => (
            <li
              key={bullet}
              className="rounded-lg border border-black/12 bg-white/80 px-4 py-3 text-sm font-semibold text-[#26303a]"
            >
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
