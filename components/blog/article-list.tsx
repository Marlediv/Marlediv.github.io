"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { BlogPostMeta } from "@/lib/blog";
import { ArticleCard } from "./article-card";
import { Input } from "@/components/ui/form-fields";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 4;

export function ArticleList({ posts, tags }: { posts: BlogPostMeta[]; tags: string[] }) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesQuery =
        query.trim().length === 0 ||
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.description.toLowerCase().includes(query.toLowerCase());
      const matchesTag = !activeTag || post.tags.includes(activeTag);
      return matchesQuery && matchesTag;
    });
  }, [posts, query, activeTag]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <div className="relative mb-6">
        <Search size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
          placeholder="Artikel durchsuchen…"
          className="pl-10"
          aria-label="Blogartikel durchsuchen"
        />
      </div>

      <div role="group" aria-label="Nach Tag filtern" className="mb-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => {
            setActiveTag(null);
            setPage(1);
          }}
          aria-pressed={activeTag === null}
          className={cn(
            "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
            activeTag === null
              ? "border-accent-blue bg-accent-blue text-accent-blue-foreground"
              : "border-border text-muted-foreground hover:text-foreground",
          )}
        >
          Alle
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => {
              setActiveTag(tag);
              setPage(1);
            }}
            aria-pressed={activeTag === tag}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
              activeTag === tag
                ? "border-accent-blue bg-accent-blue text-accent-blue-foreground"
                : "border-border text-muted-foreground hover:text-foreground",
            )}
          >
            {tag}
          </button>
        ))}
      </div>

      {paginated.length === 0 ? (
        <p className="rounded-[var(--radius-lg)] border border-dashed border-border py-16 text-center text-sm text-muted-foreground">
          Keine Artikel gefunden.
        </p>
      ) : (
        <div className="space-y-5">
          {paginated.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPage(p)}
              aria-current={page === p ? "page" : undefined}
              className={cn(
                "h-9 w-9 rounded-[var(--radius-sm)] text-sm font-medium transition-colors",
                page === p ? "bg-accent-blue text-accent-blue-foreground" : "text-muted-foreground hover:bg-surface",
              )}
            >
              {p}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
