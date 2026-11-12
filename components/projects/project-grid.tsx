import type { Project } from "@/content/projects";
import { ProjectCard } from "./project-card";

export function ProjectGrid({ projects, headingLevel }: { projects: Project[]; headingLevel?: "h2" | "h3" }) {
  if (projects.length === 0) {
    return (
      <div className="rounded-[var(--radius-lg)] border border-dashed border-border py-16 text-center text-sm text-muted-foreground">
        Keine Projekte für diesen Filter gefunden.
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} headingLevel={headingLevel} />
      ))}
    </div>
  );
}
