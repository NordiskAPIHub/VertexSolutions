import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type Feature = {
  title: string;
  description: string;
};

export function FeatureGrid({
  title,
  intro,
  features,
}: {
  title: string;
  intro: string;
  features: Feature[];
}) {
  return (
    <section className="section-space">
      <div className="section-shell">
        <Badge variant="outline">Hvad vi hjælper med</Badge>
        <h2 className="mt-4 max-w-3xl text-4xl font-semibold text-black sm:text-5xl">{title}</h2>
        <p className="mt-4 max-w-3xl text-lg text-[#2f3740]">{intro}</p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {features.map((feature, idx) => (
            <Card key={feature.title} className="fade-up h-full" style={{ animationDelay: `${idx * 90}ms` }}>
              <CardHeader>
                <CardTitle className="text-2xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-[#313944]">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
