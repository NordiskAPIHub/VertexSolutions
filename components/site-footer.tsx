import Image from "next/image";
import Link from "next/link";
import { type Locale } from "@/lib/i18n";

const footerLinks = [
  { href: "/losninger", da: "Løsninger", en: "Solutions" },
  { href: "/cases", da: "Cases", en: "Cases" },
  { href: "/teknologi-sikkerhed", da: "Teknologi & Sikkerhed", en: "Technology & Security" },
  { href: "/om-os", da: "Om os", en: "About" },
  { href: "/kontakt", da: "Kontakt", en: "Contact" },
];

export function SiteFooter({ locale }: { locale: Locale }) {
  const isDanish = locale === "da";

  return (
    <footer className="bg-[#000000] text-white">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="inline-flex items-center gap-3">
            <span className="relative h-10 w-14 overflow-hidden rounded-[4px] bg-white">
              <Image
                src="/Logo uden baggrund.png"
                alt="Vertex Solutions logo"
                fill
                className="object-contain object-left"
              />
            </span>
            <div className="ml-3 leading-tight">
              <p className="text-2xl font-semibold text-white">Vertex</p>
              <p className="-mt-1 text-base font-semibold text-white">Solutions</p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm text-white">
            {isDanish
              ? "Produktionsklare AI- og dataløsninger til automatisering af processer og vidensarbejde."
              : "Production-grade AI and data solutions for automating processes and knowledge work."}
          </p>
        </div>

        <div>
          <p className="text-[28px] font-semibold uppercase leading-[1.2] tracking-[0.02em] text-white">
            {isDanish ? "Sider" : "Pages"}
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white transition-opacity hover:opacity-80">
                  {isDanish ? link.da : link.en}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[28px] font-semibold uppercase leading-[1.2] tracking-[0.02em] text-white">
            {isDanish ? "Kontakt" : "Contact"}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white">
            <li>
              <a href="mailto:kontakt@vertexsolutions.dk" className="text-white transition-opacity hover:opacity-80">
                kontakt@vertexsolutions.dk
              </a>
            </li>
            <li>
              <a href="tel:+4531508899" className="text-white transition-opacity hover:opacity-80">
                +45 31 50 88 99
              </a>
            </li>
            <li>CVR 45203579</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="section-shell flex flex-col gap-2 py-4 text-xs text-white sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Vertex Solutions ApS</p>
          <p>{isDanish ? "Privacy-first by design" : "Privacy-first by design"}</p>
        </div>
      </div>
    </footer>
  );
}
