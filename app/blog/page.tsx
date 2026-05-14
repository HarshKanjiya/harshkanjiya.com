import { getAllBlogs } from "@/actions/blog";
import { PostList } from "@/components/blog/post-list";
import { PostListWithSearch } from "@/components/blog/post-list-with-search";
import { PostSearchInput } from "@/components/blog/post-search-input";
import type { Metadata } from "next";
import { SITE_INFO } from "@/config/site";
import { Suspense } from "react";
import CustomSeparator from "@/components/custom-separator";

export const metadata: Metadata = {
  title: {
    default: "Blog - Articles on Web Development",
    template: `%s · ${SITE_INFO.name}`,
  },
  description: "Articles on web development, React, TypeScript, and building clean, scalable products.",
  applicationName: SITE_INFO.name,
  keywords: SITE_INFO.keywords,
  creator: SITE_INFO.name,
  authors: [{ name: SITE_INFO.name, url: SITE_INFO.url }],
  publisher: SITE_INFO.name,
  alternates: {
    canonical: `${SITE_INFO.url}/blog`,
  },
  openGraph: {
    title: "Blog",
    description: "Articles on web development, React, TypeScript, and building clean, scalable products.",
    url: `${SITE_INFO.url}/blog`,
    siteName: SITE_INFO.name,
    type: "website",
    images: [{ url: SITE_INFO.ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog",
    description: "Articles on web development, React, TypeScript, and building clean, scalable products.",
    images: [SITE_INFO.ogImage],
  },
};

export default function Page() {
  const allPosts = getAllBlogs();

  return (
    <main className="mx-auto w-full *:[[id]]:scroll-mt-22 min-h-svh">
      <div className="px-0">
        <div className="px-0 pt-12">
          <h1 className="text-3xl font-semibold px-2">Blogs</h1>
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
        <PostSearchInput />
      </Suspense>

      <CustomSeparator />

      <Suspense fallback={<PostList posts={allPosts} />}>
        <PostListWithSearch posts={allPosts} />
      </Suspense>

      <CustomSeparator />
      <div className="h-4" />
    </main>
  );
}
