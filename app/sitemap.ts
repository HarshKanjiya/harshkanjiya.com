import type { MetadataRoute } from "next";
import { getAllBlogs } from "@/actions/blog";
import { getAllProjects } from "@/actions/project";
import { SITE_INFO } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs: MetadataRoute.Sitemap = getAllBlogs().map((post) => ({
    url: `${SITE_INFO.url}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.updatedAt),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const projects: MetadataRoute.Sitemap = getAllProjects().map((project) => ({
    url: `${SITE_INFO.url}/projects/${project.slug}`,
    lastModified: new Date(project.metadata.updatedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const routes: MetadataRoute.Sitemap = [
    {
      url: SITE_INFO.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_INFO.url}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_INFO.url}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  return [...routes, ...projects, ...blogs];
}
