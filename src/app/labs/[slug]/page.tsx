import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { labs } from "@/data/labs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

interface LabPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return labs.map((lab) => ({
    slug: lab.slug,
  }));
}

export default async function LabDetailPage({ params }: LabPageProps) {
  const { slug } = await params;
  const lab = labs.find((l) => l.slug === slug);

  if (!lab) {
    notFound();
  }

  let LabMdxContent: React.ComponentType | null = null;

  if (lab.hasMdx) {
    try {
      LabMdxContent = (await import(`@/content/labs/${slug}.mdx`)).default;
    } catch (error) {
      console.error(`Failed to load MDX for lab ${slug}:`, error);
      LabMdxContent = null;
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl space-y-8">
      {/* Back Navigation */}
      <div>
        <Button variant="ghost" size="sm" render={<Link href="/labs" />}>
          <ArrowLeft className="mr-1.5 h-4 w-4" /> Back to Labs
        </Button>
      </div>

      {/* Lab Header */}
      <div className="space-y-3 border-b pb-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="default" className="text-xs font-semibold">
            Week {lab.week === 14 ? "14–15" : lab.week}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {lab.category}
          </Badge>
          {lab.hasMdx ? (
            <Badge variant="outline" className="text-xs border-emerald-500/40 text-emerald-600 dark:text-emerald-400">
              Interactive Lab
            </Badge>
          ) : (
            <Badge variant="secondary" className="text-xs text-muted-foreground">
              Materials Coming Soon
            </Badge>
          )}
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
          {lab.title}
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed">
          {lab.description}
        </p>
      </div>

      {/* Lab Body */}
      {lab.hasMdx && LabMdxContent ? (
        <article className="prose dark:prose-invert max-w-none">
          <LabMdxContent />
        </article>
      ) : (
        <Card className="border-dashed border-2 bg-muted/30">
          <CardHeader className="text-center space-y-2 py-10">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <Clock className="h-6 w-6" />
            </div>
            <CardTitle className="text-xl font-bold">Materials Coming Soon</CardTitle>
            <CardDescription className="max-w-md mx-auto text-sm">
              The starter code, walkthrough notes, and assignment specifications for{" "}
              <span className="font-semibold text-foreground">{lab.title}</span> will be published prior to Week {lab.week}.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center pb-8">
            <Button variant="outline" render={<Link href="/labs" />}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Explore Available Labs
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
