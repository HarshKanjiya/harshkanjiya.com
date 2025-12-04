"use client";

import { Blog } from "@/types/blog";
import { useRouter } from "next/navigation";
import { useHotkeys } from "react-hotkeys-hook";

export function PostKeyboardShortcuts({
  basePath,
  previous,
  next,
}: {
  basePath: string;
  previous: Blog | null;
  next: Blog | null;
}) {
  const router = useRouter();

  const navigate = (post: Blog | null) => {
    if (post) {
      router.push(`${basePath}/${post.slug}`);
    }
  };

  useHotkeys("ArrowRight", () => navigate(next));
  useHotkeys("ArrowLeft", () => navigate(previous));

  return null;
}
