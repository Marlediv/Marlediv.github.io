import { cn } from "@/lib/utils";

export function PageContainer({
  children,
  className,
  narrow = false,
}: {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}) {
  return (
    <div className={cn("mx-auto px-6", narrow ? "max-w-3xl" : "max-w-6xl", className)}>
      {children}
    </div>
  );
}
