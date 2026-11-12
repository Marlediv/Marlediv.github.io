import GithubSlugger from "github-slugger";

type Heading = { text: string; slug: string; depth: 2 | 3 };

/**
 * Liest H2/H3-Überschriften aus dem Markdown-Quelltext. Die Anker werden mit
 * `github-slugger` erzeugt – derselben Bibliothek, die `rehype-slug` für die
 * IDs im Artikel verwendet, damit beide garantiert übereinstimmen.
 */
export function extractHeadings(markdown: string): Heading[] {
  const slugger = new GithubSlugger();
  const headings: Heading[] = [];
  let inCodeBlock = false;

  for (const line of markdown.split("\n")) {
    if (/^(```|~~~)/.test(line.trim())) {
      inCodeBlock = !inCodeBlock;
      continue;
    }
    if (inCodeBlock) continue;

    const match = /^(#{2,3})\s+(.+?)\s*#*$/.exec(line);
    if (!match) continue;

    // Inline-Markdown (Betonung, Code, Links) für Anzeige und Slug entfernen.
    const text = match[2]
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      .replace(/[*_`]/g, "")
      .trim();

    headings.push({ text, slug: slugger.slug(text), depth: match[1].length as 2 | 3 });
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
