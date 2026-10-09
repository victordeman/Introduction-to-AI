import { PageHeader } from "@/components/course/page-header";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Clock, Mail, MapPin } from "lucide-react";

const staffMembers = [
  {
    role: "Instructor",
    title: "Lead Instructor",
    description: "Oversees course lectures, curriculum design, and overall administration.",
  },
  {
    role: "Teaching Assistant",
    title: "Head Teaching Assistant",
    description: "Leads lab sessions, oversees assignment grading, and coordinates TA office hours.",
  },
  {
    role: "Teaching Assistant",
    title: "Teaching Assistant",
    description: "Assists with lab support, code reviews, assignment grading, and student discussion forum queries.",
  },
];

export default function StaffPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl space-y-10">
      <PageHeader
        title="Course Staff"
        subtitle="Meet the instructors and teaching assistants for Introduction to Artificial Intelligence."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {staffMembers.map((staff, index) => (
          <Card key={index} className="flex flex-col justify-between">
            <CardHeader>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted border text-muted-foreground">
                  <User className="h-10 w-10" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-center gap-2">
                    <CardTitle className="text-lg font-bold">{staff.role}</CardTitle>
                    <Badge variant="outline" className="text-amber-600 dark:text-amber-400 border-amber-500/50">
                      TBD
                    </Badge>
                  </div>
                  <p className="text-xs font-medium text-primary">{staff.title}</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-3 leading-relaxed">
                {staff.description}
              </p>
            </CardHeader>
            <CardContent className="space-y-2 text-xs border-t pt-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 text-primary shrink-0" />
                <span><strong>Office Hours:</strong> TBD</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                <span><strong>Location:</strong> TBD</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-primary shrink-0" />
                <span><strong>Email:</strong> TBD</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
