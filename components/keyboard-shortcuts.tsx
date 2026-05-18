"use client";

import { useRouter } from "next/navigation";
import { useHotkeys } from "react-hotkeys-hook";

type NavigableItem = { slug: string };

export function KeyboardShortcuts({
  basePath,
  previous,
  next,
}: {
  basePath: string;
  previous: NavigableItem | null;
  next: NavigableItem | null;
}) {
  const router = useRouter();

  const navigate = (post: NavigableItem | null) => {
    if (post) {
      router.push(`${basePath}/${post.slug}`);
    }
  };

  useHotkeys("ArrowRight", () => navigate(next));
  useHotkeys("ArrowLeft", () => navigate(previous));

  return null;
}
