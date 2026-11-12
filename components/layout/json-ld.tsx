/**
 * Strukturierte Daten (JSON-LD). `<` wird escaped, damit Inhalte aus
 * Frontmatter o. Ä. das Script-Element nicht vorzeitig schließen können.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
