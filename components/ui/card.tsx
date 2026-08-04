import { cn } from "@/lib/utils";

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "glass-panel relative rounded-[var(--radius-lg)] transition-[border-color,box-shadow,transform] duration-300 before:pointer-events-none before:absolute before:inset-x-8 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-accent-blue/55 before:to-transparent hover:border-border-strong hover:shadow-[var(--glow-soft),var(--glow-accent)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
