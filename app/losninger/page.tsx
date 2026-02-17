import type { Metadata } from "next";
import { CtaSection } from "@/components/marketing/cta-section";
import { PageHero } from "@/components/marketing/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Løsninger",
  description: "Løsninger designet til produktion: automation, knowledge systems og dokumentintelligens.",
  path: "/losninger",
  keywords: ["AI knowledge platform", "workflow automation", "document intelligence", "data ingestion"],
});

const solutions = [
  {
    title: "AI Knowledge Platform (RAG)",
    description: "Søgning og chat på egne kilder med kildeforankring og dokumenteret svarlogik.",
    outputs: ["Kildeunderstøttede svar", "Kortere søgetid", "Bedre beslutningsgrundlag"],
  },
  {
    title: "Workflow Automation",
    description: "Automatisering af triage, routing, kvalitetstjek og sagsopsummering.",
    outputs: ["Mindre manuelt arbejde", "Mere ensartede forløb", "Højere throughput"],
  },
  {
    title: "Document Intelligence",
    description: "Udtræk, sammenligning og strukturering af dokumenter i skalerbar drift.",
    outputs: ["Hurtigere dokumentbehandling", "Lavere fejlrisiko", "Strukturerede outputdata"],
  },
  {
    title: "Data Ingestion & Harmonisering",
    description: "Sammenkobling af flere datakilder i ét kontrolleret og søgbart datalag.",
    outputs: ["Højere datakvalitet", "Færre manuelle overførsler", "Styrbar datagovernance"],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Løsninger"
        title="Løsninger, der afvikler flaskehalse i driften"
        description="Vi leverer konkrete outputs med tydelig effekt, ikke demonstrationsprojekter."
      />

      <section className="section-space">
        <div className="section-shell grid gap-8 md:grid-cols-2">
          {solutions.map((solution) => (
            <Card key={solution.title} className="h-full">
              <CardHeader>
                <CardTitle>{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[18px] leading-[1.6] text-[#000000]">{solution.description}</p>
                <ul className="mt-6 space-y-2">
                  {solution.outputs.map((item) => (
                    <li key={item} className="text-[16px] text-[#000000]">
                      • {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <CtaSection
        heading="Klar til et konkret løsningsoplæg?"
        description="Vi prioriterer værdiskabelse, risikostyring og teknisk holdbarhed fra første sprint."
        primaryLabel="Book et møde"
        primaryHref="/kontakt"
        secondaryLabel="Se cases"
        secondaryHref="/cases"
      />
    </>
  );
}
