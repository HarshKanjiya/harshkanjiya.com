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
          <div className="absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
            <div className="border-r border-edge" />
            <div className="border-l border-edge" />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {posts.map((post, index) => (
              <PostItem
                key={post.slug}
                post={post}
                shouldPreloadImage={index <= 4}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
