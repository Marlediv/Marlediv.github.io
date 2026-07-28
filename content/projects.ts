export type ProjectCategory =
  | "Data Engineering"
  | "Cloud"
  | "Analytics"
  | "AI"
  | "Automation"
  | "Open Source";

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string[];
  category: ProjectCategory;
  technologies: string[];
  year: number;
  status: "active" | "completed" | "in-development";
  featured: boolean;
  /** Referenziert eine lokal generierte SVG-Cover-Variante, siehe components/projects/project-cover.tsx */
  coverVariant: "pipeline" | "streaming" | "assistant" | "quality";
  githubUrl?: string;
  liveUrl?: string;
  documentationUrl?: string;
};

/**
 * Zentrale Projektdatenbank.
 * Alle Links sind Platzhalter (gekennzeichnet mit "example") – vor Veröffentlichung ersetzen.
 */
export const projects: Project[] = [
  {
    slug: "enterprise-data-platform",
    title: "Enterprise Data Platform",
    shortDescription:
      "Skalierbare Cloud-Datenplattform mit automatisierten ETL/ELT-Prozessen, Monitoring und Data-Quality-Prüfungen.",
    description:
      "Aufbau einer zentralen Datenplattform, die Rohdaten aus mehreren Quellsystemen konsolidiert, transformiert und für Reporting sowie Analytics bereitstellt. Im Fokus standen Skalierbarkeit, Nachvollziehbarkeit der Datenflüsse und ein belastbares Monitoring.",
    challenge:
      "Verteilte Quellsysteme lieferten Daten in unterschiedlichen Formaten und Taktungen, ohne einheitliche Qualitätsstandards oder zentrale Sichtbarkeit auf Fehler.",
    solution:
      "Ich habe eine Medaillon-Architektur (Bronze/Silver/Gold) mit orchestrierten Pipelines aufgesetzt, Data-Quality-Regeln als Code definiert und ein Alerting für fehlgeschlagene Läufe implementiert.",
    impact: [
      "Deutlich reduzierte manuelle Nacharbeit bei Datenfehlern durch automatisierte Validierung",
      "Nachvollziehbare Datenherkunft (Lineage) für alle Kernkennzahlen",
      "Kürzere Durchlaufzeiten vom Rohdatum bis zum Reporting",
    ],
    category: "Data Engineering",
    technologies: ["Azure", "Azure Data Factory", "Databricks", "Python", "SQL", "dbt", "Power BI"],
    year: 2025,
    status: "completed",
    featured: true,
    coverVariant: "pipeline",
    githubUrl: "https://github.com/example/enterprise-data-platform",
    liveUrl: undefined,
    documentationUrl: "https://example.com/docs/enterprise-data-platform",
  },
  {
    slug: "realtime-analytics-platform",
    title: "Real-Time Analytics Platform",
    shortDescription:
      "Streaming-Architektur zur Verarbeitung großer Mengen von Ereignisdaten in nahezu Echtzeit.",
    description:
      "Konzeption und Umsetzung einer Streaming-Pipeline, die Ereignisdaten aus Anwendungen und Sensoren nahezu verzögerungsfrei aufbereitet und für operative Dashboards sowie nachgelagerte Systeme zur Verfügung stellt.",
    challenge:
      "Batch-basierte Verarbeitung war zu langsam für operative Entscheidungen, die auf aktuellen Ereignisdaten basieren mussten.",
    solution:
      "Aufbau einer Event-Streaming-Architektur mit strukturierten Streaming-Jobs, Schema-Verwaltung und einer Delta-Lake-basierten Speicherung für konsistente Historisierung.",
    impact: [
      "Von Tagesbatches auf Minutenaktualität für operative Kennzahlen",
      "Robuste Verarbeitung auch bei Lastspitzen durch horizontale Skalierung",
      "Wiederverwendbare Streaming-Bausteine für weitere Anwendungsfälle",
    ],
    category: "Data Engineering",
    technologies: ["Apache Kafka", "Spark Structured Streaming", "Azure Event Hubs", "Python", "Delta Lake"],
    year: 2025,
    status: "active",
    featured: true,
    coverVariant: "streaming",
    githubUrl: "https://github.com/example/realtime-analytics-platform",
    liveUrl: undefined,
    documentationUrl: undefined,
  },
  {
    slug: "ai-document-assistant",
    title: "AI Document Assistant",
    shortDescription:
      "KI-gestützter Wissensassistent mit Retrieval-Augmented Generation und semantischer Suche.",
    description:
      "Ein Assistent, der unstrukturierte Dokumente durchsuchbar macht: Inhalte werden semantisch indexiert und über ein RAG-Verfahren mit einem Sprachmodell kombiniert, um präzise, quellenbezogene Antworten zu liefern.",
    challenge:
      "Wissen war über viele einzelne Dokumente verteilt und mit klassischer Volltextsuche nur schwer auffindbar.",
    solution:
      "Aufbau einer Ingestion-Pipeline mit Chunking und Embeddings, Speicherung in einer vektorbasierten Datenbank und Anbindung an ein LLM über eine RAG-Architektur mit Quellenangaben.",
    impact: [
      "Deutlich schnellere Beantwortung wiederkehrender Wissensfragen",
      "Antworten mit nachvollziehbarem Bezug zur Originalquelle",
      "Erweiterbare Architektur für zusätzliche Dokumenttypen",
    ],
    category: "AI",
    technologies: ["Python", "OpenAI API", "Claude API", "LangChain", "PostgreSQL", "pgvector", "Next.js"],
    year: 2024,
    status: "completed",
    featured: true,
    coverVariant: "assistant",
    githubUrl: "https://github.com/example/ai-document-assistant",
    liveUrl: "https://example.com/demo/ai-document-assistant",
    documentationUrl: "https://example.com/docs/ai-document-assistant",
  },
  {
    slug: "data-quality-framework",
    title: "Data Quality Framework",
    shortDescription:
      "Automatisiertes Framework zur Validierung, Überwachung und Dokumentation unternehmensweiter Datenbestände.",
    description:
      "Ein wiederverwendbares Framework, das Datenqualitätsregeln zentral definiert, automatisiert prüft und Ergebnisse transparent dokumentiert – als fester Bestandteil der Pipeline-Architektur statt als nachgelagerte Kontrolle.",
    challenge:
      "Datenqualitätsprobleme wurden häufig erst spät – oft erst im Reporting – bemerkt, was aufwendige Nachbearbeitung erforderte.",
    solution:
      "Integration automatisierter Prüfregeln direkt in die Orchestrierung, mit klaren Schwellenwerten, automatisierten Reports und einer durchsuchbaren Dokumentation aller Regeln.",
    impact: [
      "Frühere Erkennung von Datenqualitätsproblemen direkt in der Pipeline",
      "Einheitliche, dokumentierte Qualitätsregeln über Teamgrenzen hinweg",
      "Weniger nachträglicher Korrekturaufwand im Reporting",
    ],
    category: "Data Engineering",
    technologies: ["Python", "dbt", "Great Expectations", "Airflow", "PostgreSQL"],
    year: 2024,
    status: "completed",
    featured: false,
    coverVariant: "quality",
    githubUrl: "https://github.com/example/data-quality-framework",
    liveUrl: undefined,
    documentationUrl: "https://example.com/docs/data-quality-framework",
  },
];

export const projectCategories: ProjectCategory[] = [
  "Data Engineering",
  "Cloud",
  "Analytics",
  "AI",
  "Automation",
  "Open Source",
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
