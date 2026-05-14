import type { Metadata } from "next"
import Link from "next/link"
import { SITE_INFO } from "@/config/site"
import { REGISTRY_COMPONENTS } from "@/lib/registry/components"
import { CodeBlockCommand } from "@/components/code-block-command"

export const metadata: Metadata = {
  title: "Components",
  description: "Pixel-perfect, copy-paste ready components for your Next.js projects.",
  alternates: {
    canonical: `${SITE_INFO.url}/components`,
  },
  openGraph: {
    title: "Components",
    description: "Pixel-perfect, copy-paste ready components for your Next.js projects.",
    url: `${SITE_INFO.url}/components`,
    siteName: SITE_INFO.name,
    type: "website",
  },
}

export default function ComponentsPage() {
  return (
    <div className="min-h-svh border-x border-edge">
      <div className="screen-line-after px-4">
        <h1 className="text-3xl font-semibold">Components</h1>
      </div>

      <div className="p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          Pixel-perfect, copy-paste ready. Add any component with the shadcn CLI.
        </p>
      </div>

      <div className="screen-line-before screen-line-after p-4">
        <p className="mb-2 font-mono text-xs text-muted-foreground">
          Global install
        </p>
        <CodeBlockCommand
          __pnpm__="pnpm dlx shadcn@latest add https://harshkanjiya.com/r/hello-world.json"
          __npm__="npx shadcn@latest add https://harshkanjiya.com/r/hello-world.json"
          __yarn__="yarn dlx shadcn@latest add https://harshkanjiya.com/r/hello-world.json"
          __bun__="bunx shadcn@latest add https://harshkanjiya.com/r/hello-world.json"
        />
      </div>

      <ul className="divide-y divide-edge">
        {REGISTRY_COMPONENTS.map((comp) => (
          <li key={comp.slug}>
            <Link
              href={`/components/${comp.slug}`}
              className="flex items-center justify-between gap-4 px-4 py-4 transition-colors hover:bg-muted/30"
            >
              <div>
                <p className="font-mono text-sm font-medium text-foreground">
                  {comp.title}
                </p>
                <p className="mt-0.5 font-mono text-xs text-muted-foreground">
                  {comp.description}
                </p>
              </div>
              <span className="shrink-0 font-mono text-xs text-muted-foreground">
                @harshexists/{comp.slug}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="h-4" />
    </div>
  )
}
