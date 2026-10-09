export interface Outcome {
  id: string;
  description: string;
}

export const courseTheme = "Building Intelligent Agents in the Age of Foundation Models.";

export const courseDescription =
  "An advanced, practical introduction to modern artificial intelligence focusing on building autonomous intelligent agents. The course bridges classical AI foundations (search, knowledge representation, reasoning, uncertainty) with contemporary paradigm shifts in foundation models, retrieval-augmented generation (RAG), tool use, agentic workflows, multimodal AI, and safety alignment.";

export const prerequisites: string[] = [
  "basic Python",
  "probability basics",
  "linear algebra fundamentals",
];

export const learningOutcomes: Outcome[] = [
  {
    id: "a",
    description: "design and evaluate intelligent agents using modern architectures",
  },
  {
    id: "b",
    description: "apply classical search/reasoning/uncertainty methods to real problems",
  },
  {
    id: "c",
    description: "build with foundation models — prompting, RAG, tool use, agent orchestration",
  },
  {
    id: "d",
    description: "evaluate models for quality, bias, and safety",
  },
  {
    id: "e",
    description: "reason about ethical and societal implications of deployed AI",
  },
];
