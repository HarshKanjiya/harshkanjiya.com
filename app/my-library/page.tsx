import BookItem from "@/components/book-item";
import { BOOKS } from "@/data/books";
import { cn } from "@/lib/utils";
import { PinIcon } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "My Library - Harsh Kanjiya",
    description: "List of all the books that I have read or plan to read.",
};

export default function Page() {
    return (
        <div className="min-h-svh border-x border-edge">
            <div className="screen-line-after px-4">
                <h1 className="text-3xl font-semibold">My Library</h1>
            </div>

            <div className="p-4 border-b border-edge pb-1">
                <p className="font-mono text-sm text-balance text-muted-foreground">
                    {metadata.description}
                </p>
            </div>

            {/* <div className="px-4">
                <div className="relative pt-4">
                    <div className="absolute inset-0 -z-1 grid grid-cols-2 gap-4 max-sm:hidden sm:grid-cols-4">
                        <div className="border-x border-edge" />
                        <div className="border-x border-edge" />
                        <div className="border-x border-edge" />
                        <div className="border-x border-edge" />
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                        {BOOKS.map((book, index) => (
                            <BookItem
                                key={book.title}
                                {...book}
                            />
                        ))}
                    </div>
                </div>
            </div> */}

            <div className="relative mt-4">
                <div className="absolute inset-0 -z-1 grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <div className="border-x border-edge"></div>
                    <div className="border-x border-edge"></div>
                    <div className="border-x border-edge"></div>
                    <div className="border-x border-edge"></div>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {BOOKS.map(({ title, imageUrl, isCompleted, isReading, recommended }) => (
                        <div
                            key={title}
                            className={cn(
                                "group/post flex items-center gap-4 p-4",
                                "max-sm:screen-line-before max-sm:screen-line-after",
                                "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
                            )}
                        >

                            <div className="group relative flex flex-col flex-1 gap-3 w-full h-full">
                                {
                                    recommended && (
                                        <span className="absolute top-1.5 right-1.5 flex size-6 items-center justify-center z-40 rounded-md bg-foreground">
                                            <PinIcon className="size-4 rotate-45 text-secondary" />
                                            <span className="sr-only">Pinned</span>
                                        </span>
                                    )
                                }

                                <div
                                    className={`relative min-h-32 aspect-square overflow-hidden rounded-lg border border-edge flex items-center justify-center ${isCompleted
                                        ? 'bg-gradient-to-br from-blue-50 to-purple-50 dark:bg-gradient-to-bl dark:from-emerald-500/80 dark:to-teal-700/50'
                                        : 'bg-gray-100 dark:bg-gray-800'
                                        } transition-all duration-300 ${!isCompleted && 'grayscale opacity-70'}`}
                                >
                                    <div className={`relative w-16 h-16 ${!isCompleted && 'grayscale opacity-70'}`}>
                                        <Image
                                            src={imageUrl || '/images/book.png'}
                                            alt={title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <h3 className="leading-snug font-medium text-sm text-balance text-center line-clamp-3 group-hover:text-primary transition-colors">
                                        {title}
                                    </h3>
                                    {isReading && (
                                        <p className="text-xs text-muted-foreground text-center">Currently reading</p>
                                    )}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            <div className="h-4" />
        </div>
    );
}
