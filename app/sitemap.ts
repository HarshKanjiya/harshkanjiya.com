import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";
import { getAllBlogs, getBlogsByCategory } from "@/actions/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllBlogs().map((post) => ({
    url: `${SITE_INFO.url}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.updatedAt).toISOString(),
  }));

  const components = getBlogsByCategory("components").map((post) => ({
    url: `${SITE_INFO.url}/components/${post.slug}`,
    lastModified: new Date(post.metadata.updatedAt).toISOString(),
  }));

  const routes = ["", "/blog", "/components"].map((route) => ({
    url: `${SITE_INFO.url}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...posts, ...components];
}
