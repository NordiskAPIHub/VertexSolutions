import type { MetadataRoute } from "next";
import { getCaseSlugs } from "@/lib/cases";

const baseUrl = "https://www.vertexsolutions.dk";

export default function sitemap(): MetadataRoute.Sitemap {
  const caseRoutes = getCaseSlugs().map((slug) => ({
    url: `${baseUrl}/cases/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/losninger`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/cases`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    ...caseRoutes,
    {
      url: `${baseUrl}/teknologi-sikkerhed`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    { url: `${baseUrl}/om-os`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/kontakt`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
