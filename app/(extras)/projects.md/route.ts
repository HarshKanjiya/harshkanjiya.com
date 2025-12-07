import { getAllProjects } from "@/actions/project";

const allProjects = getAllProjects();

const content = `# Projects

${allProjects.map((item) => {
  const skills = `\n\nSkills: ${item.metadata.tech}`;
  const description = item.metadata.description ? `\n\n${item.metadata.description.trim()}` : "";
  return `## ${item.metadata.title}\n\nProject URL: ${item.metadata.link || item.metadata.githubRepo}${skills}${description}`;
}).join("\n\n")}
`;

export const dynamic = "force-static";

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
