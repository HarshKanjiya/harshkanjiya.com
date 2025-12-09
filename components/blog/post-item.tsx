import { Blog } from "@/types/blog";
import { format } from "date-fns";
import { PinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function PostItem({
    post,
    shouldPreloadImage,
}: {
    post: Blog;
    shouldPreloadImage?: boolean;
}) {
    return (
        // <div className="">
            <Link href={`/blog/${post.slug}`} className="flex items-center justify-between flex-1 flex-col border-edge border h-full overflow-hidden bg-accent dark:bg-accent/50 relative group">
                <h3 className="w-full py-1.5 px-4 text-muted-foreground text-left group-hover:underline">
                    {post.metadata.title}
                    {post.metadata.new && (
                        <span className="ml-2 inline-block size-2 -translate-y-px rounded-full bg-info">
                            <span className="sr-only">New</span>
                        </span>
                    )}
                </h3>
                {post.metadata.pinned && (
                    <span className="absolute top-1.5 right-1.5 flex size-6 items-center justify-center rounded-md bg-secondary">
                        <PinIcon className="size-4 rotate-45 text-secondary-foreground" />
                        <span className="sr-only">Pinned</span>
                    </span>
                )}
                <div className="p-0.5 pt-0 flex-1 h-full flex w-full">
                    <div className="flex-1 p-1.5 flex flex-col bg-background outline outline-muted/50 rounded-lg relative overflow-hidden group w-full">
                        {post.metadata.image && (
                            <div className="relative select-none [&_img]:aspect-1200/630 [&_img]:rounded-sm">
                                <Image
                                    src={post.metadata.image}
                                    alt={post.metadata.title}
                                    width={1200}
                                    height={630}
                                    quality={100}
                                    priority={shouldPreloadImage}
                                    unoptimized
                                />
                                <div className="pointer-events-none absolute inset-0 rounded-lg outline outline-muted/50 ring-inset dark:ring-white/10" />
                            </div>
                        )}

                        <div className="flex flex-col gap-2 pt-2.5 px-1 pb-1">
                            <p className="text-sm text-muted-foreground leading-snug text-ellipsis line-clamp-2 underline-offset-4 w-full">
                                {post.metadata.description}
                            </p>
                            <dl>
                                <dt className="sr-only">Published on</dt>
                                <dd className="text-sm text-muted-foreground">
                                    <time dateTime={new Date(post.metadata.createdAt).toISOString()}>
                                        {format(new Date(post.metadata.createdAt), "d MMM yyyy")}
                                    </time>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </Link>
        // </div>
    );
}
