import path from "path"
import { getMDXData } from "@/lib/mdx-reader"

export type RegistryComponentMetadata = {
  title: string
  description: string
}

const COMPONENTS_DIR = path.join(process.cwd(), "content/components")

export function getAllRegistryComponents() {
  return getMDXData<RegistryComponentMetadata>(COMPONENTS_DIR)
}

export function getRegistryComponentBySlug(slug: string) {
  const all = getAllRegistryComponents()
  return all.find((c) => c.slug === slug) ?? null
}
