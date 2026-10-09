import { PageHeader } from "@/components/course/page-header";
import { resources, Resource } from "@/data/resources";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, BookOpen, Wrench, FileText, Cpu, BarChart3 } from "lucide-react";

const categories: Resource["category"][] = [
  "Papers",
  "Tools",
  "Books",
  "Open Models",
  "Evaluation Benchmarks",
];

const categoryIcons = {
  Papers: FileText,
  Tools: Wrench,
  Books: BookOpen,
  "Open Models": Cpu,
  "Evaluation Benchmarks": BarChart3,
};

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl space-y-12">
      <PageHeader
        title="Resources"
        subtitle="Curated papers, frameworks, open models, textbooks, and benchmarks for modern AI development."
      />

      <div className="space-y-10">
        {categories.map((category) => {
          const categoryResources = resources.filter(
            (r) => r.category === category
          );
          if (categoryResources.length === 0) return null;

          const Icon = categoryIcons[category];

          return (
            <section key={category} className="space-y-4">
              <div className="flex items-center gap-2 border-b pb-2">
                <Icon className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-bold tracking-tight">{category}</h2>
                <Badge variant="secondary" className="ml-2">
                  {categoryResources.length}
                </Badge>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {categoryResources.map((item) => (
                  <Card key={item.name} className="flex flex-col justify-between hover:border-primary/50 transition-colors">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg font-semibold flex items-start justify-between gap-2">
                        <span>{item.name}</span>
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed mt-2">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                      >
                        Visit Resource <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
