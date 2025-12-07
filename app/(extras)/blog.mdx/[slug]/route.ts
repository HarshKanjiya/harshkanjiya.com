import { getAllBlogs } from "@/actions/blog";
import { getLLMText } from "@/lib/get-llm-text";
import { notFound } from "next/navigation";


export async function generateStaticParams() {
  const posts = getAllBlogs();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const allPosts = getAllBlogs();
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return new Response(await getLLMText(post), {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
