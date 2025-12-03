import { cn } from "@/lib/utils";

export default function CustomSeparator({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                "relative flex h-10 w-full border-x border-edge",
                "before:absolute before:-left-[100vw] before:-z-1 before:h-10 before:w-[200vw]",
                "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_2px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-border)]/56 dark:before:[--pattern-foreground:var(--color-border)]/56",
                className
            )}
        />
    );
}
