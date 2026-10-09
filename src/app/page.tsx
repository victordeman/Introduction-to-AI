import Link from "next/link";
import {
  Code2,
  FlaskConical,
  Bot,
  Briefcase,
  ShieldCheck,
  ArrowRight,
  BookOpen,
  Presentation,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { courseTheme } from "@/data/outcomes";

const courseHighlights = [
  {
    title: "Python-Focused",
    description: "Built entirely in Python, using industry-standard libraries and modern AI software stacks.",
    icon: Code2,
  },
  {
    title: "Hands-on Labs",
    description: "Apply concepts immediately through practical coding assignments, labs, and interactive projects.",
    icon: FlaskConical,
  },
  {
    title: "Modern AI Systems",
    description: "Explore state-of-the-art LLMs, foundation models, vector databases, RAG, and agentic workflows.",
    icon: Bot,
  },
  {
    title: "Real-World Case Studies",
    description: "Analyze industry deployments, real system failures, and real-world AI architecture patterns.",
    icon: Briefcase,
  },
  {
    title: "Ethics & Safety",
    description: "Examine model alignment, bias mitigation, safety benchmarks, and responsible AI practices.",
    icon: ShieldCheck,
  },
];

const quickLinks = [
  {
    title: "Syllabus",
    description: "Explore course policies, schedule breakdown, grading criteria, and learning outcomes.",
    href: "/syllabus",
    icon: BookOpen,
    cta: "View Syllabus",
  },
  {
    title: "Labs & Projects",
    description: "Access hands-on programming labs, agent implementations, and project guidelines.",
    href: "/labs",
    icon: FlaskConical,
    cta: "Browse Labs",
  },
  {
    title: "Week 1 Lecture",
    description: "Get started with Lecture 1: Introduction to AI, Intelligent Agents, and Course Overview.",
    href: "/lectures/week-1-introduction",
    icon: Presentation,
    cta: "Start Lecture 1",
  },
];

export default function Home() {
  return (
    <div className="space-y-16 py-8 md:py-12">
      {/* Hero Section */}
      <section className="container mx-auto px-4 text-center max-w-4xl space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-3 py-1 text-sm font-medium text-muted-foreground">
          <Sparkles className="h-4 w-4 text-primary" />
          <span>CS 101 — Intelligent Agents & Foundation Models</span>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent">
          Introduction to Artificial Intelligence
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A modern course on building intelligent agents in the age of foundation models, classical search, and modern agentic workflows.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Button size="lg" className="gap-2" render={<Link href="/syllabus" />}>
            Explore Syllabus <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" render={<Link href="/labs" />}>
            View Labs & Projects
          </Button>
        </div>
      </section>

      {/* Theme Banner */}
      <section className="container mx-auto px-4 max-w-5xl">
        <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-r from-primary/10 via-primary/5 to-muted/20 p-8 md:p-10 text-center shadow-xs">
          <div className="relative z-10 max-w-3xl mx-auto space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Course Theme
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              &ldquo;{courseTheme}&rdquo;
            </h2>
          </div>
        </div>
      </section>

      {/* Course Highlights Section */}
      <section className="container mx-auto px-4 max-w-6xl space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Course Highlights</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A comprehensive curriculum designed to take you from core AI foundations to state-of-the-art agent engineering.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courseHighlights.map((highlight) => {
            const Icon = highlight.icon;
            return (
              <Card key={highlight.title} className="flex flex-col justify-between transition-colors hover:border-primary/50">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{highlight.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed mt-1.5">
                    {highlight.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Quick Links Row */}
      <section className="container mx-auto px-4 max-w-6xl space-y-8 pb-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Get Started</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Jump directly into course materials, lab assignments, or your first lecture.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Card key={link.title} className="flex flex-col justify-between transition-colors hover:border-primary/50">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{link.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed mt-1.5">
                    {link.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="ghost" className="w-full justify-between group px-0 hover:bg-transparent text-primary hover:text-primary/80" render={<Link href={link.href} />}>
                    <span>{link.cta}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
