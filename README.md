# Introduction to Artificial Intelligence (CS 101)

A modern, responsive, accessible, and fast course website for **Introduction to Artificial Intelligence: Intelligent Agents & Foundation Models**. Built with Next.js App Router, TypeScript, Tailwind CSS v4, and MDX.

---

## 🌟 Overview

This course provides a modern, practical, and rigorous introduction to Artificial Intelligence. It bridges classical CS foundations (search algorithms, knowledge representation, constraint satisfaction, logic, probabilistic reasoning) with contemporary paradigm shifts in foundation models, retrieval-augmented generation (RAG), tool use, agentic workflows, and safety alignment.

### Key Features
- **Typed Content Engine**: Single-source-of-truth TypeScript modules in `src/data/` for course schedule, outcomes, assessments, resources, and labs.
- **Interactive MDX Material**: Full support for rich MDX lecture notes and interactive lab walkthroughs with syntax highlighting (Shiki + rehype-pretty-code) and callout components (`Callout`, `Tip`, `Note`, `Warning`, `InfoCallout`).
- **Responsive & Accessible**: Designed to work smoothly across device sizes (from 375px mobile to 1440px desktop) with full ARIA accessibility and proper heading hierarchy (`h1` -> `h2` -> `h3`).
- **Light & Dark Mode**: Persistent theme toggle powered by `next-themes` with WCAG-compliant contrast ratios in both themes.
- **Zero-Secret Architecture**: Entire site builds and runs staticaly without requiring external API keys or environment variables.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org) (Strict type-checking)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) + Tailwind Animate
- **UI Components**: Modern Accessible Components ([@base-ui/react](https://base-ui.com/), [shadcn/ui](https://ui.shadcn.com))
- **MDX Engine**: `@next/mdx`, `@mdx-js/loader`, `@mdx-js/react`, `rehype-pretty-code`, `shiki`
- **Icons**: [Lucide React](https://lucide.dev)
- **Theme Support**: `next-themes`

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have **Node.js 18+** installed on your system.

### 2. Installation
Clone the repository and install dependencies:

```bash
npm install
```

### 3. Development Server
Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the course website.

---

## 🧪 Build & Verification

To verify code quality, type-safety, and production build integrity:

```bash
# 1. Type check without emitting files
./node_modules/.bin/tsc --noEmit

# 2. Run ESLint code quality checks
npm run lint

# 3. Generate production build
npm run build
```

---

## ☁️ Deploying on Vercel

This repository is optimized for **zero-config deployment on Vercel**:

1. Push your repository to GitHub or GitLab.
2. Import the repository into your [Vercel Dashboard](https://vercel.com/new).
3. Vercel will automatically detect **Next.js** and set the framework preset, build command (`npm run build`), and output directory.
4. Click **Deploy**.

No environment variables or build configurations are required!

---

## 📝 How to Add a Lecture or Lab

The site uses a data-driven structure combined with MDX files for rich content.

### Adding a New Lecture

1. **Create the MDX File**:
   Add a new `.mdx` file in `src/content/lectures/`. For example, `src/content/lectures/week-2-search.mdx`:

   ```mdx
   export const metadata = {
     title: "Uninformed & Informed Search",
     week: 2,
     date: "Week 2",
     description: "State-space search, BFS, DFS, A* search, and heuristic design."
   };

   # Uninformed & Informed Search

   <Tip>
     Remember that a heuristic $h(n)$ is admissible if it never overestimates the cost to reach the goal.
   </Tip>

   ## 1. Problem Formulation
   A search problem consists of a state space, initial state, goal test, and path cost.
   ```

   > **Note on Metadata**: Use JavaScript `export const metadata = { ... }` syntax inside MDX files to avoid rendering visible DOM frontmatter paragraphs.

2. **Verify Navigation**:
   The lecture loader (`src/lib/lectures.ts`) automatically discovers all MDX files in `src/content/lectures/` and extracts their exported `metadata`. It will automatically appear on `/lectures` and `/lectures/week-2-search`.

---

### Adding a New Lab

1. **Update Data Module**:
   Add the lab entry to `src/data/labs.ts`:

   ```typescript
   {
     slug: "week-2-search-and-planning",
     title: "Search Algorithms & Pacman Agents",
     week: 2,
     category: "Foundations",
     description: "Implement BFS, DFS, Uniform Cost Search, and A* search in Python.",
     hasMdx: true
   }
   ```

2. **Create the MDX Content File** (if `hasMdx: true`):
   Create `src/content/labs/week-2-search-and-planning.mdx`:

   ```mdx
   # Lab 2: Search Algorithms & Pacman Agents

   In this lab, you will implement classical search algorithms in Python.

   <Warning>
     Ensure all your heuristic functions are admissible and consistent!
   </Warning>

   ## Exercise 1: Breadth-First Search
   Implement `breadthFirstSearch(problem)` in `search.py`.
   ```

3. **Verify Lab Detail Route**:
   The lab will automatically be accessible at `/labs/week-2-search-and-planning`.

---

## 🔒 Environment Variables & Secrets

**No environment variables or secrets are needed.** The site is fully self-contained and static-site generation (SSG) ready.

---

## 📄 License

Created for CS 101: Introduction to Artificial Intelligence. Open for educational use.
