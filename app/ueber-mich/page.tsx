import { FileDown, Compass, ShieldCheck, Route, Wrench } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Über mich",
  description:
    "Werdegang und Arbeitsweise: von Chemieproduktion und Logistik über die Umschulung zum Fachinformatiker für Daten- und Prozessanalyse ins Data Engineering.",
  path: "/ueber-mich",
});

const values = [
  {
    icon: Compass,
    title: "Erst das Problem, dann das Werkzeug",
    text: "Technologie dient dem fachlichen Ziel – nicht umgekehrt. Ich wähle Werkzeuge nach Anforderung, nicht nach Trend.",
  },
  {
    icon: ShieldCheck,
    title: "Datenqualität von Anfang an",
    text: "Prüfregeln gehören in den Prozess, nicht in einen nachgelagerten Kontrollschritt.",
  },
  {
    icon: Route,
    title: "Nachvollziehbarkeit",
    text: "Mappings, Transformationsregeln und Abweichungen werden dokumentiert, damit Ergebnisse überprüfbar bleiben.",
  },
  {
    icon: Wrench,
    title: "Reproduzierbare Abläufe",
    text: "Ein Lauf, der sich nicht wiederholen lässt, ist ein Zufallstreffer. Ich baue Prozesse so, dass sie erneut ausführbar sind.",
  },
];

export default function UeberMichPage() {
  return (
    <PageContainer narrow className="py-20">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-blue">Über mich</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-foreground sm:text-4xl">
        Von der Produktionsanlage zur Datenpipeline
      </h1>

      <div className="prose-article mt-8">
        <p>
          Ich bin {siteConfig.fullName}, {siteConfig.title} aus dem {siteConfig.region}. Mein Weg in die
          Datenwelt führte nicht über ein Informatikstudium, sondern über die Praxis: zuerst als Chemikant in
          der chemischen Produktion, später als Teamleiter in der E-Commerce-Logistik. Beides sind Umgebungen,
          in denen Prozesse nur funktionieren, wenn Parameter stimmen, Buchungen korrekt sind und
          Dokumentation verlässlich ist.
        </p>
        <p>
          Mit der Umschulung zum Fachinformatiker für Daten- und Prozessanalyse (IHK) habe ich diesen
          Hintergrund gezielt in Richtung Data Engineering weiterentwickelt. Ich bin kein seit Jahren
          etablierter Spezialist und behaupte das auch nicht. Was ich mitbringe, ist ein praktisches Gespür
          dafür, wo Prozesse brechen, und der Anspruch, Daten so aufzubereiten, dass man sich auf sie
          verlassen kann.
        </p>

        <h2>Arbeitsweise</h2>
        <p>
          Ich beginne mit der Frage, welches Problem eine Datenlösung tatsächlich lösen soll. Anforderungen
          übersetze ich in klare Mappings und Datenmodelle, Ergebnisse validiere ich gegen die Quelle, und
          Entscheidungen dokumentiere ich so, dass sie auch für andere nachvollziehbar bleiben. In neue
          Technologien arbeite ich mich eigenständig ein, am liebsten an einem konkreten Projekt.
        </p>

        <h2>Aktueller Fokus</h2>
        <p>
          Beruflich arbeite ich derzeit an einer ERP-Stammdatenmigration: Analyse und Mapping der Quelldaten,
          SQL-gestützte Validierung sowie reproduzierbare, Python-gestützte Generator- und Preflight-Prozesse.
          Parallel vertiefe ich moderne Datenplattformen wie Databricks und Snowflake in eigenen
          Portfolio-Projekten, ebenso den kontrollierten Einsatz von KI-Agenten im Engineering-Alltag.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {values.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-[var(--radius-lg)] border border-border p-5">
            <Icon size={18} className="text-accent-blue" aria-hidden="true" />
            <p className="mt-3 font-display text-sm font-semibold text-foreground">{title}</p>
            <p className="mt-1.5 text-sm text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <Button href={siteConfig.resumeUrl} variant="secondary">
          <FileDown size={16} aria-hidden="true" /> Lebenslauf herunterladen (PDF)
        </Button>
      </div>

      <div className="mt-20">
        <h2 className="font-display text-xl font-semibold text-foreground">Werdegang</h2>
        <ExperienceTimeline detailed className="mt-8" />
      </div>

      <div className="mt-16">
        <CertificationsSection />
      </div>
    </PageContainer>
  );
}
