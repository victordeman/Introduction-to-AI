import { PageHeader } from "@/components/course/page-header";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <PageHeader
        title="About the Course"
        subtitle="Course policies, prerequisites, learning outcomes, and grading scheme."
      />
    </div>
  );
}
