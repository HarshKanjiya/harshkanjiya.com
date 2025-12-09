import { getAllBlogs } from "@/actions/blog";
import { Panel, PanelHeader, PanelTitle } from "@/components/panel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PostItem } from "../blog/post-item";
import { ChevronRightIcon } from "lucide-react";

export function Blog() {
    const allPosts = getAllBlogs();

    return (
        <Panel id="blog">
            <PanelHeader>
                <PanelTitle className="flex gap-2 items-center justify-between">
                    <a href="#blog" className="flex gap-2 group">
                        Blog
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">#</span>
                    </a>
                    {
                        allPosts.length > 0 && (
                            <Button variant="link" asChild size="sm" className="pr-0!">
                                <Link href="/blog">
                                    View All
                                    <ChevronRightIcon />
                                </Link>
                            </Button>

                        )
                    }
                </PanelTitle>
            </PanelHeader>

            <div className="relative py-4 px-0">
                <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 sm:grid-cols-2 px-4">
                    <div className="border-x border-edge"></div>
                    <div className="border-x border-edge"></div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 px-4">
                    {allPosts.slice(0, 2).map((post, id) => (
                        <div className="screen-line-after screen-line-before" key={id}>
                            <PostItem key={post.slug} post={post} />
                        </div>
                    ))}
                </div>
            </div>
        </Panel>
    );
}
