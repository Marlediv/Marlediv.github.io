import { cn } from "@/lib/utils";

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-lg)] border border-border bg-surface/60 backdrop-blur-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}
