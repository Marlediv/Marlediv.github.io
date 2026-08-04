import Link from "next/link";
import { ExternalLink, FileText } from "lucide-react";
import type { Project } from "@/content/projects";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GithubIcon } from "@/components/ui/icons";
import { ProjectCover } from "./project-cover";

const statusLabel: Record<Project["status"], string> = {
  active: "Aktiv",
  completed: "Abgeschlossen",
  "in-development": "In Entwicklung",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group/project-card flex flex-col overflow-hidden hover:border-border-strong">
      <Link href={`/projekte/${project.slug}`} className="block aspect-[5/3] overflow-hidden">
        <ProjectCover
          variant={project.coverVariant}
          className="h-full w-full"
        />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-2">
          <Badge variant="accent">{project.category}</Badge>
          <Badge>{statusLabel[project.status]}</Badge>
          <span className="ml-auto font-mono text-xs text-muted-foreground">{project.year}</span>
        </div>

        <Link href={`/projekte/${project.slug}`}>
          <h3 className="font-display text-lg font-semibold text-foreground transition-colors duration-500 group-hover/project-card:text-accent-blue">
            {project.title}
          </h3>
        </Link>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-5 flex origin-bottom-left items-center gap-4 border-t border-border pt-4 text-sm text-muted-foreground transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/project-card:scale-[0.9524] motion-reduce:transform-none motion-reduce:transition-none">
          {project.githubUrl && (
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground">
              <GithubIcon width={14} height={14} /> Code
            </Link>
          )}
          {project.liveUrl && (
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground">
              <ExternalLink size={14} /> Live-Demo
            </Link>
          )}
          {project.documentationUrl && (
            <Link href={project.documentationUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground">
              <FileText size={14} /> Doku
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
}