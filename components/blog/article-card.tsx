import Link from "next/link";
import { Clock } from "lucide-react";
import type { BlogPostMeta } from "@/lib/blog";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";

export function ArticleCard({ post }: { post: BlogPostMeta }) {
  return (
    <Card className="p-6 transition-colors hover:border-border-strong">
      <div className="flex items-center gap-3 text-xs text-muted-foreground">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden="true">·</span>
        <span className="inline-flex items-center gap-1">
          <Clock size={12} /> {post.readingTimeMinutes} Min. Lesezeit
        </span>
      </div>

      <Link href={`/blog/${post.slug}`}>
        <h2 className="mt-3 font-display text-lg font-semibold text-foreground transition-colors hover:text-accent-blue">
          {post.title}
        </h2>
      </Link>

      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{post.description}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        <Badge variant="accent">{post.category}</Badge>
        {post.tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>
    </Card>
  );
}
