import { experience } from "@/content/experience";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

/**
 * Gemeinsame Timeline für Startseite (kompakt) und Über-mich-Seite (`detailed`,
 * mit Aufgaben und Technologien).
 */
export function ExperienceTimeline({
  detailed = false,
  headingLevel: Heading = "h3",
  className,
}: {
  detailed?: boolean;
  headingLevel?: "h3" | "h4";
  className?: string;
}) {
  return (
    <ol className={cn("space-y-10 border-l border-border pl-6", className)}>
      {experience.map((item) => (
        <li key={`${item.company}-${item.startDate}`} className="relative">
          <span
            className={cn(
              "absolute -left-[30px] top-1.5 h-2.5 w-2.5 rounded-full",
              item.current ? "bg-accent-blue shadow-[0_0_10px_var(--accent-blue)]" : "bg-border-strong",
            )}
            aria-hidden="true"
          />
          <p className="font-mono text-xs text-muted-foreground">
            {item.startDate} – {item.current ? "heute" : item.endDate}
          </p>
          <Heading className="mt-1 font-display text-base font-semibold text-foreground">{item.position}</Heading>
          <p className="text-sm text-muted-foreground">{item.company}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
          {detailed && (
            <>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {item.responsibilities.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {item.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </>
          )}
        </li>
      ))}
    </ol>
  );
}
