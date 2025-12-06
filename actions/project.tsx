import { getMDXData } from "@/lib/mdx-reader";
import { Project, ProjectMetadata } from "@/types/projects";
import path from "path";

export function getAllProjects() {
    return getMDXData<ProjectMetadata>(path.join(process.cwd(), "content/project")).sort(
        (a, b) => {
            if (a.metadata.pinned && !b.metadata.pinned) return -1;
            if (!a.metadata.pinned && b.metadata.pinned) return 1;

            return (
                new Date(b.metadata.createdAt).getTime() -
                new Date(a.metadata.createdAt).getTime()
            );
        }
    );
}

export function getProjectBySlug(slug: string) {
    return getAllProjects().find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: string) {
    return getAllProjects().filter((project) => project.metadata?.category === category);
}
