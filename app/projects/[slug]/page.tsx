import { getTableOfContents } from "fumadocs-core/content/toc";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { BlogPosting as PageSchema, WithContext } from "schema-dts";

import { InlineTOC } from "@/components/blog/inline-toc";
import { MDX } from "@/components/blog/mdx";
import { KeyboardShortcuts } from "@/components/keyboard-shortcuts";
import { PostShareMenu } from "@/components/blog/post-share-menu";
import { Button } from "@/components/ui/button";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Prose } from "@/components/ui/typography";
import { SITE_INFO } from "@/config/site";
import { USER } from "@/data/user";
import { cn, findNeighbour } from "@/lib/utils";
import { getAllProjects, getProjectBySlug } from "@/actions/project";
import { Project } from "@/types/projects";
import Image from "next/image";

export async function generateStaticParams() {
    const blogs = getAllProjects();
    return blogs.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const slug = (await params).slug;
    const project = getProjectBySlug(slug);

    if (!project) {
        return notFound();
    }

    const { title, description, image, createdAt, updatedAt } = project.metadata;

    const postUrl = `/projects/${project.slug}`;
    const ogImage = image || `/og/simple?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        alternates: {
            canonical: postUrl,
        },
        openGraph: {
            url: postUrl,
            type: "article",
            publishedTime: new Date(createdAt).toISOString(),
            modifiedTime: new Date(updatedAt).toISOString(),
            images: {
                url: ogImage,
                width: 1200,
                height: 630,
                alt: title,
            },
        },
        twitter: {
            card: "summary_large_image",
            images: [ogImage],
        },
    };
}

function getPageJsonLd(project: Project): WithContext<PageSchema> {
    return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: project.metadata.title,
        description: project.metadata.description,
        image:
            project.metadata.image ||
            `/og/simple?title=${encodeURIComponent(project.metadata.title)}`,
        url: `${SITE_INFO.url}/projects/${project.slug}`,
        datePublished: new Date(project.metadata.createdAt).toISOString(),
        dateModified: new Date(project.metadata.updatedAt).toISOString(),
        author: {
            "@type": "Person",
            name: USER.displayName,
            identifier: USER.username,
            image: USER.avatar,
        },
    };
}

export default async function Page({
    params,
}: {
    params: Promise<{
        slug: string;
    }>;
}) {
    const slug = (await params).slug;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    const toc = getTableOfContents(project.content);

    const allProjects = getAllProjects();
    const { previous, next } = findNeighbour(allProjects, slug);

    return (
        <div className="min-h-svh border-x border-edge">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(getPageJsonLd(project)).replace(/</g, "\\u003c"),
                }}
            />

            <KeyboardShortcuts basePath="/projects" previous={previous} next={next} />
            <div className="flex items-center justify-between p-2 pl-4">
                <Button
                    className="h-7 gap-2 rounded-lg px-0 font-mono text-muted-foreground"
                    variant="link"
                    asChild
                >
                    <Link href="/projects">
                        <ArrowLeftIcon />
                        Projects
                    </Link>
                </Button>

                <div className="flex items-center gap-2">
                    {/* <LLMCopyButtonWithViewOptions
            markdownUrl={`${getPostUrl(post)}.mdx`}
            isComponent={post.metadata.category === "components"}
          /> */}

                    <PostShareMenu url={`/projects/${project.slug}`} />

                    {previous && (
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="secondary" size="icon-sm" asChild>
                                    <Link href={`/blog/${previous.slug}`}>
                                        <ArrowLeftIcon />
                                        <span className="sr-only">Previous</span>
                                    </Link>
                                </Button>
                            </TooltipTrigger>

                            <TooltipContent className="pr-2 pl-3">
                                <div className="flex items-center gap-3">
                                    Previous Post
                                    <KbdGroup>
                                        <Kbd>
                                            <ArrowLeftIcon />
                                        </Kbd>
                                    </KbdGroup>
                                </div>
                            </TooltipContent>
                        </Tooltip>
                    )}

                    {next && (
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="secondary" size="icon-sm" asChild>
                                    <Link href={`/blog/${next.slug}`}>
                                        <span className="sr-only">Next</span>
                                        <ArrowRightIcon />
                                    </Link>
                                </Button>
                            </TooltipTrigger>

                            <TooltipContent className="pr-2 pl-3">
                                <div className="flex items-center gap-3">
                                    Next Post
                                    <KbdGroup>
                                        <Kbd>
                                            <ArrowRightIcon />
                                        </Kbd>
                                    </KbdGroup>
                                </div>
                            </TooltipContent>
                        </Tooltip>
                    )}
                </div>
            </div>

            <div className="screen-line-before">
                <div
                    className={cn(
                        "h-8",
                        "before:absolute before:-left-[100vw] before:-z-1 before:h-full before:w-[200vw]",
                        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56"
                    )}
                />
            </div>

            <Prose className="px-4">
                <div className="flex items-center justify-between gap-3 screen-line-before screen-line-after">
                    <div className="flex items-center gap-2">
                        {
                            project.metadata.logo && (
                                <Image
                                    src={project.metadata.logo}
                                    alt={project.metadata.title}
                                    width={30}
                                    height={30}
                                    className="rounded-xl select-none corner-squircle supports-corner-shape:rounded-[50%] object-cover m-0! border border-edge"
                                />
                            )
                        }
                        <h1 className="text-3xl font-semibold m-0!">
                            {project.metadata.title}
                        </h1>
                    </div>
                    <div className="flex items-center gap-3">
                        {
                            project.metadata.githubRepo && (
                                <Link
                                    href={project.metadata.githubRepo}
                                    target="_blank">
                                    <Image
                                        src="https://assets.harshkanjiya.com/social/github.webp"
                                        alt="GitHub Repository"
                                        width={32}
                                        height={32}
                                        className="rounded-full object-cover m-0!"
                                    />
                                </Link>
                            )
                        }
                    </div>
                </div>

                <p className="text-muted-foreground">{project.metadata.description}</p>

                {
                    project.metadata.image && (
                        <Image
                            src={project.metadata.image}
                            alt={project.metadata.title}
                            width={800}
                            height={400}
                            className="my-4 rounded-md border border-border object-cover"
                        />
                    )
                }

                <InlineTOC items={toc} />

                <div>
                    <MDX code={project.content} />
                </div>
            </Prose>

            <div className="screen-line-before h-4 w-full" />
        </div>
    );
}