import React from "react";
import { Lightbulb, Info, AlertTriangle, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type CalloutType = "tip" | "note" | "warning" | "info" | "success";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const calloutStyles: Record<
  CalloutType,
  {
    container: string;
    icon: React.ElementType;
    iconColor: string;
    defaultTitle: string;
  }
> = {
  tip: {
    container:
      "border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-100",
    icon: Lightbulb,
    iconColor: "text-emerald-600 dark:text-emerald-400",
    defaultTitle: "Tip",
  },
  note: {
    container:
      "border-blue-500/30 bg-blue-500/10 text-blue-900 dark:text-blue-100",
    icon: Info,
    iconColor: "text-blue-600 dark:text-blue-400",
    defaultTitle: "Note",
  },
  warning: {
    container:
      "border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-100",
    icon: AlertTriangle,
    iconColor: "text-amber-600 dark:text-amber-400",
    defaultTitle: "Warning",
  },
  info: {
    container:
      "border-sky-500/30 bg-sky-500/10 text-sky-900 dark:text-sky-100",
    icon: Info,
    iconColor: "text-sky-600 dark:text-sky-400",
    defaultTitle: "Information",
  },
  success: {
    container:
      "border-green-500/30 bg-green-500/10 text-green-900 dark:text-green-100",
    icon: CheckCircle2,
    iconColor: "text-green-600 dark:text-green-400",
    defaultTitle: "Success",
  },
};

export function Callout({
  type = "note",
  title,
  children,
  className,
}: CalloutProps) {
  const style = calloutStyles[type] || calloutStyles.note;
  const Icon = style.icon;
  const displayTitle = title ?? style.defaultTitle;

  return (
    <div
      className={cn(
        "my-6 flex gap-3.5 rounded-lg border p-4 shadow-xs text-sm leading-relaxed",
        style.container,
        className
      )}
    >
      <Icon className={cn("mt-0.5 h-5 w-5 shrink-0", style.iconColor)} />
      <div className="space-y-1 w-full overflow-hidden">
        {displayTitle && (
          <div className="font-semibold text-base leading-snug">
            {displayTitle}
          </div>
        )}
        <div className="text-sm opacity-95 [&>p]:my-1.5 [&>p:first-child]:mt-0 [&>p:last-child]:mb-0 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:my-2">
          {children}
        </div>
      </div>
    </div>
  );
}

export function Tip(props: Omit<CalloutProps, "type">) {
  return <Callout type="tip" {...props} />;
}

export function Note(props: Omit<CalloutProps, "type">) {
  return <Callout type="note" {...props} />;
}

export function Warning(props: Omit<CalloutProps, "type">) {
  return <Callout type="warning" {...props} />;
}

export function InfoCallout(props: Omit<CalloutProps, "type">) {
  return <Callout type="info" {...props} />;
}
