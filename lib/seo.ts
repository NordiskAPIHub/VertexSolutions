import type { Metadata } from "next";

const SITE_NAME = "Vertex Solutions ApS";
const SITE_URL = "https://vertexsolutions.dk";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
}: MetadataInput): Metadata {
  const url = `${SITE_URL}${path}`;

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
      locale: "da_DK",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
    },
  };
}
