import { getAllBlogs } from "@/actions/blog";
import { Panel, PanelHeader, PanelTitle } from "@/components/panel";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { PostItem } from "../post-item";

export function Blog() {
    const allPosts = getAllBlogs();

    return (
        <Panel id="blog">
            <PanelHeader>
                <PanelTitle className="flex gap-2 items-center group">
                    Blog
                    <Link
                        href="#blog"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                        #
                    </Link>
                </PanelTitle>
            </PanelHeader>

            <div className="relative py-4">
                <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
                    <div className="border-r border-edge"></div>
                    <div className="border-l border-edge"></div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {allPosts.slice(0, 4).map((post) => (
                        <PostItem key={post.slug} post={post} />
                    ))}
                </div>
            </div>

            {
                allPosts.length > 4 && (
                    <div className="screen-line-before flex justify-center py-2">
                        <Button variant="default" asChild>
                            <Link href="/blog">
                                All Posts
                                <ArrowRightIcon />
                            </Link>
                        </Button>
                    </div>
                )
            }
        </Panel>
    );
}
