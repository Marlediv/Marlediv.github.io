import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { PageContainer } from "@/components/layout/page-container";
import { ContactForm } from "@/components/contact/contact-form";
import { CopyEmailButton } from "@/components/contact/copy-email-button";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Nimm Kontakt auf – für Projekte, offene Positionen oder technische Fragen rund um Data Engineering.",
};

export default function KontaktPage() {
  return (
    <PageContainer narrow className="py-20">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-blue">Kontakt</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-foreground sm:text-4xl">
        Lassen Sie uns sprechen
      </h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
        Ob konkretes Projekt, offene Stelle oder eine technische Frage zu Datenplattformen und Automatisierung –
        schreiben Sie mir gerne über das Formular oder direkt per E-Mail.
      </p>

      <div className="mt-6 flex flex-wrap gap-6 text-sm text-muted-foreground">
        <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 hover:text-foreground">
          <Mail size={15} /> {siteConfig.email}
        </a>
        <CopyEmailButton email={siteConfig.email} />
        <span className="inline-flex items-center gap-2">
          <MapPin size={15} /> {siteConfig.location}
        </span>
      </div>

      <div className="mt-12">
        <ContactForm />
      </div>
    </PageContainer>
  );
}
