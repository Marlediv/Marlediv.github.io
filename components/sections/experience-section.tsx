import { ArrowRight } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";
import { ExperienceTimeline } from "./experience-timeline";

export function ExperienceSection() {
  return (
    <section className="border-b border-border py-20">
      <PageContainer narrow>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-blue">Werdegang</p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-3xl">
          Stationen im Überblick
        </h2>

        <ExperienceTimeline className="mt-10" />

        <Button href="/ueber-mich" variant="secondary" className="mt-10">
          Aufgaben und Technologien im Detail <ArrowRight size={15} aria-hidden="true" />
        </Button>
      </PageContainer>
    </section>
  );
}
