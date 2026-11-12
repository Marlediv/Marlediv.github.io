import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { getAllPosts } from "@/lib/blog";
import { absoluteUrl } from "@/lib/metadata";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/projekte", "/ueber-mich", "/blog", "/kontakt"].map((route) => ({
    url: absoluteUrl(route),
  }));

  const projectRoutes = projects.map((project) => ({
    url: absoluteUrl(`/projekte/${project.slug}`),
  }));

  const postRoutes = getAllPosts().map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.date),
  }));

  return [...staticRoutes, ...projectRoutes, ...postRoutes];
}
