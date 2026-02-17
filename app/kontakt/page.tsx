import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/marketing/page-hero";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Kontakt",
  description:
    "Book et møde med Vertex Solutions og få en konkret vurdering af jeres AI- og automatiseringsmuligheder.",
  path: "/kontakt",
  keywords: ["book et møde", "kontakt Vertex Solutions", "AI rådgivning"],
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Lad os tage en konkret snak om jeres proces"
        description="Beskriv kort jeres nuværende flaskehalse. Vi vender tilbage med en nøgtern vurdering og forslag til næste skridt."
      />

      <section className="section-space">
        <div className="section-shell grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <ContactForm />

          <aside className="space-y-8">
            <div className="surface-card rounded-[10px] p-8">
              <h2>Direkte kontakt</h2>
              <ul className="mt-6 space-y-3 text-[16px] text-[#000000]">
                <li>
                  E-mail:{" "}
                  <a href="mailto:kontakt@vertexsolutions.dk" className="font-semibold text-[var(--brand-blue)]">
                    kontakt@vertexsolutions.dk
                  </a>
                </li>
                <li>
                  Telefon:{" "}
                  <a href="tel:+4531508899" className="font-semibold text-[var(--brand-blue)]">
                    +45 31 50 88 99
                  </a>
                </li>
                <li>Svar inden for 1 arbejdsdag</li>
              </ul>
            </div>

            <div className="surface-card rounded-[10px] p-8">
              <h2>Typiske emner</h2>
              <ul className="mt-6 space-y-3 text-[16px] text-[#000000]">
                <li>• Automatisering af sagsflow og triage</li>
                <li>• Intern vidensplatform med RAG</li>
                <li>• Dokumentintelligens i daglig drift</li>
                <li>• Arkitektur, sikkerhed og governance</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
