import { PageHeader } from "@/components/course/page-header";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Clock, Mail, MapPin, Compass, Code, Scale } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl space-y-12">
      <PageHeader
        title="About the Course"
        subtitle="Course philosophy, structure, prerequisites, and teaching staff."
      />

      {/* Philosophy Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight border-b pb-2">
          Course Philosophy
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Artificial Intelligence has evolved from theoretical academic formulations to the foundational substrate of modern software systems. This course approaches AI through a balanced, agent-centric lens that connects classical computer science foundations with state-of-the-art foundation models and agentic software engineering.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Code className="h-5 w-5" />
              </div>
              <CardTitle className="text-lg font-semibold">Practical & Hands-On</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              Theory is solidified through implementation. Students build production-grade AI components from scratch in Python—from search algorithms and neural nets to vector stores and agent workflows.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Compass className="h-5 w-5" />
              </div>
              <CardTitle className="text-lg font-semibold">Agent-Centric Paradigm</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              We structure the entire curriculum around autonomous agents that perceive, reason, plan, execute actions with tools, and reflect on their outcomes in complex environments.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Scale className="h-5 w-5" />
              </div>
              <CardTitle className="text-lg font-semibold">Balanced Classical + Modern</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              Modern LLMs and foundation models are grounded in classical AI principles: search, logic, constraint satisfaction, probabilistic reasoning, and reinforcement learning.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight border-b pb-2">
          Instructor
        </h2>

        <Card className="max-w-2xl">
          <CardHeader>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted border text-muted-foreground shrink-0">
                <User className="h-10 w-10" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <CardTitle className="text-xl font-bold">Course Instructor</CardTitle>
                  <Badge variant="outline" className="text-amber-600 dark:text-amber-400 border-amber-500/50">
                    TBD
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Primary Instructor & Curriculum Lead
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 text-sm border-t pt-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4 text-primary shrink-0" />
              <span><strong>Office Hours:</strong> TBD</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary shrink-0" />
              <span><strong>Location:</strong> TBD</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4 text-primary shrink-0" />
              <span><strong>Email:</strong> TBD</span>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
