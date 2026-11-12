import { ArrowRight } from "lucide-react";
import { getFeaturedProjects } from "@/content/projects";
import { PageContainer } from "@/components/layout/page-container";
import { ProjectCard } from "@/components/projects/project-card";
import { Button } from "@/components/ui/button";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section className="border-b border-border py-20">
      <PageContainer>
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-blue">Ausgewählte Projekte</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-3xl">
              Berufliche Praxis und eigene Referenzprojekte
            </h2>
          </div>
          <Button href="/projekte" variant="ghost" className="hidden sm:inline-flex">
            Alle Projekte <ArrowRight size={15} />
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <Button href="/projekte" variant="secondary" className="mt-8 w-full sm:hidden">
          Alle Projekte ansehen
        </Button>
      </PageContainer>
    </section>
  );
}
