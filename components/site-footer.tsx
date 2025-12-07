import { SITE_INFO, SOURCE_CODE_GITHUB_URL } from "@/config/site";
import { BotIcon, RssIcon } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-hidden px-4 sm:px-2">
      <div className="screen-line-before mx-auto pt-4 md:max-w-216 border-x border-edge">
        <figure className="relative mx-auto flex flex-col items-center sm:items-end px-4 text-center z-10 pb-3">
          <blockquote className="w-full text-center sm:text-right">
            <p className="font-serif italic tracking-tight text-lg sm:text-2xl md:text-3xl">
              “Simplicity is the ultimate sophistication.”
            </p>
          </blockquote>
          <figcaption className="mt-2 text-right text-sm opacity-85 flex flex-col items-center sm:items-end">
            ~ Leonardo da Vinci <span className="opacity-80">(15th century)</span>
          </figcaption>
        </figure>

      </div>
      <div className="screen-line-before mx-auto border-x border-b border-edge pt-4 md:max-w-216">
        <p className="mb-1 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Inspired by chanhdai.com & ui.shadcn.com
        </p>

        <p className="mb-4 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Built by{" "}
          <a
            className="link"
            href="https://x.com/harsh_kaniiya"
            target="_blank"
            rel="noopener"
          >
            harshkanjiya
          </a>
          . The source code is available on{" "}
          <a
            className="link"
            href={SOURCE_CODE_GITHUB_URL}
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
          .
        </p>
        <div className="screen-line-before flex w-full before:z-1 after:z-1">
          <div className="mx-auto flex items-center justify-center gap-3 border-x border-edge bg-background px-4">
            <a
              className="flex font-mono text-xs font-medium text-muted-foreground w-24 items-center justify-center"
              href={`${SITE_INFO.url}/llms.txt`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BotIcon className="size-4 mr-2" />
              <span className="sr-only">llms.txt</span>
              llms.txt
            </a>

            <Separator />

            <a
              className="flex font-mono text-xs font-medium text-muted-foreground w-24 items-center justify-center"
              href={`${SITE_INFO.url}/rss`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <RssIcon className="size-4 mr-2" />
              <span className="sr-only">RSS</span>
              RSS
            </a>
          </div>
        </div>
      </div>
      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-2" />
      </div>
    </footer>
  );
}

function Separator() {
  return <div className="flex h-11 w-px bg-edge" />;
}
