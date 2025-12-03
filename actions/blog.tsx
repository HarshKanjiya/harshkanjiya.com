import { Blog, BlogMetadata } from "@/types/blog";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

function parseFrontmatter(fileContent: string) {
    const file = matter(fileContent);

    return {
        metadata: file.data as BlogMetadata,
        content: file.content,
    };
}

function getMDXFiles(dir: string) {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
    const rawContent = fs.readFileSync(filePath, "utf-8");
    return parseFrontmatter(rawContent);
}

function getMDXData(dir: string) {
    const mdxFiles = getMDXFiles(dir);

    return mdxFiles.map<Blog>((file) => {
        const { metadata, content } = readMDXFile(path.join(dir, file));

        const slug = path.basename(file, path.extname(file));

        return {
            metadata,
            slug,
            content,
        };
    });
}

export function getAllBlogs() {
    return getMDXData(path.join(process.cwd(), "content/blog")).sort(
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

export function findNeighbour(posts: Blog[], slug: string) {
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
