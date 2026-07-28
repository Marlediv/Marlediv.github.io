type Heading = { text: string; slug: string; depth: 2 | 3 };

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9äöüß\s-]/g, "")
    .replace(/\s+/g, "-");
}

export function extractHeadings(markdown: string): Heading[] {
  const lines = markdown.split("\n");
  const headings: Heading[] = [];

  for (const line of lines) {
    const h2 = /^##\s+(.+)/.exec(line);
    const h3 = /^###\s+(.+)/.exec(line);
    if (h2) headings.push({ text: h2[1].trim(), slug: slugify(h2[1].trim()), depth: 2 });
    else if (h3) headings.push({ text: h3[1].trim(), slug: slugify(h3[1].trim()), depth: 3 });
  }

  return headings;
}

export function TableOfContents({ headings }: { headings: Heading[] }) {
  if (headings.length === 0) return null;

  return (
    <nav aria-label="Inhaltsverzeichnis" className="rounded-[var(--radius-lg)] border border-border p-5">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        Inhaltsverzeichnis
      </p>
      <ul className="space-y-2 text-sm">
        {headings.map((heading) => (
          <li key={heading.slug} className={heading.depth === 3 ? "pl-4" : ""}>
            <a href={`#${heading.slug}`} className="text-muted-foreground hover:text-accent-blue">
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
