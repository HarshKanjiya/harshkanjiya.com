import { getTableOfContents } from "fumadocs-core/content/toc";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { BlogPosting as PageSchema, WithContext } from "schema-dts";

import { getAllBlogs, getBlogBySlug } from "@/actions/blog";
import { InlineTOC } from "@/components/blog/inline-toc";
import { MDX } from "@/components/blog/mdx";
import { PostShareMenu } from "@/components/blog/post-share-menu";
import CustomSeparator from "@/components/custom-separator";
import { KeyboardShortcuts } from "@/components/keyboard-shortcuts";
import { TOCMinimap } from "@/components/toc-minimap";
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
import { Blog } from "@/types/blog";

export async function generateStaticParams() {
  const blogs = getAllBlogs();
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
  const project = getBlogBySlug(slug);

  if (!project) {
    return notFound();
  }

  const { title, description, image, createdAt, updatedAt } = project.metadata;

  const postUrl = getPostUrl(project);
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

function getPageJsonLd(blog: Blog): WithContext<PageSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.metadata.title,
    description: blog.metadata.description,
    image:
      blog.metadata.image ||
      `/og/simple?title=${encodeURIComponent(blog.metadata.title)}`,
    url: `${SITE_INFO.url}${getPostUrl(blog)}`,
    datePublished: new Date(blog.metadata.createdAt).toISOString(),
    dateModified: new Date(blog.metadata.updatedAt).toISOString(),
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
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const toc = getTableOfContents(post.content);

  const allBlogs = getAllBlogs();
  const { previous, next } = findNeighbour(allBlogs, slug);

  return (
    <main className="mx-auto w-full *:[[id]]:scroll-mt-22 min-h-svh">

      <TOCMinimap
        items={toc}
        className="fixed top-1/3 right-0 shadow-sm rounded-lg"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPageJsonLd(post)).replace(/</g, "\\u003c"),
        }}
      />

      <CustomSeparator />
      <KeyboardShortcuts basePath="/blog" previous={previous} next={next} />

      <div className="flex screen-line-after screen-line-before items-center justify-between p-2">
        <Button
          className="h-7 gap-2 rounded-lg px-0 font-mono text-muted-foreground"
          variant="link"
          asChild
        >
          <Link href="/blog">
            <ArrowLeftIcon />
            Blog
          </Link>
        </Button>

        <div className="flex items-center gap-2">
          <PostShareMenu url={getPostUrl(post)} />

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

      <Prose className="p-4">
        <div className="flex items-center justify-between gap-3 py-4">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-semibold m-0!">
              {post.metadata.title}
            </h1>
          </div>
        </div>

        <p className="text-muted-foreground mb-4 mt-0">{post.metadata.description}</p>
        {
          post.metadata.image && (
            <Image
              src={post.metadata.image}
              alt={post.metadata.title}
              width={800}
              height={400}
              className="my-4 rounded-md border border-border object-cover"
            />
          )
        }

        <InlineTOC items={toc} />

        <div>
          <MDX code={post.content} />
        </div>
      </Prose>

      <CustomSeparator />
      <div className="w-full h-4" />

    </main>
  );
}

function getPostUrl(post: Blog) {
  const isComponent = post.metadata.category === "components";
  return isComponent ? `/components/${post.slug}` : `/blog/${post.slug}`;
}
