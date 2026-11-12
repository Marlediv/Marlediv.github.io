import { PageContainer } from "@/components/layout/page-container";
import { pageMetadata } from "@/lib/metadata";
import { ProjectFilter } from "@/components/projects/project-filter";

export const metadata = pageMetadata({
  title: "Projekte",
  description: "Berufliche Fallstudien und eigene Referenzprojekte aus Data Engineering, Cloud-Datenplattformen, Analytics und AI.",
  path: "/projekte",
});

export default function ProjektePage() {
  return (
    <PageContainer className="py-20">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-blue">Projekte</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-foreground sm:text-4xl">
        Ein Blick auf meine Arbeit
      </h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
        Berufliche Fallstudien, Portfolio- und Lernprojekte. Bei jedem Projekt ist gekennzeichnet, in welchem
        Rahmen es entstanden ist und welche Nachweise öffentlich einsehbar sind.
      </p>

      <div className="mt-12">
        <ProjectFilter />
      </div>
    </PageContainer>
  );
}
