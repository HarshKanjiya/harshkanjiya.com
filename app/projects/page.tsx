import { getAllBlogs } from "@/actions/blog";
import { PostList } from "@/components/blog/post-list";
import { PostListWithSearch } from "@/components/blog/post-list-with-search";
import { PostSearchInput } from "@/components/blog/post-search-input";
import type { Metadata } from "next";
import { SITE_INFO } from "@/config/site";
import { Suspense } from "react";
import { NotData } from "@/components/no-data";

export const metadata: Metadata = {
    title: {
        default: "Projects - Portfolio Showcase",
        template: `%s · ${SITE_INFO.name}`,
    },
    description: "Explore a curated selection of my web development projects, featuring work in React, TypeScript, and modern front-end technologies.",
    applicationName: SITE_INFO.name,
    keywords: SITE_INFO.keywords,
    creator: SITE_INFO.name,
    authors: [{ name: SITE_INFO.name, url: SITE_INFO.url }],
    publisher: SITE_INFO.name,
    alternates: {
        canonical: `${SITE_INFO.url}/projects`,
    },
    openGraph: {
        title: "Projects - Portfolio Showcase",
        description: "Explore a curated selection of my web development projects, featuring work in React, TypeScript, and modern front-end technologies.",
        url: `${SITE_INFO.url}/projects`,
        siteName: SITE_INFO.name,
        type: "website",
        images: [{ url: SITE_INFO.ogImage }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Projects - Portfolio Showcase",
        description: "Explore a curated selection of my web development projects, featuring work in React, TypeScript, and modern front-end technologies.",
        images: [SITE_INFO.ogImage],
    },
};

export default function Page() {

    return (
        <div className="min-h-svh border-x">
            <div className="screen-line-after px-4">
                <h1 className="text-3xl font-semibold">Projects</h1>
            </div>

            <div className="p-4">
                <p className="font-mono text-sm text-balance text-muted-foreground">
                    {metadata.description}
                </p>
            </div>

            {/* <div className="screen-line-before screen-line-after p-2">
                <Suspense
                    fallback={
                        <div className="flex h-9 w-full rounded-lg border border-input shadow-xs dark:bg-input/30" />
                    }
                >
                    <PostSearchInput />
                </Suspense>
            </div> */}

            {/* <Suspense fallback={<PostList posts={allPosts} />}>
                <PostListWithSearch posts={allPosts} />
            </Suspense> */}

            <NotData>
                <div className="font-mono font-medium flex flex-row gap-2 w-full justify-center">
                    <p className="text-muted-foreground">This space is empty for now. </p>
                    <p className="underline underline-offset-1">Not for long.</p>
                </div>
            </NotData>

            <div className="h-4" />
        </div>
    );
}
