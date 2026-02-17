"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { href: "/", label: "Forside" },
  { href: "/losninger", label: "Løsninger" },
  { href: "/cases", label: "Cases" },
  { href: "/teknologi-sikkerhed", label: "Teknologi & Sikkerhed" },
  { href: "/om-os", label: "Om os" },
  { href: "/kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const primaryNavigation = navigation.slice(0, 6);

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

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primær navigation">
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
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild size="sm">
            <Link href="/kontakt">Book et møde</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/15 bg-transparent text-[#000000] lg:hidden"
          aria-label={open ? "Luk menu" : "Åbn menu"}
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
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              <Button asChild variant="secondary" size="sm" className="flex-1">
                <Link href="/cases" onClick={() => setOpen(false)}>
                  Se cases
                </Link>
              </Button>
              <Button asChild size="sm" className="flex-1">
                <Link href="/kontakt" onClick={() => setOpen(false)}>
                  Book et møde
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
