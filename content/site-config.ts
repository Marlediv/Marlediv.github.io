/**
 * Zentrale Website-Konfiguration.
 * Passe hier alle persönlichen Basisdaten an – der Rest der Seite liest ausschließlich aus dieser Datei.
 */

export const siteConfig = {
  name: "Marco",
  fullName: "Marco Grochowiak",
  title: "Data Engineer",
  headline: "Aus gewachsenen Datenbeständen werden verlässliche Datenprodukte.",
  shortDescription:
    "Ich integriere, validiere und modelliere Daten – von der kontrollierten ERP-Stammdatenmigration bis zum analytischen Datenmodell. Mit Prozessverständnis aus Chemieproduktion und Logistik.",
  description:
    "Data Engineer mit Schwerpunkt auf Datenintegration, SQL-gestützter Datenvalidierung, Datenmodellierung und kontrollierter ERP-Stammdatenmigration.",
  email: "marco.grochowiak@outlook.com",
  location: "Deutschland",
  region: "Münsterland",
  availability: true,
  availabilityText: "Offen für neue Projekte und Festanstellung",

  /**
   * Ladungsfähige Anschrift für das Impressum (§ 5 DDG).
   * Solange `street` leer ist, zeigt das Impressum einen sichtbaren Hinweis auf die fehlende Angabe.
   */
  address: {
    street: "",
    postalCode: "",
    city: "",
  },

  githubUsername: "marlediv",
  githubUrl: "https://github.com/marlediv",
  linkedinUrl: "https://www.linkedin.com/in/marco-grochowiak-2a5b3b313/",
  resumeUrl: "/documents/marco-cv.pdf",
} as const;

export const siteMetadata = {
  siteName: `${siteConfig.fullName} – ${siteConfig.title}`,
  titleTemplate: `%s | ${siteConfig.fullName}`,
  defaultTitle: `${siteConfig.fullName} – ${siteConfig.title}`,
  defaultDescription: siteConfig.description,
  // Ohne abschließenden Slash. Im Deployment-Workflow auf die Live-URL gesetzt.
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
} as const;
