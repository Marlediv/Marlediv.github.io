import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent" | "outline";
};

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium font-mono tracking-tight",
        variant === "default" && "bg-surface text-muted-foreground border border-border",
        variant === "accent" && "bg-accent-violet-soft text-accent-violet border border-transparent",
        variant === "outline" && "border border-border-strong text-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
