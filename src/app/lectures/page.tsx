import Link from "next/link";
import { PageHeader } from "@/components/course/page-header";
import { getLectures } from "@/lib/lectures";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Calendar, Clock } from "lucide-react";

export default function LecturesPage() {
  const lectures = getLectures();

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl space-y-8">
      <PageHeader
        title="Lectures"
        subtitle="Lecture notes, slides, and interactive study guides for Introduction to AI."
      />

      {lectures.length === 0 ? (
        <Card className="border-dashed border-2 bg-muted/30">
          <CardHeader className="text-center space-y-2 py-12">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Clock className="h-6 w-6" />
            </div>
            <CardTitle className="text-xl font-bold">No Lectures Published Yet</CardTitle>
            <CardDescription className="max-w-md mx-auto text-sm">
              Lecture notes will be published as the course progresses throughout the semester.
            </CardDescription>
          </CardHeader>
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {lectures.map((lecture) => (
            <Card
              key={lecture.slug}
              className="flex flex-col justify-between transition-colors hover:border-primary/50"
            >
              <CardHeader className="space-y-3">
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
                </div>
                <CardTitle className="text-xl font-bold leading-tight">
                  <Link
                    href={`/lectures/${lecture.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {lecture.title}
                  </Link>
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed line-clamp-3">
                  {lecture.description || "Interactive lecture notes and course material."}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0" />

              <CardFooter className="pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-between group"
                  render={<Link href={`/lectures/${lecture.slug}`} />}
                >
                  <span className="flex items-center gap-1.5 font-medium">
                    <BookOpen className="h-4 w-4" /> Read Notes
                  </span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
