import type { Metadata } from "next";
import { FileDown, Compass, ShieldCheck, Gauge, Wrench } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";
import { experience } from "@/content/experience";
import { Badge } from "@/components/ui/badge";
import { CertificationsSection } from "@/components/sections/certifications-section";

export const metadata: Metadata = {
  title: "Über mich",
  description: "Werdegang, Arbeitsweise und technische Philosophie – vom Prozessverständnis in der Logistik zur Datenarchitektur.",
};

const values = [
  {
    icon: Compass,
    title: "Pragmatische Problemlösung",
    text: "Technologie dient dem Geschäftsziel – nicht umgekehrt. Ich wähle Werkzeuge nach Anforderung, nicht nach Trend.",
  },
  {
    icon: ShieldCheck,
    title: "Data Quality von Anfang an",
    text: "Qualitätsregeln gehören in die Pipeline, nicht in einen nachgelagerten Kontrollschritt.",
  },
  {
    icon: Gauge,
    title: "Observability",
    text: "Was nicht überwacht wird, bricht irgendwann unbemerkt. Monitoring ist fester Bestandteil jeder Lösung.",
  },
  {
    icon: Wrench,
    title: "Wartbarer Code",
    text: "Verständlicher, getesteter Code ist schneller als schnell geschriebener Code – über die Projektlaufzeit hinweg.",
  },
];

export default function UeberMichPage() {
  return (
    <PageContainer narrow className="py-20">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-blue">Über mich</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-foreground sm:text-4xl">
        Vom operativen Prozessverständnis zur Datenarchitektur
      </h1>

      <div className="prose-article mt-8">
        <p>
          Ich bin {siteConfig.name}, {siteConfig.title}, mit einem Werdegang, der nicht im klassischen
          Informatikstudium begann, sondern in der operativen E-Commerce-Logistik. Diese Jahre haben mir eine
          Perspektive mitgegeben, die im reinen Technologiestudium oft fehlt: ein unmittelbares Gefühl dafür,
          wo Prozesse in der Praxis brechen – und wo gute Daten den entscheidenden Unterschied machen.
        </p>
        <p>
          Über eine gezielte Weiterbildung im Bereich Daten- und Prozessanalyse bin ich in die Welt des Data
          Engineering gewechselt. Ich verstehe mich dabei bewusst nicht als jahrelang etablierter Spezialist,
          sondern als jemand, der seinen fachlichen Hintergrund konsequent in Richtung moderner
          Datenplattformen weiterentwickelt &ndash; mit klarem Fokus, hoher Lernbereitschaft und einem
          praxisnahen Verständnis dafür, was Unternehmen tatsächlich brauchen.
        </p>

        <h2>Arbeitsweise</h2>
        <p>
          Ich beginne mit der Frage, welches Problem eine Datenlösung tatsächlich lösen soll – nicht mit der
          Frage, welches Tool gerade im Trend liegt. Anforderungen werden in klare Datenmodelle übersetzt,
          Pipelines werden getestet und überwacht statt „einmal gebaut und vergessen&rdquo;, und Entscheidungen
          werden dokumentiert, damit sie auch für andere nachvollziehbar bleiben.
        </p>

        <h2>Aktueller Fokus</h2>
        <p>
          Mein aktueller Schwerpunkt liegt auf modernen Cloud-Datenplattformen – insbesondere auf
          Databricks-basierten Architekturen –, auf robusten ETL/ELT-Pipelines sowie auf der sinnvollen
          Integration von KI-gestützter Automatisierung in bestehende Datenprozesse.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {values.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-[var(--radius-lg)] border border-border p-5">
            <Icon size={18} className="text-accent-blue" />
            <p className="mt-3 font-display text-sm font-semibold text-foreground">{title}</p>
            <p className="mt-1.5 text-sm text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <Button href={siteConfig.resumeUrl} variant="secondary">
          <FileDown size={16} /> Lebenslauf herunterladen
        </Button>
      </div>

      <div className="mt-20">
        <h2 className="font-display text-xl font-semibold text-foreground">Berufliche Timeline</h2>
        <ol className="mt-8 space-y-10 border-l border-border pl-6">
          {experience.map((item) => (
            <li key={`${item.company}-${item.startDate}`} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent-blue" />
              <p className="font-mono text-xs text-muted-foreground">
                {item.startDate} – {item.current ? "heute" : item.endDate}
              </p>
              <h3 className="mt-1 font-display text-base font-semibold text-foreground">
                {item.position} · {item.company}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {item.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-16">
        <CertificationsSection />
      </div>
    </PageContainer>
  );
}
