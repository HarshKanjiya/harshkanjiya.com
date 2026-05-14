"use client"

import { REGISTRY_BLOCKS, type RegistryBlock } from "@/lib/registry/blocks"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlockCommand } from "@/components/code-block-command"

const CATEGORIES = [
  { value: "featured", label: "Featured" },
  { value: "marketing", label: "Marketing" },
  { value: "content", label: "Content" },
  { value: "application", label: "Application" },
] as const

type Category = (typeof CATEGORIES)[number]["value"]

function BlockCard({ block }: { block: RegistryBlock }) {
  const installUrl = `https://harshkanjiya.com/r/${block.slug}.json`

  return (
    <div className="overflow-hidden rounded-xl border border-edge bg-background">
      <div className="relative aspect-video w-full bg-muted/30">
        <iframe
          src={`/preview/${block.slug}`}
          title={block.title}
          className="h-full w-full"
          loading="lazy"
        />
      </div>

      <div className="border-t border-edge p-4">
        <div className="mb-3">
          <p className="font-mono text-sm font-medium text-foreground">
            {block.title}
          </p>
          <p className="mt-0.5 font-mono text-xs text-muted-foreground">
            {block.description}
          </p>
        </div>

        <CodeBlockCommand
          __pnpm__={`pnpm dlx shadcn@latest add ${installUrl}`}
          __npm__={`npx shadcn@latest add ${installUrl}`}
          __yarn__={`yarn dlx shadcn@latest add ${installUrl}`}
          __bun__={`bunx shadcn@latest add ${installUrl}`}
        />
      </div>
    </div>
  )
}

function BlockList({ category }: { category: Category }) {
  const blocks =
    category === "featured"
      ? REGISTRY_BLOCKS
      : REGISTRY_BLOCKS.filter((b) => b.category === category)

  if (blocks.length === 0) {
    return (
      <p className="py-12 text-center font-mono text-sm text-muted-foreground">
        No blocks in this category yet.
      </p>
    )
  }

  return (
    <div className="grid gap-8">
      {blocks.map((block) => (
        <BlockCard key={block.slug} block={block} />
      ))}
    </div>
  )
}

export default function BlocksPage() {
  return (
    <div className="min-h-svh border-x border-edge">
      <div className="screen-line-after px-4">
        <h1 className="text-3xl font-semibold">Blocks</h1>
      </div>

      <div className="p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          Ready-made section blocks. Preview, copy, and install in one command.
        </p>
      </div>

      <div className="screen-line-before screen-line-after px-4 pb-6 pt-2">
        <Tabs defaultValue="featured">
          <TabsList className="mb-4 h-auto gap-1 bg-transparent p-0">
            {CATEGORIES.map((cat) => (
              <TabsTrigger
                key={cat.value}
                value={cat.value}
                className="rounded-md px-3 py-1.5 font-mono text-xs data-[state=active]:bg-foreground data-[state=active]:text-background"
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {CATEGORIES.map((cat) => (
            <TabsContent key={cat.value} value={cat.value}>
              <BlockList category={cat.value} />
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <div className="h-4" />
    </div>
  )
}
