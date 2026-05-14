import { notFound } from "next/navigation"
import { blockIndex } from "@/lib/registry/block-index"

export async function generateStaticParams() {
  return Object.keys(blockIndex).map((slug) => ({ slug }))
}

export default async function PreviewPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const Component = blockIndex[slug]

  if (!Component) notFound()

  return (
    <div className="fixed inset-0 z-[9999] overflow-auto bg-background">
      <Component />
    </div>
  )
}
