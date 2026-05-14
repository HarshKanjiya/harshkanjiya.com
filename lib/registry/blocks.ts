export type RegistryBlock = {
  slug: string
  title: string
  description: string
  installCmd: string
  category: "featured" | "marketing" | "content" | "application"
  files: string[]
}

export const REGISTRY_BLOCKS: RegistryBlock[] = [
  {
    slug: "hero-dummy",
    title: "Hero Dummy",
    description: "A minimal hero section block.",
    installCmd: "@harshexists/hero-dummy",
    category: "marketing",
    files: ["hero-dummy.tsx"],
  },
]
