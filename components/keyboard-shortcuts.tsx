"use client";

import { Blog } from "@/types/blog";
import { Project } from "@/types/projects";
import { useRouter } from "next/navigation";
import { useHotkeys } from "react-hotkeys-hook";

export function KeyboardShortcuts({
  basePath,
  previous,
  next,
}: {
  basePath: string;
  previous: Blog | Project | null;
  next: Blog | Project | null;
}) {
  const router = useRouter();

  const navigate = (post: Blog | Project | null) => {
    if (post) {
      router.push(`${basePath}/${post.slug}`);
    }
  };

  useHotkeys("ArrowRight", () => navigate(next));
  useHotkeys("ArrowLeft", () => navigate(previous));

  return null;
}
