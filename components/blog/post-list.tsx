import { Blog } from "@/types/blog";
import { PostItem } from "./post-item";
import { NotData } from "../no-data";

export function PostList({ posts }: { posts: Blog[] }) {
  return (
    <div className="relative pt-4">
      {posts.length === 0 ? (
        <NotData>
          <div className="font-mono font-medium flex flex-row gap-2 w-full justify-center">
            <p className="text-muted-foreground">No Blogs for this query!</p>
          </div>
        </NotData>
      ) : (
        <>
          <div className="relative py-4 px-0 screen-line-before screen-line-after">
            <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 sm:grid-cols-2 px-4">
              <div className="border-x border-edge"></div>
              <div className="border-x border-edge"></div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 px-4">
              {posts.map((post, id) => (
                <div className="screen-line-after screen-line-before" key={id}>
                  <PostItem key={post.slug} post={post} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
