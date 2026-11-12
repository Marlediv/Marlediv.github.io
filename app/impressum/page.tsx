import { siteConfig } from "@/content/site-config";
import { PageContainer } from "@/components/layout/page-container";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Impressum",
  description: "Anbieterkennzeichnung gemäß § 5 DDG.",
  path: "/impressum",
  index: false,
});

export default function ImpressumPage() {
  const { street, postalCode, city } = siteConfig.address;
  const hasAddress = Boolean(street && postalCode && city);

  return (
    <PageContainer narrow className="py-20">
      <h1 className="font-display text-3xl font-semibold text-foreground">Impressum</h1>

      <div className="prose-article mt-10">
        <h2>Angaben gemäß § 5 DDG</h2>
        <p>
          {siteConfig.fullName}
          <br />
          {hasAddress ? (
            <>
              {street}
              <br />
              {postalCode} {city}
              <br />
            </>
          ) : (
            <>
              <em>Die vollständige Anschrift wird in Kürze ergänzt.</em>
              <br />
            </>
          )}
          Deutschland
        </p>

        <h2>Kontakt</h2>
        <p>
          E-Mail: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </p>

        <h2>Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV</h2>
        <p>{siteConfig.fullName}, Anschrift wie oben.</p>

        <h2>Haftung für Inhalte</h2>
        <p>
          Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Für eigene Inhalte bin ich nach den
          allgemeinen Gesetzen verantwortlich. Eine Gewähr für Richtigkeit, Vollständigkeit und Aktualität
          der bereitgestellten Informationen übernehme ich nicht.
        </p>

        <h2>Haftung für Links</h2>
        <p>
          Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss
          habe. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich. Zum
          Zeitpunkt der Verlinkung waren keine Rechtsverstöße erkennbar.
        </p>

        <h2>Urheberrecht</h2>
        <p>
          Die von mir erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht.
          Eine Verwendung außerhalb der Grenzen des Urheberrechts bedarf meiner vorherigen Zustimmung.
        </p>
      </div>
    </PageContainer>
  );
}
