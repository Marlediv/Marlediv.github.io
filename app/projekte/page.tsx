import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/page-container";
import { ProjectFilter } from "@/components/projects/project-filter";

export const metadata: Metadata = {
  title: "Projekte",
  description: "Ausgewählte Projekte aus Data Engineering, Cloud, Analytics, AI und Automation.",
};

export default function ProjektePage() {
  return (
    <PageContainer className="py-20">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-blue">Projekte</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-foreground sm:text-4xl">
        Ein Blick auf meine Arbeit
      </h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
        Eine Auswahl an Projekten, die zeigen, wie ich Anforderungen in robuste, produktionsreife
        Datenlösungen übersetze.
      </p>

      <div className="mt-12">
        <ProjectFilter />
      </div>
    </PageContainer>
  );
}
