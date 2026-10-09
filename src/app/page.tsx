import { PageHeader } from "@/components/course/page-header";
import { Section } from "@/components/course/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <PageHeader
        title="Introduction to Artificial Intelligence"
        subtitle="A modern, practical course on AI agents, large language models, generative AI, and foundational machine learning."
      >
        <div className="flex gap-3">
          <Button>
            <Link href="/syllabus">View Syllabus</Link>
          </Button>
          <Button variant="outline">
            <Link href="/labs">Browse Labs</Link>
          </Button>
        </div>
      </PageHeader>

      <Section title="Course Highlights" description="Master core AI concepts with hands-on projects and modern agent frameworks.">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold text-lg">Agents & Reasoning</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Search algorithms, constraint satisfaction, and modern autonomous agent design.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold text-lg">Machine Learning & Neural Nets</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Supervised learning, deep neural networks, and reinforcement learning fundamentals.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold text-lg">LLMs & Generative AI</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Transformers, prompt engineering, RAG, and fine-tuning state-of-the-art models.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
