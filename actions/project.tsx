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

export function findNeighbour(posts: Project[], slug: string) {
    const len = posts.length;

    for (let i = 0; i < len; ++i) {
        if (posts[i].slug === slug) {
            return {
                previous: i > 0 ? posts[i - 1] : null,
                next: i < len - 1 ? posts[i + 1] : null,
            };
        }
    }

    return { previous: null, next: null };
}
