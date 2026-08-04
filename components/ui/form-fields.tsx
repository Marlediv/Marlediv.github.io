import * as React from "react";
import { cn } from "@/lib/utils";

export function Label({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn("mb-1.5 block text-sm font-medium text-foreground", className)}
      {...props}
    />
  );
}

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-11 w-full rounded-[var(--radius-sm)] border border-border bg-background-elevated/70 px-3.5 text-sm text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.035)] backdrop-blur-md placeholder:text-muted-foreground transition-[border-color,box-shadow,background-color] focus-visible:border-accent-blue focus-visible:bg-surface/60 focus-visible:shadow-[0_0_22px_rgba(32,220,229,0.1)] focus-visible:outline-none",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "min-h-[140px] w-full resize-y rounded-[var(--radius-sm)] border border-border bg-background-elevated/70 px-3.5 py-3 text-sm text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.035)] backdrop-blur-md placeholder:text-muted-foreground transition-[border-color,box-shadow,background-color] focus-visible:border-accent-blue focus-visible:bg-surface/60 focus-visible:shadow-[0_0_22px_rgba(32,220,229,0.1)] focus-visible:outline-none",
        className,
      )}
      {...props}
    />
  ),
);
Textarea.displayName = "Textarea";

export function FieldError({ children }: { children?: string }) {
  if (!children) return null;
  return (
    <p role="alert" className="mt-1.5 text-xs text-danger">
      {children}
    </p>
  );
}
