import type { MDXComponents } from "mdx/types";
import { Callout, Tip, Note, Warning, InfoCallout } from "@/components/course/callout";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ className, ...props }) => (
      <h1
        className="text-3xl font-bold tracking-tight text-foreground mt-8 mb-4 border-b pb-2"
        {...props}
      />
    ),
    h2: ({ className, ...props }) => (
      <h2
        className="text-2xl font-semibold tracking-tight text-foreground mt-8 mb-3 border-b pb-1.5"
        {...props}
      />
    ),
    h3: ({ className, ...props }) => (
      <h3
        className="text-xl font-semibold tracking-tight text-foreground mt-6 mb-2"
        {...props}
      />
    ),
    h4: ({ className, ...props }) => (
      <h4
        className="text-lg font-semibold tracking-tight text-foreground mt-4 mb-2"
        {...props}
      />
    ),
    p: ({ className, ...props }) => (
      <p className="leading-7 text-foreground/90 my-4" {...props} />
    ),
    ul: ({ className, ...props }) => (
      <ul className="my-4 ml-6 list-disc space-y-1.5 text-foreground/90" {...props} />
    ),
    ol: ({ className, ...props }) => (
      <ol className="my-4 ml-6 list-decimal space-y-1.5 text-foreground/90" {...props} />
    ),
    li: ({ className, ...props }) => (
      <li className="leading-relaxed" {...props} />
    ),
    blockquote: ({ className, ...props }) => (
      <blockquote
        className="my-4 border-l-4 border-primary/50 pl-4 italic text-muted-foreground"
        {...props}
      />
    ),
    hr: ({ className, ...props }) => (
      <hr className="my-8 border-border" {...props} />
    ),
    table: ({ className, ...props }) => (
      <div className="my-6 w-full overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm text-left text-foreground" {...props} />
      </div>
    ),
    thead: ({ className, ...props }) => (
      <thead className="bg-muted/60 border-b border-border text-foreground font-semibold" {...props} />
    ),
    tbody: ({ className, ...props }) => (
      <tbody className="divide-y divide-border" {...props} />
    ),
    tr: ({ className, ...props }) => (
      <tr className="hover:bg-muted/30 transition-colors" {...props} />
    ),
    th: ({ className, ...props }) => (
      <th className="px-4 py-3 font-semibold border-r border-border last:border-r-0" {...props} />
    ),
    td: ({ className, ...props }) => (
      <td className="px-4 py-3 border-r border-border last:border-r-0" {...props} />
    ),
    pre: ({ className, ...props }) => (
      <pre
        className="my-6 overflow-x-auto rounded-lg border border-border bg-slate-950 p-4 font-mono text-sm leading-relaxed text-slate-50 dark:bg-slate-900 shadow-sm"
        {...props}
      />
    ),
    code: ({ className, children, ...props }) => {
      // If code is nested inside pre (rehype-pretty-code or plain block code), render without extra background
      const isInline = typeof children === "string" && !className?.includes("language-");
      if (isInline) {
        return (
          <code
            className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs font-semibold text-foreground border border-border/50"
            {...props}
          >
            {children}
          </code>
        );
      }
      return <code className={className} {...props}>{children}</code>;
    },
    a: ({ className, ...props }) => (
      <a
        className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
        {...props}
      />
    ),
    Callout,
    Tip,
    Note,
    Warning,
    InfoCallout,
    ...components,
  };
}
