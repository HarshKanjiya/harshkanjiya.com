import { getTableOfContents } from "fumadocs-core/content/toc";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { BlogPosting as PageSchema, WithContext } from "schema-dts";

import { findNeighbour, getAllBlogs, getBlogBySlug } from "@/actions/blog";
import { InlineTOC } from "@/components/blog/inline-toc";
import { MDX } from "@/components/blog/mdx";
import { PostKeyboardShortcuts } from "@/components/blog/post-keyboard-shortcuts";
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
import { cn } from "@/lib/utils";
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
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return notFound();
  }

  const { title, description, image, createdAt, updatedAt } = blog.metadata;

  const postUrl = getPostUrl(blog);
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPageJsonLd(post)).replace(/</g, "\\u003c"),
        }}
      />

      <PostKeyboardShortcuts basePath="/blog" previous={previous} next={next} />

      <div className="flex items-center justify-between p-2 pl-4">
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
          {/* <LLMCopyButtonWithViewOptions
            markdownUrl={`${getPostUrl(post)}.mdx`}
            isComponent={post.metadata.category === "components"}
          /> */}

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

      <div className="screen-line-before screen-line-after">
        <div
          className={cn(
            "h-8",
            "before:absolute before:-left-[100vw] before:-z-1 before:h-full before:w-[200vw]",
            "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56"
          )}
        />
      </div>

      <Prose className="px-4">
        <h1 className="screen-line-after text-3xl font-semibold">
          {post.metadata.title}
        </h1>

        <p className="text-muted-foreground">{post.metadata.description}</p>

        <InlineTOC items={toc} />

        <div>
          <MDX code={post.content} />
        </div>
      </Prose>

      <div className="screen-line-before h-4 w-full" />
    </>
  );
}

function getPostUrl(post: Blog) {
  const isComponent = post.metadata.category === "components";
  return isComponent ? `/components/${post.slug}` : `/blog/${post.slug}`;
}
