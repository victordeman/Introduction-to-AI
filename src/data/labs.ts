export interface Lab {
  slug: string;
  title: string;
  week: number;
  description: string;
  hasMdx: boolean;
  category: "Foundations" | "Modern AI" | "Ethics & Evaluation" | "Capstone";
}

export const labs: Lab[] = [
  {
    slug: "week-1-intelligent-agents",
    title: "Lab 1: Building PEAS Agent Architectures",
    week: 1,
    description: "Implement simple reflexive and goal-based agent environments defined by PEAS performance metrics.",
    hasMdx: true,
    category: "Foundations",
  },
  {
    slug: "week-2-search-and-planning",
    title: "Lab 2: Applied A* Search & Grid Pathfinding",
    week: 2,
    description: "Implement A* pathfinding and custom heuristic functions for automated maze traversal and navigation.",
    hasMdx: false,
    category: "Foundations",
  },
  {
    slug: "week-3-knowledge-and-reasoning",
    title: "Lab 3: Knowledge Graphs & Rule Engines",
    week: 3,
    description: "Construct a mini knowledge graph and inference engine for rule-based logical reasoning.",
    hasMdx: false,
    category: "Foundations",
  },
  {
    slug: "week-4-decision-making-under-uncertainty",
    title: "Lab 4: Bayesian Networks & MDP Solvers",
    week: 4,
    description: "Model uncertain environments using Bayesian networks and value iteration on Markov Decision Processes.",
    hasMdx: false,
    category: "Foundations",
  },
  {
    slug: "week-5-ml-foundations",
    title: "Lab 5: Supervised Learning & Bias-Variance Tradeoffs",
    week: 5,
    description: "Train classification models, conduct cross-validation, and analyze bias-variance tradeoffs.",
    hasMdx: false,
    category: "Foundations",
  },
  {
    slug: "week-6-deep-learning-essentials",
    title: "Lab 6: Neural Networks & Self-Attention Mechanisms",
    week: 6,
    description: "Build custom PyTorch neural network layers and implement basic sequence-to-sequence attention models.",
    hasMdx: false,
    category: "Foundations",
  },
  {
    slug: "week-7-transformers-and-embeddings",
    title: "Lab 7: Tokenization & Transformer Self-Attention",
    week: 7,
    description: "Implement BPE tokenization, compute vector embeddings, and visualize multi-head attention weights.",
    hasMdx: false,
    category: "Modern AI",
  },
  {
    slug: "week-8-llms-in-practice",
    title: "Lab 8: Prompt Engineering & Structured Output Parsers",
    week: 8,
    description: "Construct robust prompt templates and JSON schema parsers to eliminate model output hallucinations.",
    hasMdx: false,
    category: "Modern AI",
  },
  {
    slug: "week-9-rag-tool-use",
    title: "Lab 9: RAG Pipeline & Vector Databases",
    week: 9,
    description: "Build an end-to-end Retrieval-Augmented Generation pipeline using vector embeddings, chunking, and function calling.",
    hasMdx: true,
    category: "Modern AI",
  },
  {
    slug: "week-10-react-agent",
    title: "Lab 10: ReAct Agent with Tool Calling",
    week: 10,
    description: "Implement a ReAct (Reasoning + Acting) loop with automated external tool calling and action memory.",
    hasMdx: false,
    category: "Modern AI",
  },
  {
    slug: "week-11-generative-and-multimodal",
    title: "Lab 11: Vision-Language & Multimodal Agents",
    week: 11,
    description: "Leverage vision-language foundation models to inspect image inputs and solve visual reasoning tasks.",
    hasMdx: false,
    category: "Modern AI",
  },
  {
    slug: "week-12-rl-and-preference-learning",
    title: "Lab 12: Q-Learning & RLHF Preference Alignment",
    week: 12,
    description: "Implement Q-learning and simulate Direct Preference Optimization (DPO) / RLHF reward modeling.",
    hasMdx: false,
    category: "Modern AI",
  },
  {
    slug: "week-13-evaluation-and-safety",
    title: "Lab 13: Agent Evaluation & Red-Teaming Safety Frameworks",
    week: 13,
    description: "Perform red-teaming, prompt injection defense evaluations, and measure model bias and robustness metrics.",
    hasMdx: false,
    category: "Ethics & Evaluation",
  },
  {
    slug: "week-14-capstone-agent-project",
    title: "Featured Capstone: Autonomous Multi-Agent Systems",
    week: 14,
    description: "Integrate perception, RAG retrieval, tool calling, and multi-agent coordination into a complete agent project.",
    hasMdx: false,
    category: "Capstone",
  },
];
