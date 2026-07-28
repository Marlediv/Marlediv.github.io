import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";

export function ContactCta() {
  return (
    <section className="py-24">
      <PageContainer narrow className="text-center">
        {siteConfig.availability && (
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            {siteConfig.availabilityText}
          </p>
        )}
        <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
          Lassen Sie uns über Ihre Daten sprechen.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
          Ob neues Projekt, offene Position oder eine konkrete technische Frage – ich freue mich über Ihre
          Nachricht.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/kontakt" size="lg">
            Kontakt aufnehmen <ArrowRight size={16} />
          </Button>
        </div>
      </PageContainer>
    </section>
  );
}
