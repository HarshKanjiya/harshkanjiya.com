"use client";

import { useFilteredPosts } from "@/hooks/use-filtered-posts";
import { PostList } from "./post-list";
import { Blog } from "@/types/blog";

export function PostListWithSearch({ posts }: { posts: Blog[] }) {
  const filteredPosts = useFilteredPosts(posts);
  return <PostList posts={filteredPosts} />;
}
