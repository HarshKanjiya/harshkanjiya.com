"use client";

import { useFilteredPosts } from "@/hooks/use-filtered-posts";
import { Blog } from "@/types/blog";
import { ProjectList } from "./project-list";

export function ProjectListWithSearch({ posts }: { posts: Blog[] }) {
  const filteredPosts = useFilteredPosts(posts);
  return <ProjectList projects={filteredPosts} />;
}
