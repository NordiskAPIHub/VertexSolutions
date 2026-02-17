import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";

const SITE_NAME = "Vertex Solutions";
const SITE_URL = "https://www.vertexsolutions.dk";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  locale?: Locale;
};

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  locale = "da",
}: MetadataInput): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogLocale = locale === "en" ? "en_US" : "da_DK";

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: ogLocale,
      type: "website",
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [OG_IMAGE],
    },
  };
}
