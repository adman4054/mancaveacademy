import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://mancaveacademy.com";
  const staticRoutes = ["", "/start-here", "/articles", "/about", "/newsletter", "/privacy", "/terms"];
  const articleRoutes = getAllArticles().map((post) => `/articles/${post.slug}`);

  return [...staticRoutes, ...articleRoutes].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path.startsWith("/articles/") ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7
  }));
}


