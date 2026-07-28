export type Experience = {
  company: string;
  position: string;
  location?: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
};

/**
 * Beispielhafte, realistisch formulierte Stationen.
 * Firmennamen sind bewusst neutral gehalten (z. B. "Technologieunternehmen") –
 * ersetze sie durch deine tatsächlichen Angaben.
 */
export const experience: Experience[] = [
  {
    company: "Beratungsunternehmen (Beispiel)",
    position: "Data Engineer",
    location: "Deutschland",
    startDate: "2025",
    current: true,
    description:
      "Konzeption und Umsetzung von Datenplattformen für Kunden aus Logistik und Industrie, mit Fokus auf Automatisierung und Data Quality.",
    responsibilities: [
      "Entwurf und Betrieb von ETL/ELT-Pipelines in Cloud-Umgebungen",
      "Einführung automatisierter Datenqualitätsprüfungen",
      "Zusammenarbeit mit Fachbereichen zur Übersetzung von Anforderungen in Datenmodelle",
    ],
    technologies: ["Azure", "Databricks", "Python", "dbt", "SQL"],
  },
  {
    company: "Enterprise-Umfeld (Beispiel)",
    position: "Fachinformatiker – Daten- und Prozessanalyse (Umschulung mit Praxisanteil)",
    location: "Münster",
    startDate: "2024",
    endDate: "2025",
    current: false,
    description:
      "Praxisorientierte Weiterbildung mit Schwerpunkt Datenverarbeitung, Prozessanalyse und Data Engineering, begleitet von einem betrieblichen Praktikum.",
    responsibilities: [
      "Umsetzung eines Praxisprojekts entlang eines realistischen Logistik-Szenarios",
      "Aufbau von Datenmodellen nach dem Data-Vault-Ansatz",
      "Entwicklung einer internen Webanwendung inkl. Authentifizierung und Zeiterfassung",
    ],
    technologies: ["Python", "SQL", "PostgreSQL", "React", "Flask", "Docker"],
  },
  {
    company: "Logistikunternehmen (Beispiel)",
    position: "Fachkraft E-Commerce-Logistik",
    location: "Deutschland",
    startDate: "2019",
    endDate: "2024",
    current: false,
    description:
      "Mehrjährige operative Erfahrung in der E-Commerce-Logistik – Grundlage für ein praxisnahes Verständnis von Prozessen, Datenflüssen und Schnittstellen, das heute in die Data-Engineering-Arbeit einfließt.",
    responsibilities: [
      "Steuerung logistischer Prozesse und Schnittstellen zu IT-Systemen",
      "Mitwirkung an der Digitalisierung operativer Abläufe",
      "Schnittstelle zwischen operativem Geschäft und technischen Systemen",
    ],
    technologies: ["SAP", "Prozessanalyse", "Schnittstellenmanagement"],
  },
];
