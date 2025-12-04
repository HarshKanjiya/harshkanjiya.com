import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function NotFound({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-[calc(100svh-5.5rem)] flex-col items-center justify-center",
        className
      )}
    >
      <figure className="relative mx-auto flex flex-col items-center sm:items-end px-4 text-center z-10">
        <blockquote className="text-center">
          <p className="font-serif italic tracking-tight text-lg sm:text-2xl md:text-3xl">
            “Even the best map cannot show every path.”
          </p>
        </blockquote>
        <figcaption className="mt-2 text-right text-sm opacity-85 flex flex-col items-center sm:items-end">
          — Anonymous <span className="opacity-80">(traditional proverb origin unknown)</span>
        </figcaption>
      </figure>

      <h1 className="mt-8 mb-6 font-mono text-8xl font-medium">404</h1>

      <Button variant="default" asChild>
        <Link href="/">
          Go to Home
          <ArrowRightIcon />
        </Link>
      </Button>
    </div>
  );
}
