type TimelineStep = {
  title: string;
  description: string;
  deliverables?: string[];
};

export function ProcessTimeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <div className="mt-12">
      <ol className="relative">
        <div className="absolute bottom-0 left-[11px] top-2 w-px bg-black/20" />
        {steps.map((step, index) => (
          <li key={step.title} className="relative pb-12 pl-14 last:pb-0">
            <span className="absolute left-0 top-1 inline-flex size-[22px] items-center justify-center rounded-full border-2 border-[var(--brand-blue)] bg-white">
              <span className="size-[6px] rounded-full bg-[var(--brand-blue)]" />
            </span>
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#000000]">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 text-[28px] font-semibold leading-[1.2] text-[#000000]">
              {step.title}
            </h3>
            <p className="mt-3 max-w-3xl text-[16px] leading-[1.55] text-[#000000]">
              {step.description}
            </p>
            {step.deliverables && step.deliverables.length > 0 ? (
              <div className="mt-4">
                <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#000000]">
                  I får
                </p>
                <ul className="mt-2 space-y-1 text-[15px] leading-[1.55] text-[#000000]">
                  {step.deliverables.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
