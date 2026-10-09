import type { MDXComponents } from "mdx/types";
import { Callout, Tip, Note, Warning, InfoCallout } from "@/components/course/callout";
import { cn } from "@/lib/utils";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ className, ...props }) => (
      <h1
        className={cn("text-3xl font-bold tracking-tight text-foreground mt-8 mb-4 border-b pb-2", className)}
        {...props}
      />
    ),
    h2: ({ className, ...props }) => (
      <h2
        className={cn("text-2xl font-semibold tracking-tight text-foreground mt-8 mb-3 border-b pb-1.5", className)}
        {...props}
      />
    ),
    h3: ({ className, ...props }) => (
      <h3
        className={cn("text-xl font-semibold tracking-tight text-foreground mt-6 mb-2", className)}
        {...props}
      />
    ),
    h4: ({ className, ...props }) => (
      <h4
        className={cn("text-lg font-semibold tracking-tight text-foreground mt-4 mb-2", className)}
        {...props}
      />
    ),
    p: ({ className, ...props }) => (
      <p className={cn("leading-7 text-foreground/90 my-4", className)} {...props} />
    ),
    ul: ({ className, ...props }) => (
      <ul className={cn("my-4 ml-6 list-disc space-y-1.5 text-foreground/90", className)} {...props} />
    ),
    ol: ({ className, ...props }) => (
      <ol className={cn("my-4 ml-6 list-decimal space-y-1.5 text-foreground/90", className)} {...props} />
    ),
    li: ({ className, ...props }) => (
      <li className={cn("leading-relaxed", className)} {...props} />
    ),
    blockquote: ({ className, ...props }) => (
      <blockquote
        className={cn("my-4 border-l-4 border-primary/50 pl-4 italic text-muted-foreground", className)}
        {...props}
      />
    ),
    hr: ({ className, ...props }) => (
      <hr className={cn("my-8 border-border", className)} {...props} />
    ),
    table: ({ className, ...props }) => (
      <div className="my-6 w-full overflow-x-auto rounded-lg border border-border">
        <table className={cn("w-full text-sm text-left text-foreground", className)} {...props} />
      </div>
    ),
    thead: ({ className, ...props }) => (
      <thead className={cn("bg-muted/60 border-b border-border text-foreground font-semibold", className)} {...props} />
    ),
    tbody: ({ className, ...props }) => (
      <tbody className={cn("divide-y divide-border", className)} {...props} />
    ),
    tr: ({ className, ...props }) => (
      <tr className={cn("hover:bg-muted/30 transition-colors", className)} {...props} />
    ),
    th: ({ className, ...props }) => (
      <th className={cn("px-4 py-3 font-semibold border-r border-border last:border-r-0", className)} {...props} />
    ),
    td: ({ className, ...props }) => (
      <td className={cn("px-4 py-3 border-r border-border last:border-r-0", className)} {...props} />
    ),
    pre: ({ className, ...props }) => (
      <pre
        className={cn("my-6 overflow-x-auto rounded-lg border border-border bg-slate-950 p-4 font-mono text-sm leading-relaxed text-slate-50 dark:bg-slate-900 shadow-sm", className)}
        {...props}
      />
    ),
    code: ({ className, children, ...props }) => {
      // If code is nested inside pre (rehype-pretty-code or plain block code), render without extra background
      const isInline = typeof children === "string" && !className?.includes("language-");
      if (isInline) {
        return (
          <code
            className={cn("rounded bg-muted px-1.5 py-0.5 font-mono text-xs font-semibold text-foreground border border-border/50", className)}
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
        className={cn("font-medium text-primary underline underline-offset-4 hover:text-primary/80", className)}
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
