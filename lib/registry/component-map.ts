/** Maps component slugs to their source file paths (relative to project root). Used by the rehype plugin to inject source code into MDX. */
export const COMPONENT_SOURCE_MAP: Record<string, string> = {
  "hello-world": "components/hello-world/hello-world.tsx",
}

/** Maps block slugs to their source file paths. */
export const BLOCK_SOURCE_MAP: Record<string, string> = {
  "hero-dummy": "components/blocks/hero-dummy/hero-dummy.tsx",
}
