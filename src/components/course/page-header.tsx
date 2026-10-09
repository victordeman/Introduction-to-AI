import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export function PageHeader({ title, subtitle, children }: PageHeaderProps) {
  return (
    <div className="space-y-2 pb-6 border-b mb-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-3xl">
          {subtitle}
        </p>
      )}
      {children && <div className="pt-2">{children}</div>}
    </div>
  );
}
