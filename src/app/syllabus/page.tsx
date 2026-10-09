import React from "react";
import {
  BookOpen,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  Layers,
  Award,
  ListChecks,
} from "lucide-react";

import { PageHeader } from "@/components/course/page-header";
import { Section } from "@/components/course/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { courseTheme, courseDescription, prerequisites, learningOutcomes } from "@/data/outcomes";
import { weeks } from "@/data/schedule";
import { assessments, capstoneRequirements, latePolicy } from "@/data/assessments";
import { resources } from "@/data/resources";

export default function SyllabusPage() {
  const books = resources.filter((r) => r.category === "Books");

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl space-y-10">
      {/* 4.1 PageHeader: title + description + theme */}
      <div>
        <PageHeader title="Course Syllabus" subtitle={courseDescription}>
          <div className="mt-4 rounded-xl border bg-gradient-to-r from-primary/10 via-primary/5 to-muted/30 p-4 sm:p-5 flex items-start gap-3">
            <div className="rounded-lg bg-primary/10 p-2 text-primary shrink-0 mt-0.5">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Course Theme
              </span>
              <p className="text-base sm:text-lg font-medium text-foreground mt-0.5">
                &ldquo;{courseTheme}&rdquo;
              </p>
            </div>
          </div>
        </PageHeader>
      </div>

      {/* 4.2 Learning Outcomes & 4.3 Prerequisites */}
      <div className="grid gap-8 md:grid-cols-3">
        {/* 4.2 Learning Outcomes */}
        <Section
          title="Learning Outcomes"
          description="By the end of this course, students will be able to:"
          className="md:col-span-2 py-0"
        >
          <div className="rounded-xl border bg-card p-5 shadow-xs space-y-4">
            <ol className="space-y-3">
              {learningOutcomes.map((outcome, index) => (
                <li key={outcome.id} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium leading-relaxed text-foreground capitalize-first">
                    {outcome.description}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Section>

        {/* 4.3 Prerequisites */}
        <Section
          title="Prerequisites"
          description="Required baseline background:"
          className="py-0"
        >
          <Card className="h-full">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold flex items-center gap-2">
                <ListChecks className="h-4 w-4 text-primary" />
                Background Expectations
              </CardTitle>
              <CardDescription className="text-xs">
                Students should have prior coursework or practical familiarity in:
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {prerequisites.map((req) => (
                <div
                  key={req}
                  className="flex items-center gap-2 rounded-md border bg-muted/40 px-3 py-2 text-sm font-medium"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span className="capitalize">{req}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </Section>
      </div>

      {/* 4.4 Weekly Schedule */}
      <Section
        title="Weekly Schedule"
        description="15-week course outline covering foundational AI algorithms to modern agentic systems."
      >
        <Card>
          <CardContent className="p-4 sm:p-6">
            <Accordion className="w-full divide-y">
              {weeks.map((week) => {
                const weekLabel = week.span
                  ? `Weeks ${week.number}–${week.number + week.span - 1}`
                  : `Week ${week.number}`;

                return (
                  <AccordionItem
                    key={week.number}
                    value={`week-${week.number}`}
                    id={week.number === 1 ? "week-1" : undefined}
                    className="py-1"
                  >
                    <AccordionTrigger className="hover:no-underline py-3 px-2 rounded-md hover:bg-muted/50 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full text-left gap-2 sm:gap-4 pr-2">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="font-semibold shrink-0 bg-primary/5">
                            {weekLabel}
                          </Badge>
                          <span className="font-semibold text-foreground text-sm sm:text-base">
                            {week.title}
                          </span>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-2 pt-2 pb-3">
                      <div className="rounded-lg bg-muted/40 p-3 text-sm space-y-1">
                        <span className="font-medium text-muted-foreground uppercase text-xs tracking-wider">
                          Key Topics Covered
                        </span>
                        <p className="text-foreground font-normal leading-relaxed">
                          {week.topics}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </CardContent>
        </Card>
      </Section>

      {/* 4.5 Assessment Table */}
      <Section
        title="Grading & Assessment"
        description="Grade distribution and evaluation criteria for the course."
      >
        <div className="space-y-6">
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[220px]">Assessment Component</TableHead>
                  <TableHead className="w-[100px] text-right">Weight</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {assessments.map((item) => (
                  <TableRow key={item.label}>
                    <TableCell className="font-semibold text-foreground">
                      {item.label}
                    </TableCell>
                    <TableCell className="text-right font-bold text-primary">
                      {item.weight}
                    </TableCell>
                    <TableCell className="text-muted-foreground leading-relaxed whitespace-normal">
                      {item.description}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>

          {/* Capstone Requirements & Late Policy */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary" />
                  Capstone Project Deliverables
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                  {capstoneRequirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold flex items-center gap-2">
                  <Layers className="h-4 w-4 text-primary" />
                  Course & Late Policy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {latePolicy}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* 4.6 Textbooks & Course Readings */}
      <Section
        title="Textbooks & Course Readings"
        description="Recommended readings and primary references for the course."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <Card key={book.name} className="flex flex-col justify-between hover:border-primary/50 transition-colors">
              <CardHeader className="pb-3">
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="h-4 w-4" />
                </div>
                <CardTitle className="text-base font-semibold leading-snug">
                  {book.name}
                </CardTitle>
                <CardDescription className="text-xs leading-relaxed mt-1.5">
                  {book.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <a
                  href={book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline mt-2"
                >
                  <span>Publisher / Resource Link</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
