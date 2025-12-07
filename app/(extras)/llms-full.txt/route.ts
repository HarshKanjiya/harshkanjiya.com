import { format } from "date-fns";

import { SITE_INFO } from "@/config/site";
import { getAllBlogs } from "@/actions/blog";
import { USER } from "@/data/user";
import { SOCIAL_LINKS } from "@/data/social-links";
import { TECH_STACK } from "@/data/tech-stack";
import { EXPERIENCES } from "@/data/experiences";
import { getAllProjects } from "@/actions/project";
import { getLLMText } from "@/lib/get-llm-text";

const allPosts = getAllBlogs();
const allProjects = getAllProjects();

async function getBlogContent() {
  const text = await Promise.all(
    allPosts.map(
      async (item) =>
        `---\ntitle: "${item.metadata.title}"\ndescription: "${item.metadata.description}"\nlast_updated: "${format(new Date(item.metadata.updatedAt), "MMMM d, yyyy")}"\nsource: "${SITE_INFO.url}/blog/${item.slug}"\n---\n\n${await getLLMText(item)}`
    )
  );
  return text.join("\n\n");
}


const aboutText = `## About

${USER.about.trim()}

### Personal Information

- First Name: ${USER.firstName}
- Last Name: ${USER.lastName}
- Display Name: ${USER.displayName}
- Location: ${USER.address}
- Website: ${USER.website}

### Social Links

${SOCIAL_LINKS.map((item) => `- [${item.title}](${item.href})`).join("\n")}

### Tech Stack

${TECH_STACK.map((item) => `- [${item.title}](${item.href})`).join("\n")}\n`;

const experienceText = `## Experience

${EXPERIENCES.map((item) =>
  item.positions
    .map((position) => {
      const skills = position.skills?.map((skill) => skill).join(", ") || "N/A";
      return `### ${position.title} | ${item.companyName}\n\nDuration: ${position.employmentPeriod.start} - ${position.employmentPeriod.end || "Present"}\n\nSkills: ${skills}\n\n${position.description?.trim()}`;
    })
    .join("\n\n")
).join("\n\n")}
`;

const projectsText = `## Projects

${allProjects.map((item) => {
  const skills = `\n\nSkills: ${item.metadata.tech}`;
  const description = item.metadata.description ? `\n\n${item.metadata.description.trim()}` : "";
  return `## ${item.metadata.title}\n\nProject URL: ${item.metadata.link || item.metadata.githubRepo}${skills}${description}`;
}).join("\n\n")}
`;

async function getContent() {
  return `<SYSTEM>This document contains comprehensive information about ${USER.displayName}'s professional profile, portfolio, and blog content. It includes personal details, work experience, projects, achievements, certifications, and all published blog posts. This data is formatted for consumption by Large Language Models (LLMs) to provide accurate and up-to-date information about ${USER.displayName}'s background, skills, and expertise as a Design Engineer.</SYSTEM>

# chanhdai.com

> A minimal, pixel-perfect dev portfolio, component registry, and blog to showcase my work as a Design Engineer.

${aboutText}
${experienceText}
${projectsText}

## Blogs

${await getBlogContent()}`;
}

export const dynamic = "force-static";

export async function GET() {
  return new Response(await getContent(), {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
