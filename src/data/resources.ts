export interface Resource {
  category: "Papers" | "Tools" | "Books" | "Open Models" | "Evaluation Benchmarks";
  name: string;
  url: string;
  description: string;
}

export const resources: Resource[] = [
  // Papers
  {
    category: "Papers",
    name: "Attention Is All You Need (Vaswani et al., 2017)",
    url: "https://arxiv.org/abs/1706.03762",
    description: "The seminal paper introducing the Transformer architecture and multi-head self-attention mechanisms.",
  },
  {
    category: "Papers",
    name: "ReAct: Synergizing Reasoning and Acting in Language Models (Yao et al., 2022)",
    url: "https://arxiv.org/abs/2210.03629",
    description: "Introduces the ReAct paradigm combining reasoning traces and action execution for AI agents.",
  },
  {
    category: "Papers",
    name: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (Lewis et al., 2020)",
    url: "https://arxiv.org/abs/2005.11401",
    description: "Pioneering paper introducing RAG architecture combining parametric memory with vector database retrieval.",
  },
  {
    category: "Papers",
    name: "Direct Preference Optimization: Your Language Model is Secretly a Reward Model (Rafailov et al., 2023)",
    url: "https://arxiv.org/abs/2305.18290",
    description: "Presents DPO, an elegant preference alignment algorithm optimizing LLMs without complex RL reward models.",
  },

  // Tools
  {
    category: "Tools",
    name: "Hugging Face Hub & Transformers",
    url: "https://huggingface.co",
    description: "Platform and open-source library for sharing datasets, models, and building machine learning pipelines.",
  },
  {
    category: "Tools",
    name: "LangChain Framework",
    url: "https://github.com/langchain-ai/langchain",
    description: "Framework for developing applications powered by language models and agentic workflows.",
  },
  {
    category: "Tools",
    name: "OpenAI Platform & API",
    url: "https://platform.openai.com/docs",
    description: "Developer documentation and API access for state-of-the-art GPT models, vision, and function calling.",
  },
  {
    category: "Tools",
    name: "Anthropic API & Claude",
    url: "https://docs.anthropic.com",
    description: "API access to Claude 3 models with extended context windows, tool usage, and structured outputs.",
  },
  {
    category: "Tools",
    name: "Qdrant Vector Database",
    url: "https://qdrant.tech",
    description: "High-performance, open-source vector search engine designed for RAG applications and similarity search.",
  },

  // Books
  {
    category: "Books",
    name: "Artificial Intelligence: A Modern Approach (4th Ed.)",
    url: "https://aima.cs.berkeley.edu",
    description: "The authoritative textbook by Stuart Russell and Peter Norvig covering classical and modern AI.",
  },
  {
    category: "Books",
    name: "Deep Learning (Goodfellow, Bengio, & Courville)",
    url: "https://www.deeplearningbook.org",
    description: "Comprehensive textbook on theoretical foundations of deep neural networks and representation learning.",
  },
  {
    category: "Books",
    name: "Build a Large Language Model (From Scratch)",
    url: "https://www.manning.com/books/build-a-large-language-model-from-scratch",
    description: "Step-by-step practical guide by Sebastian Raschka on implementing Transformer models in PyTorch.",
  },

  // Open Models
  {
    category: "Open Models",
    name: "Meta Llama 3",
    url: "https://www.llama.com",
    description: "Meta's state-of-the-art open weight foundation models optimized for reasoning and code generation.",
  },
  {
    category: "Open Models",
    name: "Mistral AI Open Models",
    url: "https://mistral.ai",
    description: "High-performance open weights models including Mixtral sparse mixture-of-experts architectures.",
  },
  {
    category: "Open Models",
    name: "DeepSeek-V3 / DeepSeek-R1",
    url: "https://github.com/deepseek-ai",
    description: "Open source reasoning and mixture-of-experts models delivering state-of-the-art benchmarks.",
  },

  // Evaluation Benchmarks
  {
    category: "Evaluation Benchmarks",
    name: "MMLU (Massive Multitask Language Understanding)",
    url: "https://github.com/hendrycks/test",
    description: "Benchmark evaluating model understanding across 57 subjects spanning STEM, humanities, and social sciences.",
  },
  {
    category: "Evaluation Benchmarks",
    name: "SWE-bench (Software Engineering Benchmark)",
    url: "https://www.swebench.com",
    description: "Benchmark evaluating AI agents on resolving real-world GitHub issues in python repositories.",
  },
  {
    category: "Evaluation Benchmarks",
    name: "GAIA (General AI Assistants Benchmark)",
    url: "https://huggingface.co/spaces/gaia-benchmark/leaderboard",
    description: "Benchmark designed to evaluate AI assistant capabilities across multi-step reasoning, multimodal processing, and tool use.",
  },
];
