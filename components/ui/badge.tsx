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
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium font-mono tracking-tight backdrop-blur-sm",
        variant === "default" && "border border-border bg-surface/55 text-muted-foreground",
        variant === "accent" && "border border-accent-blue/25 bg-accent-violet-soft text-accent-blue shadow-[0_0_14px_rgba(32,220,229,0.08)]",
        variant === "outline" && "border border-border-strong bg-background/25 text-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
