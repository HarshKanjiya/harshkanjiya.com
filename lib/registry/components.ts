export type RegistryComponent = {
  slug: string
  title: string
  description: string
  installCmd: string
}

export const REGISTRY_COMPONENTS: RegistryComponent[] = [
  {
    slug: "hello-world",
    title: "Hello World",
    description: "A simple animated greeting component.",
    installCmd: "@harshexists/hello-world",
  },
]
