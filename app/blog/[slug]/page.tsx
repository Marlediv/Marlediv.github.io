import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { Clock, ArrowLeft } from "lucide-react";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { siteConfig, siteMetadata } from "@/content/site-config";
import { absoluteUrl, pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/layout/json-ld";
import { PageContainer } from "@/components/layout/page-container";
import { Badge } from "@/components/ui/badge";
import { TableOfContents, extractHeadings } from "@/components/blog/table-of-contents";
import { CodeBlock, InlineCode } from "@/components/blog/code-block";
import { RelatedPosts } from "@/components/blog/related-posts";
import Link from "next/link";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
  });
}

const mdxComponents = {
  pre: CodeBlock,
  code: InlineCode,
};

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const headings = extractHeadings(post.content);
  const related = getRelatedPosts(post);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    inLanguage: "de-DE",
    keywords: post.tags.join(", "),
    author: { "@type": "Person", name: siteConfig.fullName, url: siteMetadata.baseUrl },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    url: absoluteUrl(`/blog/${post.slug}`),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Blog", item: absoluteUrl("/blog") },
      { "@type": "ListItem", position: 2, name: post.title, item: absoluteUrl(`/blog/${post.slug}`) },
    ],
  };

  return (
    <PageContainer narrow className="py-20">
      <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft size={15} /> Alle Artikel
      </Link>

      <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden="true">·</span>
        <span className="inline-flex items-center gap-1">
          <Clock size={12} /> {post.readingTimeMinutes} Min. Lesezeit
        </span>
        <Badge variant="accent">{post.category}</Badge>
      </div>

      <h1 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">{post.title}</h1>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">{post.description}</p>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {post.tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>

      {headings.length > 0 && (
        <div className="mt-10">
          <TableOfContents headings={headings} />
        </div>
      )}

      <div className="prose-article mt-10">
        <MDXRemote
          source={post.content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [
                rehypeSlug,
                [rehypeAutolinkHeadings, { behavior: "wrap" }],
                [rehypePrettyCode, { theme: "github-dark-dimmed" }],
              ],
            },
          }}
        />
      </div>

      <RelatedPosts posts={related} />

      <JsonLd data={jsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
    </PageContainer>
  );
}
