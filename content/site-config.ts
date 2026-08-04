/**
 * Zentrale Website-Konfiguration.
 * Passe hier alle persönlichen Basisdaten an – der Rest der Seite liest ausschließlich aus dieser Datei.
 */

export const siteConfig = {
  name: "Marco",
  fullName: "Marco Grochowiak",
  title: "Data Engineer",
  alternativeTitles: [
    "Senior Data Engineer",
    "Data Platform Engineer",
    "Cloud Data Engineer",
    "Analytics Engineer",
    "AI Automation Engineer",
  ],
  headline: "Building scalable data platforms, reliable pipelines and intelligent automation.",
  headlineDe:
    "Ich entwickle skalierbare Datenplattformen, zuverlässige Pipelines und intelligente Automatisierungen.",
  shortDescription:
    "Ich konzipiere und entwickle moderne Datenlösungen, die komplexe Informationen zuverlässig in verwertbare Geschäftsergebnisse verwandeln.",
  description:
    "Data Engineer mit Fokus auf skalierbare Cloud-Datenplattformen, robuste ETL/ELT-Pipelines, Data Quality und intelligente Automatisierung mit KI.",
  email: "marco.grochowiak@outlook.com",
  location: "Deutschland",
  locationCity: "Münsterland",
  availability: true,
  availabilityText: "Offen für neue Projekte und Festanstellung",

  // Zentral konfigurierbare Links – hier später echte URLs eintragen.
  githubUsername: "marlediv",
  githubUrl: "https://github.com/marlediv",
  linkedinUrl: "https://www.linkedin.com/in/marco-grochowiak-2a5b3b313/",
  resumeUrl: "/documents/marco-cv.pdf",

  locale: "de-DE",
  defaultLanguage: "de" as const,
  // Architektur ist zweisprachig vorbereitet (siehe README, Abschnitt „Internationalisierung“).
  supportedLanguages: ["de"] as const,
} as const;

export const siteMetadata = {
  siteName: `${siteConfig.name} – ${siteConfig.title}`,
  titleTemplate: "%s | Marco – Data Engineer",
  defaultTitle: `${siteConfig.name} – ${siteConfig.title}`,
  defaultDescription: siteConfig.description,
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  twitterHandle: "@example",
  ogImage: "/og-image.png",
} as const;
