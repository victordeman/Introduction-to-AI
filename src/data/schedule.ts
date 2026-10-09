export interface Week {
  number: number;
  span?: number;
  title: string;
  topics: string;
}

export const weeks: Week[] = [
  {
    number: 1,
    title: "Introduction & Intelligent Agents",
    topics: "PEAS, agent architectures, modern examples",
  },
  {
    number: 2,
    title: "Problem Solving & Search (Applied)",
    topics: "A*, pathfinding, planning",
  },
  {
    number: 3,
    title: "Knowledge, Reasoning & Planning",
    topics: "rule-based systems, knowledge graphs, retrieval mindset",
  },
  {
    number: 4,
    title: "Uncertainty & Decision Making",
    topics: "Bayes, decision networks, MDPs at intuitive level",
  },
  {
    number: 5,
    title: "Machine Learning Foundations",
    topics: "supervised learning, evaluation, bias-variance",
  },
  {
    number: 6,
    title: "Deep Learning Essentials",
    topics: "neural nets, CNNs, sequence models, intro to attention",
  },
  {
    number: 7,
    title: "Language Models & Transformers",
    topics: "tokenization, embeddings, attention, Transformer architecture",
  },
  {
    number: 8,
    title: "Large Language Models in Practice",
    topics: "prompt engineering, structured outputs, hallucinations, APIs",
  },
  {
    number: 9,
    title: "RAG & Tool Use",
    topics: "vector databases, retrieval-augmented generation, function calling",
  },
  {
    number: 10,
    title: "AI Agents & Agentic Systems",
    topics: "ReAct, Plan-and-Execute, memory, multi-agent, orchestration",
  },
  {
    number: 11,
    title: "Generative & Multimodal AI",
    topics: "diffusion models high-level, text-to-image, vision-language",
  },
  {
    number: 12,
    title: "Reinforcement Learning & Alignment",
    topics: "MDPs, Q-learning intuition, RLHF, preference learning",
  },
  {
    number: 13,
    title: "Evaluation, Safety, Ethics & Society",
    topics: "bias, robustness, AI safety, alignment, regulation",
  },
  {
    number: 14,
    span: 2,
    title: "Capstone Agent Project",
    topics: "integrate multiple capabilities into a complete agent system",
  },
];
