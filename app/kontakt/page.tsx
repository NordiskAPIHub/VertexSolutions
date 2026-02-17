import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/marketing/page-hero";
import { type Locale } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n-server";
import { buildMetadata } from "@/lib/seo";

const metadataByLocale: Record<
  Locale,
  { title: string; description: string; keywords: string[] }
> = {
  da: {
    title: "Kontakt",
    description:
      "Book et møde med Vertex Solutions og få en konkret vurdering af jeres AI- og automatiseringsmuligheder.",
    keywords: ["book et møde", "kontakt Vertex Solutions", "AI rådgivning"],
  },
  en: {
    title: "Contact",
    description:
      "Book a meeting with Vertex Solutions and get a concrete assessment of your AI and automation opportunities.",
    keywords: ["book meeting", "contact Vertex Solutions", "AI advisory"],
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const copy = metadataByLocale[locale];

  return buildMetadata({
    title: copy.title,
    description: copy.description,
    path: "/kontakt",
    keywords: copy.keywords,
    locale,
  });
}

const copyByLocale: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
    directContact: string;
    email: string;
    phone: string;
    responseTime: string;
    topics: string;
    topicItems: string[];
  }
> = {
  da: {
    eyebrow: "Kontakt",
    title: "Lad os tage en konkret snak om jeres proces",
    description:
      "Beskriv kort jeres nuværende flaskehalse. Vi vender tilbage med en nøgtern vurdering og forslag til næste skridt.",
    directContact: "Direkte kontakt",
    email: "E-mail",
    phone: "Telefon",
    responseTime: "Svar inden for 1 arbejdsdag",
    topics: "Typiske emner",
    topicItems: [
      "Automatisering af sagsflow og triage",
      "Intern vidensplatform med RAG",
      "Dokumentintelligens i daglig drift",
      "Arkitektur, sikkerhed og governance",
    ],
  },
  en: {
    eyebrow: "Contact",
    title: "Let’s have a concrete conversation about your process",
    description:
      "Briefly describe your current bottlenecks. We’ll respond with a pragmatic assessment and recommended next steps.",
    directContact: "Direct contact",
    email: "Email",
    phone: "Phone",
    responseTime: "Response within 1 business day",
    topics: "Typical topics",
    topicItems: [
      "Automation of case flow and triage",
      "Internal knowledge platform with RAG",
      "Document intelligence in daily operations",
      "Architecture, security, and governance",
    ],
  },
};

export default async function ContactPage() {
  const locale = await getLocale();
  const copy = copyByLocale[locale];

  return (
    <>
      <PageHero eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

      <section className="section-space">
        <div className="section-shell grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <ContactForm locale={locale} />

          <aside className="space-y-8">
            <div className="surface-card rounded-[10px] p-8">
              <h2>{copy.directContact}</h2>
              <ul className="mt-6 space-y-3 text-[16px] text-[#000000]">
                <li>
                  {copy.email}:{" "}
                  <a href="mailto:kontakt@vertexsolutions.dk" className="font-semibold text-[var(--brand-blue)]">
                    kontakt@vertexsolutions.dk
                  </a>
                </li>
                <li>
                  {copy.phone}:{" "}
                  <a href="tel:+4531508899" className="font-semibold text-[var(--brand-blue)]">
                    +45 31 50 88 99
                  </a>
                </li>
                <li>{copy.responseTime}</li>
              </ul>
            </div>

            <div className="surface-card rounded-[10px] p-8">
              <h2>{copy.topics}</h2>
              <ul className="mt-6 space-y-3 text-[16px] text-[#000000]">
                {copy.topicItems.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
