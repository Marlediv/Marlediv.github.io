export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "data-engineering",
    title: "Data Engineering",
    description: "Pipelines, Transformationen und Orchestrierung großer Datenmengen.",
    skills: ["Python", "SQL", "Apache Spark", "dbt", "Apache Airflow", "Kafka", "Delta Lake"],
  },
  {
    id: "cloud",
    title: "Cloud",
    description: "Plattformen für skalierbares Speichern, Verarbeiten und Bereitstellen von Daten.",
    skills: ["Microsoft Azure", "AWS", "Google Cloud", "Databricks", "Snowflake"],
  },
  {
    id: "databases",
    title: "Datenbanken",
    description: "Relationale, analytische und vektorbasierte Datenspeicher.",
    skills: ["PostgreSQL", "SQL Server", "BigQuery", "Snowflake", "Redis", "Vector Databases"],
  },
  {
    id: "devops",
    title: "DevOps & Engineering",
    description: "Automatisierung, Reproduzierbarkeit und Betrieb von Infrastruktur.",
    skills: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "CI/CD", "Git", "Linux"],
  },
  {
    id: "analytics",
    title: "Analytics",
    description: "Vom Rohdatum zum verständlichen, entscheidungsrelevanten Bericht.",
    skills: ["Power BI", "Semantic Models", "Data Warehousing", "Dimensional Modeling", "Data Visualization"],
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    description: "Intelligente Assistenten, Agenten und automatisierte Workflows.",
    skills: ["OpenAI API", "Claude API", "RAG", "AI Agents", "MCP", "LangChain", "Vector Search", "Workflow Automation"],
  },
];
