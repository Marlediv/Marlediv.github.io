export type Certification = {
  title: string;
  issuer: string;
  /** Jahr des Abschlusses bzw. der Ausstellung. */
  year?: number;
  credentialUrl?: string;
};

/**
 * Abschlüsse und Zertifikate.
 * Hier ausschließlich tatsächlich erworbene Nachweise eintragen – keine geplanten.
 */
export const certifications: Certification[] = [
  {
    title: "Fachinformatiker für Daten- und Prozessanalyse",
    issuer: "IHK-Abschluss · COMCAVE College Münster",
    year: 2026,
  },
  {
    title: "Chemikant",
    issuer: "IHK-Abschluss",
    year: 2006,
  },
];
