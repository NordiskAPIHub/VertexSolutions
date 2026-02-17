"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LOCALE_COOKIE_NAME, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const navigation = [
  { href: "/", da: "Forside", en: "Home" },
  { href: "/losninger", da: "Løsninger", en: "Solutions" },
  { href: "/cases", da: "Cases", en: "Cases" },
  { href: "/teknologi-sikkerhed", da: "Teknologi & Sikkerhed", en: "Technology & Security" },
  { href: "/om-os", da: "Om os", en: "About" },
  { href: "/kontakt", da: "Kontakt", en: "Contact" },
];

export function SiteHeader({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const [activeLocale, setActiveLocale] = useState<Locale>(locale);
  const pathname = usePathname();
  const router = useRouter();
  const primaryNavigation = useMemo(() => navigation.slice(0, 6), []);
  const isDanish = activeLocale === "da";

  const labels = isDanish
    ? {
        primaryNavigation: "Primær navigation",
        openMenu: "Åbn menu",
        closeMenu: "Luk menu",
        switchLanguage: "Skift sprog",
        bookMeeting: "Book et møde",
        seeCases: "Se cases",
      }
    : {
        primaryNavigation: "Primary navigation",
        openMenu: "Open menu",
        closeMenu: "Close menu",
        switchLanguage: "Switch language",
        bookMeeting: "Book a meeting",
        seeCases: "See cases",
      };

  function switchLanguage() {
    const nextLocale: Locale = activeLocale === "da" ? "en" : "da";
    document.cookie = `${LOCALE_COOKIE_NAME}=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    setActiveLocale(nextLocale);
    setOpen(false);
    router.refresh();
  }

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-sm">
      <div className="section-shell flex h-[4.5rem] items-center justify-between gap-4">
        <Link href="/" className="group inline-flex items-center gap-2">
          <span className="relative h-10 w-14">
            <Image
              src="/Logo uden baggrund.png"
              alt="Vertex Solutions logo"
              fill
              className="object-contain object-left transition-transform duration-300 group-hover:scale-[1.02]"
              priority
            />
          </span>
          <div className="ml-3 leading-tight">
            <p className="text-2xl font-semibold text-[#000000]">Vertex</p>
            <p className="-mt-1 text-base font-semibold text-[var(--brand-blue)]">Solutions</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label={labels.primaryNavigation}>
          {primaryNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                pathname === item.href
                  ? "text-[var(--brand-blue)]"
                  : "text-[#000000] hover:text-[var(--brand-blue)]",
              )}
            >
              {isDanish ? item.da : item.en}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            type="button"
            onClick={switchLanguage}
            className="inline-flex h-9 items-center gap-2 rounded-md border border-black/15 px-3 text-sm font-semibold text-[#000000] transition-colors hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)]"
            aria-label={labels.switchLanguage}
          >
            {isDanish ? (
              <>
                <span className="relative h-4 w-6 overflow-hidden rounded-[2px]">
                  <Image src="/UK flag.png" alt="UK flag" fill className="object-cover" />
                </span>
                EN
              </>
            ) : (
              <>
                <span className="relative h-4 w-6 overflow-hidden rounded-[2px]">
                  <Image src="/DK flag.png" alt="Danish flag" fill className="object-cover" />
                </span>
                DA
              </>
            )}
          </button>
          <Button asChild size="sm">
            <Link href="/kontakt">{labels.bookMeeting}</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/15 bg-transparent text-[#000000] lg:hidden"
          aria-label={open ? labels.closeMenu : labels.openMenu}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-black/10 bg-white lg:hidden">
          <div className="section-shell flex flex-col gap-2 py-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium",
                  pathname === item.href
                    ? "bg-[var(--brand-blue)]/10 text-[var(--brand-blue)]"
                    : "text-[#000000]",
                )}
              >
                {isDanish ? item.da : item.en}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              <button
                type="button"
                onClick={switchLanguage}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-black/15 px-3 py-2 text-sm font-semibold text-[#000000]"
                aria-label={labels.switchLanguage}
              >
                {isDanish ? (
                  <>
                    <span className="relative h-4 w-6 overflow-hidden rounded-[2px]">
                      <Image src="/UK flag.png" alt="UK flag" fill className="object-cover" />
                    </span>
                    EN
                  </>
                ) : (
                  <>
                    <span className="relative h-4 w-6 overflow-hidden rounded-[2px]">
                      <Image src="/DK flag.png" alt="Danish flag" fill className="object-cover" />
                    </span>
                    DA
                  </>
                )}
              </button>
              <Button asChild variant="secondary" size="sm" className="flex-1">
                <Link href="/cases" onClick={() => setOpen(false)}>
                  {labels.seeCases}
                </Link>
              </Button>
              <Button asChild size="sm" className="flex-1">
                <Link href="/kontakt" onClick={() => setOpen(false)}>
                  {labels.bookMeeting}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
