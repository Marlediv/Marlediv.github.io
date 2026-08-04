export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "data-engineering",
    title: "Data Engineering & Modellierung",
    description:
      "Nachvollziehbare Datenflüsse und belastbare Modelle vom Quellsystem bis zur analytischen Struktur.",
    skills: [
      "SQL",
      "Python",
      "ETL/ELT",
      "Data Warehousing",
      "Dimensional Modeling",
      "Data Vault",
    ],
  },
  {
    id: "migration-data-quality",
    title: "Migration & Datenqualität",
    description:
      "Strukturierte Überführung gewachsener Datenbestände mit Mapping, Validierung und klaren Prüfpfaden.",
    skills: [
      "ERP-Stammdatenmigration",
      "Data Profiling",
      "Fachliches Mapping",
      "Datenvalidierung",
      "Pandas",
      "SQL Server",
    ],
  },
  {
    id: "analytics-bi",
    title: "Analytics & Business Intelligence",
    description:
      "Aufbereitung komplexer Daten zu verständlichen Kennzahlen, Modellen und Entscheidungsgrundlagen.",
    skills: [
      "Power BI",
      "Semantic Models",
      "Sternschema",
      "Datenvisualisierung",
      "PostgreSQL",
      "Prozessanalyse",
    ],
  },
  {
    id: "platform-ai-engineering",
    title: "Plattformen & AI Engineering",
    description:
      "Moderne Datenplattformen und kontrollierte KI-Integration als technische Referenz- und Entwicklungsprojekte.",
    skills: [
      "Databricks",
      "Snowflake",
      "Apache Spark",
      "AI Agents",
      "Git",
      "GitHub Actions",
    ],
  },
];