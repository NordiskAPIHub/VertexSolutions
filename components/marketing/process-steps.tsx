import { Badge } from "@/components/ui/badge";

type ProcessStep = {
  title: string;
  description: string;
};

export function ProcessSteps({
  title,
  intro,
  steps,
}: {
  title: string;
  intro: string;
  steps: ProcessStep[];
}) {
  return (
    <section className="section-space border-y border-black/8 bg-[var(--surface-strong)]/70">
      <div className="section-shell">
        <Badge variant="outline">Sådan virker det</Badge>
        <h2 className="mt-4 max-w-3xl text-4xl font-semibold text-black sm:text-5xl">{title}</h2>
        <p className="mt-4 max-w-3xl text-lg text-[#2f3740]">{intro}</p>

        <ol className="relative mt-12 grid gap-4 md:grid-cols-5">
          {steps.map((step, idx) => (
            <li
              key={step.title}
              className="fade-up surface-card relative rounded-xl p-5"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand-blue)] text-sm font-semibold text-white">
                {idx + 1}
              </span>
              <h3 className="mt-4 text-2xl font-semibold text-black">{step.title}</h3>
              <p className="mt-2 text-sm text-[#313944]">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
