import { getMDXData } from "@/lib/mdx-reader";
import { Blog, BlogMetadata } from "@/types/blog";
import path from "path";

export function getAllBlogs() {
    return getMDXData<BlogMetadata>(path.join(process.cwd(), "content/blog")).sort(
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

export function getBlogBySlug(slug: string) {
    return getAllBlogs().find((blog) => blog.slug === slug);
}

export function getBlogsByCategory(category: string) {
    return getAllBlogs().filter((blog) => blog.metadata?.category === category);
}