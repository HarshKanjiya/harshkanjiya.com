import { cn } from "@/lib/utils";

export default function CustomSeparator({ className }: { className?: string }) {
    return (
        <div className="relative py-6">
            {/* <div className="w-full h-px absolute right-0 top-1/2 -translate-y-1/2 bg-[rgba(55,50,47,0.12)] dark:bg-[rgba(255,255,255,0.12)] shadow-[1px_0px_0px_white] dark:shadow-[1px_0px_0px_black] z-0"></div> */}
        </div>
        // <div
        //     className={cn(
        //         "relative flex h-6 md:h-10 w-full opacity-75",
        //         "before:absolute before:-left-[100vw] before:-z-1 before:h-6 md:before:h-10 before:w-[200vw]",
        //         "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_2px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-border)]/56 dark:before:[--pattern-foreground:var(--color-border)]/56",
        //         className
        //     )}
        // />
    );
}
