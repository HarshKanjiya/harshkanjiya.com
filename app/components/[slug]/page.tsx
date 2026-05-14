import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArrowLeftIcon } from "lucide-react"
import Link from "next/link"

import { MDX } from "@/components/blog/mdx"
import { Button } from "@/components/ui/button"
import { Prose } from "@/components/ui/typography"
import { SITE_INFO } from "@/config/site"
import { REGISTRY_COMPONENTS } from "@/lib/registry/components"
import {
  getAllRegistryComponents,
  getRegistryComponentBySlug,
} from "@/actions/registry"

export async function generateStaticParams() {
  return REGISTRY_COMPONENTS.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const item = getRegistryComponentBySlug(slug)
  if (!item) return notFound()

  return {
    title: item.metadata.title,
    description: item.metadata.description,
    alternates: {
      canonical: `${SITE_INFO.url}/components/${slug}`,
    },
    openGraph: {
      title: item.metadata.title,
      description: item.metadata.description,
      url: `${SITE_INFO.url}/components/${slug}`,
    },
  }
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const item = getRegistryComponentBySlug(slug)

  if (!item) notFound()

  return (
    <div className="min-h-svh border-x border-edge">
      <div className="flex items-center justify-between p-2 pl-4">
        <Button
          className="h-7 gap-2 rounded-lg px-0 font-mono text-muted-foreground"
          variant="link"
          asChild
        >
          <Link href="/components">
            <ArrowLeftIcon />
            Components
          </Link>
        </Button>
      </div>

      <div className="screen-line-before screen-line-after">
        <div className="h-8 before:absolute before:-left-[100vw] before:-z-1 before:h-full before:w-[200vw] before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56" />
      </div>

      <Prose className="px-4">
        <h1 className="screen-line-after text-3xl font-semibold">
          {item.metadata.title}
        </h1>
        <p className="text-muted-foreground">{item.metadata.description}</p>
        <div>
          <MDX code={item.content} />
        </div>
      </Prose>

      <div className="screen-line-before h-4 w-full" />
    </div>
  )
}
