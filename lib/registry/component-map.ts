/** Maps component slugs to their source file paths (relative to project root). Used by the rehype plugin to inject source code into MDX. */
export const COMPONENT_SOURCE_MAP: Record<string, string> = {
  "hello-world": "components/hello-world/hello-world.tsx",
  "realistic-button": "components/realistic-button/realistic-button.tsx",
  "vertical-toggle": "components/vertical-toggle/vertical-toggle.tsx",
  "toggle": "components/toggle/toggle.tsx",
  "pintch-switch": "components/pintch-switch/pintch-switch.tsx",
  "shutter-cta": "components/shutter-cta/shutter-cta.tsx",
  "push-button": "components/push-button/push-button.tsx",
}

/** Maps block slugs to their source file paths. */
export const BLOCK_SOURCE_MAP: Record<string, string> = {
  "hero-dummy": "components/blocks/hero-dummy/hero-dummy.tsx",
}
