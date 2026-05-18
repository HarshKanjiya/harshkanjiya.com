import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import {
  getAllRegistryComponents,
  getRegistryComponentBySlug,
} from "@/actions/registry"
import { MDX } from "@/components/blog/mdx"
import { PostShareMenu } from "@/components/blog/post-share-menu"
import CustomSeparator from "@/components/custom-separator"
import { KeyboardShortcuts } from "@/components/keyboard-shortcuts"
import { Button } from "@/components/ui/button"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Prose } from "@/components/ui/typography"
import { SITE_INFO } from "@/config/site"
import { REGISTRY_COMPONENTS } from "@/lib/registry/components"
import { findNeighbour } from "@/lib/utils"

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

  const allComponents = getAllRegistryComponents()
  const { previous, next } = findNeighbour(allComponents, slug)

  return (
    <main className="mx-auto w-full *:[[id]]:scroll-mt-22 min-h-svh">
      <CustomSeparator />
      <KeyboardShortcuts basePath="/components" previous={previous} next={next} />

      <div className="flex screen-line-before items-center justify-between p-2">
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

        <div className="flex items-center gap-2">
          <PostShareMenu url={`/components/${slug}`} />

          {previous && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="secondary" size="icon-sm" asChild>
                  <Link href={`/components/${previous.slug}`}>
                    <ArrowLeftIcon />
                    <span className="sr-only">Previous</span>
                  </Link>
                </Button>
              </TooltipTrigger>

              <TooltipContent className="pr-2 pl-3">
                <div className="flex items-center gap-3">
                  Previous Component
                  <KbdGroup>
                    <Kbd>
                      <ArrowLeftIcon />
                    </Kbd>
                  </KbdGroup>
                </div>
              </TooltipContent>
            </Tooltip>
          )}

          {next && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="secondary" size="icon-sm" asChild>
                  <Link href={`/components/${next.slug}`}>
                    <span className="sr-only">Next</span>
                    <ArrowRightIcon />
                  </Link>
                </Button>
              </TooltipTrigger>

              <TooltipContent className="pr-2 pl-3">
                <div className="flex items-center gap-3">
                  Next Component
                  <KbdGroup>
                    <Kbd>
                      <ArrowRightIcon />
                    </Kbd>
                  </KbdGroup>
                </div>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>

      <div className="screen-line-before screen-line-after">
        <div className="h-8 before:absolute before:-left-[100vw] before:-z-1 before:h-full before:w-[200vw] before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56" />
      </div>

      <Prose className="p-4">
        <div className="flex items-center justify-between gap-3 py-4">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl sm:text-3xl font-semibold m-0!">
              {item.metadata.title}
            </h1>
          </div>
        </div>

        <p className="text-sm sm:text-base text-muted-foreground mb-6 mt-0">{item.metadata.description}</p>

        <div>
          <MDX code={item.content} />
        </div>
      </Prose>

      <CustomSeparator />
      <div className="h-4 w-full" />
    </main>
  )
}
