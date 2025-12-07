import { getAllBlogs } from "@/actions/blog";
import { getAllProjects } from "@/actions/project";
import { SITE_INFO } from "@/config/site";

const allPosts = getAllBlogs();
const allProjects = getAllProjects();

const content = `# harshkanjiya.com

> Minimal & modern developer portfolio built with Next.js, MDX, & ShadCN. Designed for project documentation, technical blogs, & personal notes.

- [About](${SITE_INFO.url}/about.md): A quick intro to me, my tech stack, and how to connect.
- [Experience](${SITE_INFO.url}/experience.md): Highlights from my career and key roles I've taken on.
- [Projects](${SITE_INFO.url}/projects.md): Selected projects that show my skills and creativity.

## Blogs

${allPosts.map((item) => `- [${item.metadata.title}](${SITE_INFO.url}/blog/${item.slug}.mdx): ${item.metadata.description}`).join("\n")}

## Projects

${allProjects.map((item) => `- [${item.metadata.title}](${SITE_INFO.url}/projects/${item.slug}.mdx): ${item.metadata.description}`).join("\n")}
`;

export const dynamic = "force-static";

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
