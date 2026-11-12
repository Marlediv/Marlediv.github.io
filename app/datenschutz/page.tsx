import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { PageContainer } from "@/components/layout/page-container";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Datenschutzerklärung",
  description: "Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.",
  path: "/datenschutz",
  index: false,
});

export default function DatenschutzPage() {
  return (
    <PageContainer narrow className="py-20">
      <h1 className="font-display text-3xl font-semibold text-foreground">Datenschutzerklärung</h1>

      <div className="prose-article mt-10">
        <h2>1. Verantwortlicher</h2>
        <p>
          {siteConfig.fullName}, <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. Die
          vollständigen Angaben finden Sie im <Link href="/impressum">Impressum</Link>.
        </p>

        <h2>2. Hosting über GitHub Pages</h2>
        <p>
          Diese Website wird als statische Seite über GitHub Pages bereitgestellt, einen Dienst der GitHub
          Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA. Beim Aufruf der Website
          verarbeitet GitHub technisch notwendige Zugriffsdaten, insbesondere die IP-Adresse, Datum und
          Uhrzeit des Zugriffs sowie die aufgerufene Seite. Dabei kann eine Übermittlung in die USA
          stattfinden. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; das berechtigte Interesse liegt in der
          sicheren und zuverlässigen Bereitstellung der Website. Auf Art und Dauer der Speicherung durch
          GitHub habe ich keinen Einfluss. Weitere Informationen enthält die{" "}
          <a
            href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement"
            target="_blank"
            rel="noopener noreferrer"
          >
            Datenschutzerklärung von GitHub
          </a>
          .
        </p>

        <h2>3. Cookies, lokale Speicherung und eingebundene Dienste</h2>
        <p>
          Diese Website setzt keine Cookies und verwendet keine Analyse- oder Tracking-Dienste. Schriften
          werden von dieser Website selbst ausgeliefert; es werden keine Inhalte von Drittanbietern
          nachgeladen. Wenn Sie zwischen hellem und dunklem Design wechseln, wird ausschließlich diese
          Einstellung im lokalen Speicher Ihres Browsers abgelegt. Sie wird nicht übertragen und kann über die
          Browsereinstellungen jederzeit gelöscht werden.
        </p>

        <h2>4. Kontaktformular und E-Mail</h2>
        <p>
          Das Kontaktformular überträgt keine Daten an einen Server. Es öffnet Ihr E-Mail-Programm mit einer
          vorausgefüllten Nachricht; Ihre Eingaben (Name, E-Mail-Adresse, ggf. Unternehmen, Betreff,
          Nachricht) werden bis dahin nur in Ihrem Browser verarbeitet. Wenn Sie die E-Mail absenden,
          verarbeite ich die darin enthaltenen Angaben, um Ihre Anfrage zu beantworten. Rechtsgrundlage ist
          Art. 6 Abs. 1 lit. b DSGVO, soweit die Anfrage auf einen Vertrag gerichtet ist, im Übrigen Art. 6
          Abs. 1 lit. f DSGVO. Die Nachrichten werden gelöscht, sobald sie für die Bearbeitung nicht mehr
          erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </p>

        <h2>5. Externe Links</h2>
        <p>
          Diese Website verlinkt auf externe Angebote, unter anderem GitHub und LinkedIn. Daten werden an
          diese Anbieter erst übertragen, wenn Sie einen solchen Link anklicken. Für die dortige
          Datenverarbeitung ist der jeweilige Anbieter verantwortlich.
        </p>

        <h2>6. Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und
          Datenübertragbarkeit sowie das Recht, einer Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f
          DSGVO zu widersprechen. Wenden Sie sich dazu an die oben genannte Kontaktadresse. Außerdem können
          Sie sich bei einer Datenschutzaufsichtsbehörde beschweren.
        </p>
      </div>
    </PageContainer>
  );
}
