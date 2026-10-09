import { PageHeader } from "@/components/course/page-header";

export default function StaffPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <PageHeader
        title="Course Staff"
        subtitle="Instructors, teaching assistants, and office hours schedules."
      />
    </div>
  );
}
