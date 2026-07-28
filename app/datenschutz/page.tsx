import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";
import { PageContainer } from "@/components/layout/page-container";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.",
  robots: { index: true, follow: false },
};

export default function DatenschutzPage() {
  return (
    <PageContainer narrow className="py-20">
      <h1 className="font-display text-3xl font-semibold text-foreground">Datenschutzerklärung</h1>

      <div className="mt-6 rounded-[var(--radius-md)] border border-accent-violet/30 bg-accent-violet-soft p-4 text-sm text-foreground">
        <strong>Hinweis (vor Veröffentlichung entfernen):</strong> Dieser Text ist ein Muster, keine
        Rechtsberatung, und muss vor dem Livegang an die tatsächlich eingesetzten Dienste (z. B. Hosting,
        E-Mail-Versand über Resend, ggf. Analyse-Tools) sowie an die geltende Rechtslage angepasst werden.
      </div>

      <div className="prose-article mt-10">
        <h2>1. Verantwortlicher</h2>
        <p>
          {siteConfig.fullName}, {siteConfig.email}. Siehe auch die Angaben im{" "}
          <a href="/impressum">Impressum</a>.
        </p>

        <h2>2. Verarbeitung beim Besuch der Website</h2>
        <p>
          Beim Aufruf dieser Website verarbeitet der Hosting-Anbieter automatisch technische Informationen
          (z. B. IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite), die für die technische
          Bereitstellung und Sicherheit der Website erforderlich sind. Rechtsgrundlage ist Art. 6 Abs. 1 lit.
          f DSGVO (berechtigtes Interesse an einem sicheren, funktionsfähigen Betrieb).
        </p>

        <h2>3. Kontaktformular</h2>
        <p>
          Wenn Sie das Kontaktformular nutzen, werden die von Ihnen angegebenen Daten (Name, E-Mail-Adresse,
          ggf. Unternehmen, Betreff, Nachricht) verarbeitet, um Ihre Anfrage zu beantworten. Rechtsgrundlage
          ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Anfrage) bzw. lit. f DSGVO (berechtigtes Interesse
          an der Kommunikation). Der Versand erfolgt technisch über einen E-Mail-Dienstleister (Platzhalter:
          Resend) – bitte hier die tatsächlich genutzte Konfiguration und ggf. einen Auftragsverarbeitungsvertrag
          ergänzen.
        </p>

        <h2>4. Keine Weitergabe an Dritte ohne Rechtsgrundlage</h2>
        <p>
          Eine Übermittlung Ihrer Daten an Dritte erfolgt nur, soweit dies gesetzlich erlaubt ist oder Sie
          eingewilligt haben.
        </p>

        <h2>5. Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
          Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten. Wenden
          Sie sich hierfür an die oben genannte Kontaktadresse.
        </p>

        <h2>6. Cookies</h2>
        <p>
          Diese Website setzt aktuell keine zustimmungspflichtigen Tracking- oder Analyse-Cookies ein. Sollte
          sich dies ändern, wird an dieser Stelle eine Einwilligung über einen Cookie-Hinweis eingeholt (siehe
          vorbereitete Consent-Komponente im Quellcode).
        </p>
      </div>
    </PageContainer>
  );
}
