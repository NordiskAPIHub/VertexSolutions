import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vertexsolutions.dk"),
  title: {
    default: "Vertex Solutions ApS",
    template: "%s | Vertex Solutions ApS",
  },
  description:
    "Vi bygger produktionsklare AI- og dataløsninger, der automatiserer gentaget arbejde sikkert, dokumenteret og GDPR-compliant.",
  applicationName: "Vertex Solutions",
  openGraph: {
    type: "website",
    locale: "da_DK",
    siteName: "Vertex Solutions ApS",
    title: "Vertex Solutions ApS",
    description:
      "Produktionsklare AI- og dataløsninger til automatisering af processer og vidensarbejde.",
    url: "https://vertexsolutions.dk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body className={`${inter.variable} antialiased`}>
        <div className="relative min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
