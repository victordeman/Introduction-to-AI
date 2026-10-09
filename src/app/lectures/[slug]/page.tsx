import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, BookOpen } from "lucide-react";
import { getLectures, getLectureBySlug } from "@/lib/lectures";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface LecturePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const lectures = getLectures();
  return lectures.map((lecture) => ({
    slug: lecture.slug,
  }));
}

export default async function LectureDetailPage({ params }: LecturePageProps) {
  const { slug } = await params;
  const lecture = getLectureBySlug(slug);

  if (!lecture) {
    notFound();
  }

  let LectureMdxContent: React.ComponentType | null = null;

  try {
    LectureMdxContent = (await import(`@/content/lectures/${slug}.mdx`)).default;
  } catch (error) {
    console.error(`Failed to load MDX for lecture ${slug}:`, error);
    notFound();
  }

  if (!LectureMdxContent) {
    notFound();
  }

  const ContentComponent = LectureMdxContent;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl space-y-8">
      {/* Back Navigation */}
      <div>
        <Button variant="ghost" size="sm" render={<Link href="/lectures" />}>
          <ArrowLeft className="mr-1.5 h-4 w-4" /> Back to Lectures
        </Button>
      </div>

      {/* Lecture Header */}
      <div className="space-y-3 border-b pb-6">
        <div className="flex flex-wrap items-center gap-2">
          {lecture.week > 0 && (
            <Badge variant="default" className="text-xs font-semibold">
              Week {lecture.week}
            </Badge>
          )}
          {lecture.date && (
            <Badge variant="outline" className="text-xs gap-1">
              <Calendar className="h-3 w-3" />
              {lecture.date}
            </Badge>
          )}
          <Badge variant="outline" className="text-xs border-primary/40 text-primary">
            Lecture Notes
          </Badge>
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
          {lecture.title}
        </h1>

        {lecture.description && (
          <p className="text-lg text-muted-foreground leading-relaxed">
            {lecture.description}
          </p>
        )}
      </div>

      {/* Lecture Content */}
      <article className="prose dark:prose-invert max-w-none">
        <ContentComponent />
      </article>

      {/* Footer Navigation */}
      <div className="border-t pt-6 flex justify-between items-center text-sm text-muted-foreground">
        <Button variant="outline" size="sm" render={<Link href="/lectures" />}>
          <BookOpen className="mr-2 h-4 w-4" /> All Lectures
        </Button>
      </div>
    </div>
  );
}
