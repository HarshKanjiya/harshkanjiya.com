import { getAllProjects } from "@/actions/project";
import { ProjectList } from "@/components/project/project-list";
import { ProjectListWithSearch } from "@/components/project/project-list-with-search";
import { ProjectSearchInput } from "@/components/project/project-search-input";
import { SITE_INFO } from "@/config/site";
import type { Metadata } from "next";
import { Suspense } from "react";
import CustomSeparator from "@/components/custom-separator";

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
    const allProjects = getAllProjects();

    return (
        <main className="mx-auto w-full *:[[id]]:scroll-mt-22 min-h-svh">
            <div className="px-0">
                <div className="px-0 pt-12">
                    <h1 className="text-3xl font-semibold px-2">Projects</h1>
                </div>

                <div className="p-2">
                    <p className="font-mono text-sm text-balance text-muted-foreground">
                        {metadata.description}
                    </p>
                </div>
            </div>
            <CustomSeparator />

            <Suspense
                fallback={
                    <div className="flex h-9 w-full rounded-lg border border-input shadow-xs dark:bg-input/30" />
                }
            >
                <ProjectSearchInput />
            </Suspense>

            <CustomSeparator />

            <Suspense fallback={<ProjectList projects={allProjects} />}>
                <ProjectListWithSearch posts={allProjects} />
            </Suspense>

            <CustomSeparator />
            <div className="h-4" />
        </main>
    );
}
