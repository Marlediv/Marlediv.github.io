import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";
import { PageContainer } from "@/components/layout/page-container";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum gemäß § 5 TMG.",
  robots: { index: true, follow: false },
};

export default function ImpressumPage() {
  return (
    <PageContainer narrow className="py-20">
      <h1 className="font-display text-3xl font-semibold text-foreground">Impressum</h1>

      <div className="mt-6 rounded-[var(--radius-md)] border border-accent-violet/30 bg-accent-violet-soft p-4 text-sm text-foreground">
        <strong>Hinweis (vor Veröffentlichung entfernen):</strong> Dieser Text ist ein Muster und ersetzt keine
        Rechtsberatung. Bitte vor dem Livegang durch eine fachkundige Person prüfen und mit den tatsächlichen
        Angaben (Anschrift, ggf. Handelsregister, Aufsichtsbehörde etc.) vervollständigen.
      </div>

      <div className="prose-article mt-10">
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          {siteConfig.fullName}
          <br />
          [Straße und Hausnummer einfügen]
          <br />
          [PLZ und Ort einfügen]
          <br />
          Deutschland
        </p>

        <h2>Kontakt</h2>
        <p>
          E-Mail: {siteConfig.email}
          <br />
          [Telefonnummer optional einfügen]
        </p>

        <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p>{siteConfig.fullName}, Anschrift wie oben.</p>

        <h2>Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
          allgemeinen Gesetzen verantwortlich. Eine Verpflichtung zur Überwachung übermittelter oder
          gespeicherter fremder Informationen besteht nicht.
        </p>

        <h2>Haftung für Links</h2>
        <p>
          Diese Website kann Links zu externen Websites Dritter enthalten, auf deren Inhalte kein Einfluss
          besteht. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.
        </p>

        <h2>Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf dieser Website unterliegen dem
          deutschen Urheberrecht.
        </p>
      </div>
    </PageContainer>
  );
}
