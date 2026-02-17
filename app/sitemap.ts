import type { MetadataRoute } from "next";

const baseUrl = "https://vertexsolutions.dk";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/losninger`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/cases`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
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
