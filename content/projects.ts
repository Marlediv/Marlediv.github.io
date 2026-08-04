export type ProjectCategory =
  | "Data Engineering"
  | "Cloud"
  | "Analytics"
  | "AI"
  | "Automation"
  | "Open Source";

export type ProjectType = "professional" | "portfolio" | "education" | "personal";

export type EvidenceType = "repository" | "documentation" | "confidential" | "demo";

export type ProjectEvidence = {
  type: EvidenceType;
  label: string;
  href?: string;
  note?: string;
};

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string[];
  category: ProjectCategory;
  projectType: ProjectType;
  technologies: string[];
  year: number;
  status: "active" | "completed" | "in-development";
  featured: boolean;
  priority: number;
  /** Referenziert eine lokal generierte SVG-Cover-Variante, siehe components/projects/project-cover.tsx */
  coverVariant: "pipeline" | "streaming" | "assistant" | "quality";
  evidence: ProjectEvidence[];
  githubUrl?: string;
  liveUrl?: string;
  documentationUrl?: string;
  imageUrl?: string;
  imageAlt?: string;
};

/**
 * Kuratierte Projektdatenbank.
 *
 * Vertrauliche berufliche Projekte werden ausschließlich anonymisiert beschrieben.
 * Repository- und Dokumentationslinks werden erst ergänzt, wenn Ziel und
 * Veröffentlichbarkeit geprüft sind.
 */
