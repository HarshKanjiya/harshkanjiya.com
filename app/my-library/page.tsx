import BookItem from "@/components/book-item";
import { BOOKS } from "@/data/books";
import type { Metadata } from "next";

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

            <div className="px-4">
                <div className="relative pt-4">
                    <div className="absolute inset-0 -z-1 grid grid-cols-2 gap-4 max-sm:hidden sm:grid-cols-4">
                        {/* <div className="border-r border-edge" />
                        <div className="border-l border-edge" /> */}

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
            </div>

            <div className="h-4" />
        </div>
    );
}
