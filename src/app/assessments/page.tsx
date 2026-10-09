import { PageHeader } from "@/components/course/page-header";
import {
  assessments,
  capstoneRequirements,
  latePolicy,
} from "@/data/assessments";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertTriangle, GraduationCap } from "lucide-react";

export default function AssessmentsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl space-y-12">
      <PageHeader
        title="Assessments & Grading"
        subtitle="Grading scheme, assessment components, capstone project guidelines, and late policies."
      />

      {/* Grading Scheme Table */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight border-b pb-2">
          Grading Table
        </h2>

        <div className="rounded-md border overflow-hidden">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="w-[200px] font-semibold">Assessment</TableHead>
                <TableHead className="w-[100px] font-semibold">Weight</TableHead>
                <TableHead className="font-semibold">Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assessments.map((item) => (
                <TableRow key={item.label}>
                  <TableCell className="font-medium">{item.label}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="font-bold">
                      {item.weight}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {item.description}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* Capstone Requirements */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b pb-2">
          <GraduationCap className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold tracking-tight">Capstone Project Requirements</h2>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Multi-Week Capstone Agent Project</CardTitle>
            <CardDescription>
              Students work individually or in small teams to design, implement, evaluate, and present a production-grade autonomous agent system.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-3 sm:grid-cols-1">
              {capstoneRequirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{req}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Late Policy */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight border-b pb-2">
          Late Policy
        </h2>

        <Card className="border-amber-500/30 bg-amber-500/5">
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <CardTitle className="text-lg font-semibold text-amber-900 dark:text-amber-200">
                Submission Guidelines & Penalties
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground leading-relaxed">
            {latePolicy}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
