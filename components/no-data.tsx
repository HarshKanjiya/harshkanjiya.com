
import { cn } from "@/lib/utils";

export function NotData({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <div
      className={cn(
        "flex h-[calc(100svh-5.5rem)] flex-col items-center justify-center w-full",
        className
      )}
    >
      <figure className="relative mx-auto flex flex-col items-center text-center z-10 w-full">
        <blockquote className="text-center border-y w-full">
          <p className="font-serif italic tracking-tight text-lg sm:text-2xl md:text-3xl">
            “In the beginning, there was nothing.”
          </p>
        </blockquote>
        <figcaption className="mt-2 text-right text-sm opacity-85 flex flex-col items-center">
          ~ Hesiod <span className="opacity-80">(8th century BCE)</span>
        </figcaption>
      </figure>

      <h1 className="w-full mt-12 sm:mt-16 mb-6">{children}</h1>
    </div>
  );
}
