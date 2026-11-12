import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIRECTORY = path.join(process.cwd(), "content/blog");

export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  category: string;
};

export type BlogPostMeta = BlogFrontmatter & {
  slug: string;
  readingTimeMinutes: number;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

function getSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIRECTORY)) return [];
  return fs
    .readdirSync(BLOG_DIRECTORY)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getAllPosts(): BlogPostMeta[] {
  const slugs = getSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug)).filter(Boolean) as BlogPost[];

  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(BLOG_DIRECTORY, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  // Fehlerhaftes Frontmatter soll den Build stoppen, statt still eine kaputte Seite zu erzeugen.
  for (const field of ["title", "description", "date"] as const) {
    if (typeof data[field] !== "string" || data[field].trim() === "") {
      throw new Error(`content/blog/${slug}.mdx: Frontmatter-Feld "${field}" fehlt oder ist kein String.`);
    }
  }
  if (Number.isNaN(Date.parse(data.date))) {
    throw new Error(`content/blog/${slug}.mdx: "date" ist kein gültiges Datum (erwartet z. B. "2026-06-01").`);
  }

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    tags: data.tags ?? [],
    category: data.category ?? "Data Engineering",
    readingTimeMinutes: Math.max(1, Math.round(stats.minutes)),
    content,
  };
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagSet = new Set<string>();
  posts.forEach((post) => post.tags.forEach((tag) => tagSet.add(tag)));
  return Array.from(tagSet).sort();
}

export function getRelatedPosts(current: BlogPostMeta, limit = 2): BlogPostMeta[] {
  return getAllPosts()
    .filter((post) => post.slug !== current.slug)
    .filter((post) => post.category === current.category || post.tags.some((tag) => current.tags.includes(tag)))
    .slice(0, limit);
}
