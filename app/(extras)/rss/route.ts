import { getAllBlogs, getBlogsByCategory } from "@/actions/blog";
import { getAllProjects } from "@/actions/project";
import { SITE_INFO } from "@/config/site";

export const dynamic = "force-static";

export function GET() {
  const allProjects = getAllProjects();
  const allBlogs = getAllBlogs();

  const itemsXml = allProjects
    .map(
      (post) =>
        `<item>
          <title>${post.metadata.title}</title>
          <link>${SITE_INFO.url}/projects/${post.slug}</link>
          <description>${post.metadata.description || ""}</description>
          <pubDate>${new Date(post.metadata.createdAt).toISOString()}</pubDate>
        </item>`
    )
    .join("\n");


  const blogXml = allBlogs
    .map(
      (post) =>
        `<item>
          <title>${post.metadata.title}</title>
          <link>${SITE_INFO.url}/blog/${post.slug}</link>
          <description>${post.metadata.description || ""}</description>
          <pubDate>${new Date(post.metadata.createdAt).toISOString()}</pubDate>
        </item>`
    )
    .join("\n");



  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>Projects | ${SITE_INFO.name}</title>
      <link>${SITE_INFO.url}</link>
      <description>A collection of reusable components.</description>
      ${itemsXml}
      ${blogXml}
    </channel>
  </rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
