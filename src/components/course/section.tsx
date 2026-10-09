import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export function Section({
  title,
  description,
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <section className={cn("py-6 space-y-4", className)} {...props}>
      {(title || description) && (
        <div className="space-y-1">
          {title && (
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
