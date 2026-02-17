export function LogoMark({
  className = "size-8",
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const strokeColor = tone === "light" ? "white" : "#000000";

  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="20" cy="34" r="9" fill="var(--brand-blue)" />
      <path d="M5 14L17 24" stroke={strokeColor} strokeWidth="2.8" strokeLinecap="round" />
      <path d="M3 49L15 40" stroke={strokeColor} strokeWidth="2.8" strokeLinecap="round" />
      <path d="M29 34H59" stroke={strokeColor} strokeWidth="2.8" strokeLinecap="round" />
      <path d="M55 34L51 31V37L55 34Z" fill={strokeColor} />
    </svg>
  );
}
