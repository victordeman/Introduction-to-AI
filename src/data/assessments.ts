export interface AssessmentItem {
  label: string;
  weight: string;
  description: string;
}

export const assessments: AssessmentItem[] = [
  {
    label: "Labs/mini-projects",
    weight: "45%",
    description: "Hands-on coding assignments and practical implementation labs covering weeks 1–13.",
  },
  {
    label: "Capstone",
    weight: "30%",
    description: "Multi-week capstone agent project integrating multiple AI capabilities into a production-ready system.",
  },
  {
    label: "Midterm",
    weight: "15%",
    description: "Midterm assessment evaluating theoretical concepts, core algorithms, and foundational AI principles.",
  },
  {
    label: "Ethics/reflections + participation",
    weight: "10%",
    description: "Active discussion participation, weekly reflection responses, and ethical analysis case studies.",
  },
];

export const capstoneRequirements: string[] = [
  "End-to-end implementation of an autonomous agent or multi-agent system.",
  "Integration of modern AI patterns (e.g., RAG, tool calling, structured outputs, memory, or planning).",
  "Comprehensive evaluation framework measuring agent performance, accuracy, and failure modes.",
  "Public GitHub repository with documentation, setup instructions, and reproducible benchmarks.",
  "Final written report and live demonstration/presentation.",
];

export const latePolicy: string =
  "Late Policy Placeholder: Submissions uploaded after the deadline will incur a 10% deduction per day up to a maximum of 3 days. Submissions delayed beyond 72 hours without prior approval or extenuating circumstances will receive a score of 0.";
