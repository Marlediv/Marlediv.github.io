import Link from "next/link";
import { ExternalLink, FileText, ArrowLeft } from "lucide-react";
import type { Project } from "@/content/projects";
import { PageContainer } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/ui/icons";
import { ProjectCover } from "./project-cover";

const statusLabel: Record<Project["status"], string> = {
  active: "Aktiv",
  completed: "Abgeschlossen",
  "in-development": "In Entwicklung",
};

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <PageContainer narrow className="py-20">
      <Link href="/projekte" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft size={15} /> Alle Projekte
      </Link>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <Badge variant="accent">{project.category}</Badge>
        <Badge>{statusLabel[project.status]}</Badge>
        <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
      </div>

      <h1 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">{project.title}</h1>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">{project.shortDescription}</p>

      <div className="mt-8 aspect-[16/9] overflow-hidden rounded-[var(--radius-lg)] border border-border">
        <ProjectCover variant={project.coverVariant} />
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        {project.githubUrl && (
          <Button href={project.githubUrl} variant="secondary" size="sm">
            <GithubIcon width={15} height={15} /> Quellcode
          </Button>
        )}
        {project.liveUrl && (
          <Button href={project.liveUrl} variant="secondary" size="sm">
            <ExternalLink size={15} /> Live-Demo
          </Button>
        )}
        {project.documentationUrl && (
          <Button href={project.documentationUrl} variant="secondary" size="sm">
            <FileText size={15} /> Dokumentation
          </Button>
        )}
      </div>

      <div className="prose-article mt-12">
        <h2>Beschreibung</h2>
        <p>{project.description}</p>

        <h2>Herausforderung</h2>
        <p>{project.challenge}</p>

        <h2>Lösung</h2>
        <p>{project.solution}</p>

        <h2>Nutzen</h2>
        <ul>
          {project.impact.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>

      <div className="mt-10 border-t border-border pt-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Eingesetzte Technologien
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
