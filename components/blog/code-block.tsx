import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function CodeBlock({ className, ...props }: HTMLAttributes<HTMLPreElement>) {
  return (
    <pre
      className={cn(
        "my-6 overflow-x-auto rounded-[var(--radius-md)] border border-border bg-background-elevated p-4 text-sm leading-relaxed [&_code]:font-mono",
        className,
      )}
      {...props}
    />
  );
}

export function InlineCode({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <code
      className={cn(
        "rounded-[4px] border border-border bg-background-elevated px-1.5 py-0.5 font-mono text-[0.85em]",
        className,
      )}
      {...props}
    />
  );
}
