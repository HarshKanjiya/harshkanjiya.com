export type RegistryComponent = {
  slug: string
  title: string
  description: string
  installCmd: string
}

export const REGISTRY_COMPONENTS: RegistryComponent[] = [
  {
    slug: "scifi-input",
    title: "Sci-Fi Input",
    description: "A terminal-style HUD input with glowing cyan borders, scan line animation, and corner brackets.",
    installCmd: "@harshexists/scifi-input",
  },
  {
    slug: "realistic-button",
    title: "Realistic Button",
    description: "A skeuomorphic realistic button with hover and active states.",
    installCmd: "@harshexists/realistic-button",
  },
  // {
  //   slug: "vertical-toggle",
  //   title: "Vertical Toggle",
  //   description: "A sleek vertical toggle component.",
  //   installCmd: "@harshexists/vertical-toggle",
  // },
  {
    slug: "shutter-cta",
    title: "Shutter CTA",
    description: "A slide-to-action button with animated dot pulses.",
    installCmd: "@harshexists/shutter-cta",
  },
  {
    slug: "toggle",
    title: "Toggle",
    description: "A beautiful toggle switch component.",
    installCmd: "@harshexists/toggle",
  },
  // {
  //   slug: "push-button",
  //   title: "Push Button",
  //   description: "A push button component.",
  //   installCmd: "@harshexists/push-button",
  // },
  {
    slug: "pintch-switch",
    title: "Pintch Switch",
    description: "A flat-track toggle with a raised pintch-style thumb.",
    installCmd: "@harshexists/pintch-switch",
  },
  {
    slug: "hello-world",
    title: "Hello World",
    description: "A simple animated greeting component.",
    installCmd: "@harshexists/hello-world",
  },
]
