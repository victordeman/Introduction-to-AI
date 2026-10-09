import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle, Clock } from "lucide-react";
import { PageHeader } from "@/components/course/page-header";
import { labs, Lab } from "@/data/labs";
import { capstoneRequirements } from "@/data/assessments";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const categories: Array<{
  name: string;
  description: string;
  weeksLabel: string;
  categoryKey: Lab["category"];
}> = [
  {
    name: "Foundations",
    description: "Core agent architectures, classical search, logic, uncertainty, and learning fundamentals.",
    weeksLabel: "Weeks 1–6",
    categoryKey: "Foundations",
  },
  {
    name: "Modern AI",
    description: "Transformers, prompt engineering, RAG pipelines, tool calling, and preference alignment.",
    weeksLabel: "Weeks 7–12",
    categoryKey: "Modern AI",
  },
  {
    name: "Ethics & Evaluation",
    description: "Red-teaming, safety alignment, bias measurement, and agent robustness evaluation.",
    weeksLabel: "Week 13",
    categoryKey: "Ethics & Evaluation",
  },
  {
    name: "Capstone",
    description: "End-to-end multi-agent system integration, real-world deployment, and project demonstration.",
    weeksLabel: "Weeks 14–15",
    categoryKey: "Capstone",
  },
];

export default function LabsPage() {
  const capstoneLab = labs.find((l) => l.category === "Capstone") || labs[labs.length - 1];

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl space-y-10">
      <PageHeader
        title="Labs & Projects"
        subtitle="Hands-on programming assignments, practical AI experiments, and capstone project specifications."
      />

      {/* Featured Capstone Card at Top */}
      <section>
        <Card className="border-primary/30 bg-gradient-to-br from-primary/5 via-background to-secondary/20 shadow-md">
          <CardHeader className="space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Badge variant="default" className="bg-primary text-primary-foreground font-semibold">
                  <Sparkles className="mr-1 h-3 w-3" /> Featured Capstone
                </Badge>
                <Badge variant="outline">Weeks 14–15</Badge>
              </div>
            </div>
            <CardTitle className="text-2xl font-bold">{capstoneLab.title}</CardTitle>
            <CardDescription className="text-base text-foreground/80">
              {capstoneLab.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Project Requirements
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {capstoneRequirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-foreground/90 bg-background/60 p-2.5 rounded-md border border-border/60">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>

          <CardFooter className="flex flex-wrap items-center justify-between gap-4 bg-muted/30 pt-4">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              <span>Weight: 30% of total course grade</span>
            </div>
            {capstoneLab.hasMdx ? (
              <Button size="sm" render={<Link href={`/labs/${capstoneLab.slug}`} />}>
                View Capstone Guidelines <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Button>
            ) : (
              <Badge variant="secondary" className="px-3 py-1.5 text-xs text-muted-foreground bg-muted font-medium border">
                Materials coming soon
              </Badge>
            )}
          </CardFooter>
        </Card>
      </section>

      {/* Grouped Lab Categories */}
      {categories.map((category) => {
        const categoryLabs = labs.filter((lab) => lab.category === category.categoryKey);

        return (
          <section key={category.categoryKey} className="space-y-4">
            <div className="flex flex-wrap items-baseline justify-between border-b pb-2">
              <div>
                <h2 className="text-xl font-bold tracking-tight text-foreground">
                  {category.name}
                </h2>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {category.description}
                </p>
              </div>
              <Badge variant="outline" className="mt-1 sm:mt-0 font-medium">
                {category.weeksLabel}
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categoryLabs.map((lab) => (
                <Card
                  key={lab.slug}
                  className={`flex flex-col justify-between transition-all hover:border-primary/50 ${
                    lab.hasMdx ? "border-border shadow-xs" : "border-border/70 bg-card/60"
                  }`}
                >
                  <CardHeader className="space-y-1.5 pb-3">
                    <div className="flex items-center justify-between gap-2">
                      <Badge variant={lab.hasMdx ? "default" : "secondary"} className="text-xs font-semibold">
                        Week {lab.week === 14 ? "14–15" : lab.week}
                      </Badge>
                      {lab.hasMdx && (
                        <Badge variant="outline" className="text-[10px] uppercase border-emerald-500/40 text-emerald-600 dark:text-emerald-400">
                          Available Now
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-base font-semibold leading-snug">
                      {lab.title}
                    </CardTitle>
                    <CardDescription className="text-xs text-muted-foreground line-clamp-3">
                      {lab.description}
                    </CardDescription>
                  </CardHeader>

                  <CardFooter className="pt-2 pb-3 flex items-center justify-between border-t bg-muted/20">
                    <span className="text-xs text-muted-foreground">
                      {lab.hasMdx ? "Interactive Starter Code" : "Upcoming Lab"}
                    </span>
                    {lab.hasMdx ? (
                      <Button size="sm" variant="default" render={<Link href={`/labs/${lab.slug}`} />}>
                        View lab <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </Button>
                    ) : (
                      <Badge
                        variant="outline"
                        className="text-xs font-normal text-muted-foreground border-dashed bg-muted/40"
                      >
                        Materials coming soon
                      </Badge>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
