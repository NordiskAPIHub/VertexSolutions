import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type CaseCardProps = {
  title: string;
  category: string;
  summary: string;
  highlights: string[];
  href?: string;
};

export function CaseCard({ title, category, summary, highlights, href = "/cases" }: CaseCardProps) {
  return (
    <Card className="flex h-full flex-col justify-between">
      <CardHeader>
        <Badge className="w-fit" variant="outline">
          {category}
        </Badge>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-base text-[#313944]">{summary}</p>
        <ul className="mt-5 space-y-2">
          {highlights.map((highlight) => (
            <li key={highlight} className="text-sm text-[#26303a]">
              • {highlight}
            </li>
          ))}
        </ul>
        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand-blue)]"
        >
          Se case
          <ArrowUpRight className="size-4" />
        </Link>
      </CardContent>
    </Card>
  );
}