export const projects: Project[] = [
  {
    slug: "artikelstammdaten-migration",
    title: "Artikelstammdaten-Migration Beosys → APplus",
    shortDescription:
      "Qualitätsgesicherte Migration eines umfangreichen Artikelstamms aus einem Legacy-ERP in ein modernes Zielsystem.",
    description:
      "Berufliche Fallstudie zur Analyse, Transformation und Validierung heterogener Artikelstammdaten. Im Mittelpunkt stehen ein nachvollziehbares fachliches Mapping, reproduzierbare Importpakete und die enge Abstimmung mit den beteiligten Fachbereichen.",
    challenge:
      "Historisch gewachsene Datenbestände aus Datenbank, Exportdateien und fachlichen Arbeitsständen mussten konsistent zusammengeführt werden, ohne unklare Zuordnungen oder Datenqualitätsprobleme unbemerkt in das Zielsystem zu übernehmen.",
    solution:
      "Ich entwickelte einen SQL- und Python-gestützten Migrationsprozess mit Quelleninventur, fachlichem Feldmapping, selektiver Generierung von Importpaketen sowie Diagnose- und Validierungsberichten. Technische Automatisierung und fachliche Freigabe bleiben dabei bewusst getrennt.",
    impact: [
      "Nachvollziehbare Feldherkunft und dokumentierte Transformationslogik",
      "Wiederholbare Test- und Importläufe mit klaren Prüfergebnissen",
      "Frühe Sichtbarkeit fachlicher und technischer Blocker",
      "Git-basierter Issue-, Review- und Freigabeprozess",
    ],
    category: "Data Engineering",
    projectType: "professional",
    technologies: ["Python", "SQL Server", "Pandas", "Excel", "Git", "GitHub"],
    year: 2026,
    status: "active",
    featured: true,
    priority: 1,
    coverVariant: "pipeline",
    evidence: [
      {
        type: "confidential",
        label: "Anonymisierte berufliche Fallstudie",
        note: "Repository, Rohdaten und interne Projektdokumentation sind nicht öffentlich.",
      },
    ],
  },
  {
    slug: "databricks-retail-lakehouse",
    title: "Databricks Retail Lakehouse",
    shortDescription:
      "Retail-Datenplattform mit Medallion Architecture, Delta Lake und nachvollziehbarer Historisierung.",
    description:
      "Technisches Portfolio-Projekt zur Umsetzung einer Lakehouse-Architektur für Retail-Daten. Rohdaten werden schrittweise bereinigt, fachlich modelliert und für Analyse- und Reporting-Anwendungsfälle bereitgestellt.",
    challenge:
      "Unterschiedliche Datenstände mussten reproduzierbar verarbeitet, qualitätsgesichert und historisiert werden, ohne die Nachvollziehbarkeit zwischen Rohdaten und Kennzahlen zu verlieren.",
    solution:
      "Umsetzung einer Bronze-/Silver-/Gold-Architektur auf Delta Lake mit PySpark und Databricks SQL. Deduplizierung, SCD-Typ-2-Historisierung, Qualitätsprüfungen und eine fachliche KPI-Schicht sind Bestandteil der Pipeline.",
    impact: [
      "Klare Trennung von Rohdaten, bereinigten Daten und fachlichen Kennzahlen",
      "Nachvollziehbare Historisierung von Änderungen mit SCD Typ 2",
      "Wiederholbare Transformationen und integrierte Datenqualitätsprüfungen",
    ],
    category: "Cloud",
    projectType: "portfolio",
    technologies: ["Databricks", "Delta Lake", "PySpark", "Databricks SQL", "Python", "SQL"],
    year: 2026,
    status: "completed",
    featured: true,
    priority: 2,
    coverVariant: "pipeline",
    evidence: [
      {
        type: "repository",
        label: "Repository auf GitHub",
        href: "https://github.com/Marlediv/databricks-retail-lakehouse",
      },
    ],
    githubUrl: "https://github.com/Marlediv/databricks-retail-lakehouse",
  },
  {
    slug: "snowflake-data-engineering-platform",
    title: "Snowflake Data Engineering Platform",
    shortDescription:
      "Cloud-Datenplattform mit RAW-, CORE- und MART-Schichten, CDC und nativer Orchestrierung.",
    description:
      "Portfolio-Projekt für eine strukturierte Data-Engineering-Plattform in Snowflake. Es verbindet Rohdatenübernahme, Historisierung, fachliche Datenmodelle und Monitoring in einer dokumentierten Deployment-Struktur.",
    challenge:
      "Änderungen aus Quellsystemen sollten inkrementell verarbeitet und zugleich historisch nachvollziehbar bleiben. Abhängigkeiten und Betriebszustände der Verarbeitung mussten transparent werden.",
    solution:
      "Aufbau der Schichten RAW, historisierter CORE und MART. Change Data Capture wird über Snowflake Streams realisiert, die Verarbeitung über Tasks orchestriert und durch Monitoring- sowie Backlog-Sichten ergänzt.",
    impact: [
      "Inkrementelle Verarbeitung von Änderungen statt vollständiger Neuladungen",
      "Historisch nachvollziehbares Kernmodell",
      "Dokumentierte Orchestrierung und transparente Betriebszustände",
    ],
    category: "Cloud",
    projectType: "portfolio",
    technologies: ["Snowflake", "SQL", "Streams", "Tasks", "SCD Typ 2", "Data Modeling"],
    year: 2026,
    status: "completed",
    featured: true,
    priority: 3,
    coverVariant: "streaming",
    evidence: [
      {
        type: "repository",
        label: "Repository auf GitHub",
        href: "https://github.com/Marlediv/snowflake-mini-data-platform",
      },
    ],
    githubUrl: "https://github.com/Marlediv/snowflake-mini-data-platform",
  },
  {
    slug: "ai-logistics-agent-middleware",
    title: "AI Logistics Agent Middleware",
    shortDescription:
      "Kontrollierte Middleware zwischen einem KI-Agenten und operativen Logistikfunktionen.",
    description:
      "Technisches Referenzprojekt für agentische KI, bei dem ein Sprachmodell nicht unmittelbar auf operative Systeme zugreift. Eine Middleware übersetzt Absichten in strukturierte, prüfbare Aktionen und setzt klare Sicherheitsgrenzen.",
    challenge:
      "Freie Modellausgaben dürfen nicht ungeprüft zu operativen Aktionen führen. Eingaben, Berechtigungen, Seiteneffekte und Fehlerfälle müssen kontrollierbar und nachvollziehbar bleiben.",
    solution:
      "Strukturierte Tool-Aufrufe werden validiert, autorisiert und protokolliert. Vorschlag, Prüfung und Ausführung sind getrennte Schritte; Fehlerbehandlung und sichere Aktionsgrenzen sind Teil der Architektur.",
    impact: [
      "Kontrollierbare Agentenaktionen statt direkter Freitextausführung",
      "Nachvollziehbare Validierungs- und Berechtigungsentscheidungen",
      "Klare Trennung von Vorschlag, Freigabe und Seiteneffekt",
    ],
    category: "AI",
    projectType: "portfolio",
    technologies: ["Python", "LLM", "Tool Calling", "JSON Schema", "API Design", "Audit Logging"],
    year: 2026,
    status: "completed",
    featured: false,
    priority: 4,
    coverVariant: "assistant",
    evidence: [
      {
        type: "repository",
        label: "Repository auf GitHub",
        href: "https://github.com/Marlediv/AI-Logistics-Agent-Middleware",
      },
    ],
    githubUrl: "https://github.com/Marlediv/AI-Logistics-Agent-Middleware",
  },
  {
    slug: "ihk-abschlussprojekt",
    title: "IHK-Abschlussprojekt: Data-Warehouse-Lösung",
    shortDescription:
      "Dokumentationsbasierte Fallstudie zur Konzeption und Umsetzung einer Data-Warehouse-Lösung.",
    description:
      "Abschlussprojekt der Umschulung zum Fachinformatiker für Daten- und Prozessanalyse. Die öffentliche Darstellung konzentriert sich auf Ausgangslage, Architektur, Datenmodell, Umsetzung und technische Entscheidungen.",
    challenge:
      "Operative Daten mussten für eine konsistente analytische Auswertung aufbereitet, historisiert und in einem verständlichen Datenmodell bereitgestellt werden.",
    solution:
      "Konzeption und Umsetzung eines strukturierten ETL-Prozesses mit dimensionaler Modellierung, Qualitätssicherung und dokumentierter Übergabe. Veröffentlicht wird ausschließlich eine zuvor bereinigte Projektdokumentation.",
    impact: [
      "Nachvollziehbare Architektur- und Modellierungsentscheidungen",
      "Strukturierte Aufbereitung operativer Daten für analytische Auswertungen",
      "Vollständige Projektdokumentation als belastbarer Kompetenznachweis",
    ],
    category: "Analytics",
    projectType: "education",
    technologies: ["SQL", "Data Warehouse", "ETL", "Dimensional Modeling", "Power BI"],
    year: 2025,
    status: "completed",
    featured: false,
    priority: 5,
    coverVariant: "quality",
    evidence: [
      {
        type: "documentation",
        label: "Geprüfte Projektdokumentation",
        note: "Die PDF wird nach Prüfung auf vertrauliche Inhalte verlinkt; Quellcode ist nicht öffentlich.",
      },
    ],
  },
  {
    slug: "youtube-analytics-pipeline",
    title: "YouTube Analytics Pipeline",
    shortDescription:
      "API-basierte Datenpipeline zur reproduzierbaren Erfassung und Analyse von Kanal- und Videodaten.",
    description:
      "Eigenes Entwicklungsprojekt zur vollständigen, paginierten Übernahme von YouTube-Kanal- und Videometadaten. Die Pipeline schafft eine belastbare Datenbasis für weiterführende Analysen und Visualisierungen.",
    challenge:
      "API-Paginierung, unterschiedliche Antwortstrukturen und fehlende Felder mussten robust behandelt werden, damit auch größere Upload-Historien vollständig und reproduzierbar geladen werden können.",
    solution:
      "Ein Python-Client kapselt Authentifizierung, Paginierung und Chunking. Kanal-, Playlist- und Videodaten werden strukturiert extrahiert und für eine persistente Analyseebene vorbereitet.",
    impact: [
      "Vollständige, paginierte Erfassung der Upload-Historie",
      "Robuste Verarbeitung optionaler und fehlender API-Felder",
      "Wiederverwendbare Grundlage für Analytics und Reporting",
    ],
    category: "Data Engineering",
    projectType: "personal",
    technologies: ["Python", "YouTube Data API", "REST", "SQLite", "Pandas"],
    year: 2026,
    status: "in-development",
    featured: false,
    priority: 6,
    coverVariant: "streaming",
    evidence: [
      {
        type: "repository",
        label: "Repository in aktiver Entwicklung",
        note: "Der Quellcode wird verlinkt, sobald das Repository öffentlich erreichbar ist.",
      },
    ],
  },
  {
    slug: "health-insurance-data-warehouse-simulator",
    title: "Health Insurance Data Warehouse Simulator",
    shortDescription:
      "Referenzprojekt für relationale Datenmodellierung, ETL und analytische Auswertungen im Versicherungsumfeld.",
    description:
      "Portfolio-Projekt zur Simulation einer Data-Warehouse-Lösung für Krankenversicherungsdaten. Es demonstriert die strukturierte Überführung operativer Daten in ein analytisch nutzbares Modell.",
    challenge:
      "Fachlich zusammenhängende, aber unterschiedlich strukturierte Daten mussten konsistent modelliert und für wiederholbare Auswertungen aufbereitet werden.",
    solution:
      "Entwicklung eines reproduzierbaren Datenmodells und der zugehörigen Lade- und Transformationslogik mit dokumentierten Annahmen und prüfbaren Ergebnissen.",
    impact: [
      "Nachvollziehbares Data-Warehouse-Modell",
      "Reproduzierbare ETL- und Analyseabläufe",
      "Öffentlich einsehbarer Nachweis praktischer SQL- und DWH-Kompetenz",
    ],
    category: "Data Engineering",
    projectType: "portfolio",
    technologies: ["SQL", "Data Warehouse", "ETL", "Dimensional Modeling", "Python"],
    year: 2026,
    status: "completed",
    featured: false,
    priority: 7,
    coverVariant: "quality",
    evidence: [
      {
        type: "repository",
        label: "Repository auf GitHub",
        href: "https://github.com/Marlediv/Health-Insurance-Data-Warehouse-Simulator",
      },
    ],
    githubUrl: "https://github.com/Marlediv/Health-Insurance-Data-Warehouse-Simulator",
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
  return projects
    .filter((project) => project.featured)
    .sort((a, b) => a.priority - b.priority);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}