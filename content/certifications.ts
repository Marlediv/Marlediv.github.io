export type Certification = {
  title: string;
  issuer: string;
  issueDate?: string;
  expirationDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  /** Kennzeichnet Beispieldaten, die noch nicht tatsächlich erworben wurden. */
  isPlaceholder: boolean;
};

/**
 * WICHTIG: Dies sind austauschbare Beispieleinträge zur Veranschaulichung der Darstellung.
 * Ersetze `isPlaceholder: true` erst, wenn die Zertifizierung tatsächlich erworben wurde.
 */
export const certifications: Certification[] = [
  {
    title: "Azure Data Fundamentals (Beispiel)",
    issuer: "Microsoft",
    isPlaceholder: true,
  },
  {
    title: "Databricks Lakehouse Fundamentals (Beispiel)",
    issuer: "Databricks",
    isPlaceholder: true,
  },
  {
    title: "AWS Cloud Practitioner (Beispiel)",
    issuer: "Amazon Web Services",
    isPlaceholder: true,
  },
  {
    title: "SnowPro Core (Beispiel)",
    issuer: "Snowflake",
    isPlaceholder: true,
  },
];
