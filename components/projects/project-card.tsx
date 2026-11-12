import Link from "next/link";
import { ExternalLink, FileText, Lock } from "lucide-react";
import type { Project } from "@/content/projects";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GithubIcon } from "@/components/ui/icons";
import { ProjectCover } from "./project-cover";
import { projectTypeLabel, statusLabel } from "./project-meta";

export function ProjectCard({ project, headingLevel: Heading = "h3" }: { project: Project; headingLevel?: "h2" | "h3" }) {
  const isConfidential = project.evidence.some((item) => item.type === "confidential");
  const hasLinks = Boolean(project.githubUrl || project.liveUrl || project.documentationUrl);

  return (
    <Card className="group/project-card flex flex-col overflow-hidden">
      {/* Dekoratives Cover: der Titel darunter ist der eigentliche Link, daher für Tastatur und Screenreader ausgeblendet. */}
      <Link href={`/projekte/${project.slug}`} tabIndex={-1} aria-hidden="true" className="block aspect-[5/3] overflow-hidden">
        <ProjectCover variant={project.coverVariant} className="h-full w-full" />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Badge variant="accent">{projectTypeLabel[project.projectType]}</Badge>
          <Badge>{statusLabel[project.status]}</Badge>
          <span className="ml-auto font-mono text-xs text-muted-foreground">{project.year}</span>
        </div>

        <Heading className="font-display text-lg font-semibold text-foreground">
          <Link
            href={`/projekte/${project.slug}`}
            className="transition-colors duration-300 group-hover/project-card:text-accent-blue"
          >
            {project.title}
          </Link>
        </Heading>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{project.shortDescription}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-5 flex min-h-[2.75rem] flex-wrap items-center gap-4 border-t border-border pt-4 text-sm text-muted-foreground">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground">
              <GithubIcon width={14} height={14} aria-hidden="true" /> Code
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground">
              <ExternalLink size={14} aria-hidden="true" /> Live-Demo
            </a>
          )}
          {project.documentationUrl && (
            <a href={project.documentationUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground">
              <FileText size={14} aria-hidden="true" /> Doku
            </a>
          )}
          {!hasLinks && (
            <span className="inline-flex items-center gap-1.5">
              {isConfidential ? (
                <>
                  <Lock size={14} aria-hidden="true" /> Anonymisierte Fallstudie
                </>
              ) : (
                <>
                  <FileText size={14} aria-hidden="true" /> Fallstudie
                </>
              )}
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}
