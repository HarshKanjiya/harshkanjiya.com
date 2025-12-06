import fs from "fs";
import matter from "gray-matter";
import path from "path";

function parseFrontmatter<T>(fileContent: string) {
    const file = matter(fileContent);

    return {
        metadata: file.data as T,
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

export function getMDXData<T>(dir: string): {
    metadata: T;
    slug: string;
    content: string;
}[] {
    const mdxFiles = getMDXFiles(dir);

    return mdxFiles.map((file) => {
        const { metadata, content } = readMDXFile(path.join(dir, file));

        const slug = path.basename(file, path.extname(file));

        return {
            metadata: metadata as T,
            slug,
            content,
        };
    });
}