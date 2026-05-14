import { Blog } from "@/types/blog";
import { PostItem } from "./post-item";
import { NotData } from "../no-data";

export function PostList({ posts }: { posts: Blog[] }) {
  return (
    <div className="relative">
      {posts.length === 0 ? (
        <NotData>
          <div className="font-mono font-medium flex flex-row gap-2 w-full justify-center">
            <p className="text-muted-foreground">No Blogs for this query!</p>
          </div>
        </NotData>
      ) : (
        <>
          <div className="relative">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {posts.map((post, id) => (
                <div key={id}>
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
