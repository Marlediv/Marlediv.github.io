import type { MetadataRoute } from "next";
import { siteMetadata } from "@/content/site-config";
import { projects } from "@/content/projects";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteMetadata.baseUrl;

  const staticRoutes = ["", "/projekte", "/ueber-mich", "/blog", "/kontakt", "/impressum", "/datenschutz"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    }),
  );

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projekte/${project.slug}`,
    lastModified: new Date(),
  }));

  const postRoutes = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticRoutes, ...projectRoutes, ...postRoutes];
}
