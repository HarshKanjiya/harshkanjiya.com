import Link from "next/link"

export function HeroDummy() {
  return (
    <section className="flex min-h-[480px] flex-col items-center justify-center gap-6 px-6 py-20 text-center">
      <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
        Build.{" "}
        <span className="text-muted-foreground">Ship.</span>{" "}
        Repeat.
      </h1>
      <p className="max-w-lg text-base text-muted-foreground">
        Indie developer building products in public. This is a dummy hero block
        — install it via the shadcn CLI.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="#"
          className="rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-80"
        >
          Get Started
        </Link>
        <Link
          href="#"
          className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-muted"
        >
          Learn More
        </Link>
      </div>
    </section>
  )
}
