import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getLocale } from "@/lib/i18n-server";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const isDanish = locale === "da";
  const siteTitle = isDanish ? "Vertex Solutions | Digital rådgivning og strategi" : "Vertex Solutions | Digital advisory and strategy";
  const siteDescription = isDanish
    ? "Vi hjælper virksomheder med digital strategi, AI-implementering og teknisk rådgivning. Specialiseret i skalering og effektivisering."
    : "We help companies with digital strategy, AI implementation, and technical advisory. Specialized in scaling and optimization.";
  const ogImage = "https://www.vertexsolutions.dk/og-image.jpg";

  return {
    metadataBase: new URL("https://www.vertexsolutions.dk"),
    title: {
      default: siteTitle,
      template: "%s | Vertex Solutions ApS",
    },
    description: siteDescription,
    applicationName: "Vertex Solutions",
    openGraph: {
      type: "website",
      locale: isDanish ? "da_DK" : "en_US",
      siteName: "Vertex Solutions",
      title: "Vertex Solutions",
      description: isDanish ? "Digital strategi og teknisk rådgivning." : "Digital strategy and technical advisory.",
      url: "https://www.vertexsolutions.dk",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Vertex Solutions",
      description: isDanish ? "Digital strategi og teknisk rådgivning." : "Digital strategy and technical advisory.",
      images: [ogImage],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className={`${inter.variable} antialiased`}>
        <div className="relative min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
          <SiteHeader locale={locale} />
          <main>{children}</main>
          <SiteFooter locale={locale} />
        </div>
      </body>
    </html>
  );
}
