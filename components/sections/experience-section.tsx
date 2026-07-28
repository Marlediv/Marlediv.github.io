import { experience } from "@/content/experience";
import { PageContainer } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";

export function ExperienceSection() {
  return (
    <section className="border-b border-border py-20">
      <PageContainer narrow>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-blue">Berufserfahrung</p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-3xl">
          Werdegang im Überblick
        </h2>

        <ol className="mt-10 space-y-10 border-l border-border pl-6">
          {experience.map((item) => (
            <li key={`${item.company}-${item.startDate}`} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent-blue" />
              <p className="font-mono text-xs text-muted-foreground">
                {item.startDate} – {item.current ? "heute" : item.endDate}
              </p>
              <h3 className="mt-1 font-display text-base font-semibold text-foreground">
                {item.position} · {item.company}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
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
            </li>
          ))}
        </ol>
      </PageContainer>
    </section>
  );
}
