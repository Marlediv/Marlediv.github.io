import type { Metadata } from "next";
import { getAllPosts, getAllTags } from "@/lib/blog";
import { PageContainer } from "@/components/layout/page-container";
import { ArticleList } from "@/components/blog/article-list";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artikel über Data Engineering, Data Quality, Cloud-Architektur und KI-gestützte Automatisierung.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <PageContainer narrow className="py-20">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-blue">Blog</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-foreground sm:text-4xl">
        Notizen aus der Praxis
      </h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
        Gedanken zu Datenarchitektur, Data Quality und dem praktischen Einsatz von KI in Datenpipelines.
      </p>

      <div className="mt-12">
        <ArticleList posts={posts} tags={tags} />
      </div>
    </PageContainer>
  );
}
