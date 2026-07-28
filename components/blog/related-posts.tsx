import type { BlogPostMeta } from "@/lib/blog";
import { ArticleCard } from "./article-card";

export function RelatedPosts({ posts }: { posts: BlogPostMeta[] }) {
  if (posts.length === 0) return null;

  return (
    <div className="mt-16 border-t border-border pt-10">
      <p className="mb-5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        Verwandte Beiträge
      </p>
      <div className="grid gap-5 sm:grid-cols-2">
        {posts.map((post) => (
          <ArticleCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
