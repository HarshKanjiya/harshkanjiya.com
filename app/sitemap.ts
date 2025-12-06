import type { MetadataRoute } from "next";

import { getAllBlogs } from "@/actions/blog";
import { getAllProjects } from "@/actions/project";
import { SITE_INFO } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllBlogs().map((post) => ({
    url: `${SITE_INFO.url}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.updatedAt).toISOString(),
  }));

  const projects = getAllProjects().map((post) => ({
    url: `${SITE_INFO.url}/projects/${post.slug}`,
    lastModified: new Date(post.metadata.updatedAt).toISOString(),
  }));

  const routes = ["", "/blog", "/projects"].map((route) => ({
    url: `${SITE_INFO.url}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...posts, ...projects];
}
