import type { Metadata } from "next";
import { ArrowLeft, SearchX } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <PageContainer narrow className="flex flex-col items-center py-28 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-surface text-accent-blue">
        <SearchX size={22} aria-hidden="true" />
      </div>
      <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-accent-blue">Fehler 404</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-foreground sm:text-4xl">
        Diese Seite gibt es nicht.
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
        Der Link könnte veraltet sein oder die Seite wurde verschoben. Zurück zur Startseite oder weiter
        zu den Projekten.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/">
          <ArrowLeft size={16} aria-hidden="true" /> Zur Startseite
        </Button>
        <Button href="/projekte" variant="secondary">
          Projekte ansehen
        </Button>
      </div>
    </PageContainer>
  );
}
