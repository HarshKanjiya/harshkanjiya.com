import Image from "next/image";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "@/components/panel";
import { TECH_STACK } from "@/data/tech-stack";

export function TeckStack() {
  return (
    <Panel className="screen-line-before screen-line-after" id="stack">
      <h2 className="sr-only">Tech Stack</h2>
      <div className="flex items-center justify-between flex-1 flex-col h-full overflow-hidden dark:bg-accent/50 shadow-[inset_0_3px_2px_rgba(255,255,255,0.021)] bg-accent">
        <h3 className="w-full py-1.5 px-4 text-muted-foreground text-left">
          <a href="#stack">Tech Stack</a>
        </h3>
        <div className="p-0.5 pt-0 flex-1 h-full flex w-full pb-[3px]">
          <div className="flex-1 px-3 py-2 max-sm:pb-3 flex flex-col bg-background outline rounded-sm outline-muted/50 relative overflow-hidden group w-full">
            <PanelContent className="space-y-2.5 bg-background w-full p-0 sm:p-4">
              <ul className="flex flex-wrap gap-4 select-none justify-center">
                {TECH_STACK.map((tech) => {
                  return (
                    <li key={tech.key} className="flex">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={tech.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={tech.title}
                          >
                            {tech.theme ? (
                              <>
                                <Image
                                  src={`https://assets.harshkanjiya.com/tech-stack/${tech.key}-light.svg`}
                                  alt={`${tech.title} light icon`}
                                  width={32}
                                  height={32}
                                  className="hidden [html.light_&]:block"
                                  unoptimized
                                />
                                <Image
                                  src={`https://assets.harshkanjiya.com/tech-stack/${tech.key}-dark.svg`}
                                  alt={`${tech.title} dark icon`}
                                  width={32}
                                  height={32}
                                  className="hidden [html.dark_&]:block"
                                  unoptimized
                                />
                              </>
                            ) : (
                              <Image
                                src={`https://assets.harshkanjiya.com/tech-stack/${tech.key}.svg`}
                                alt={`${tech.title} icon`}
                                width={32}
                                height={32}
                                unoptimized
                              />
                            )}
                            <span className="sr-only">{tech.title}</span>
                          </a>
                        </TooltipTrigger>

                        <TooltipContent>
                          <p>{tech.title}</p>
                        </TooltipContent>
                      </Tooltip>
                    </li>
                  );
                })}
              </ul>
            </PanelContent>
          </div>
        </div>
      </div>
    </Panel >

    // <Panel id="stack">
    //   <PanelHeader>
    //     <a href="#stack">
    //       <PanelTitle className="flex gap-2 items-center group">
    //         Stack
    //         <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">#</span>
    //       </PanelTitle>
    //     </a>
    //   </PanelHeader>

    //   <PanelContent
    //     className={cn(
    //       "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
    //       "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
    //       "bg-zinc-950/0.75 dark:bg-white/0.75"
    //     )}
    //   >
    //     <ul className="flex flex-wrap gap-4 select-none justify-center">
    //       {TECH_STACK.map((tech) => {
    //         return (
    //           <li key={tech.key} className="flex">
    //             <Tooltip>
    //               <TooltipTrigger asChild>
    //                 <a
    //                   href={tech.href}
    //                   target="_blank"
    //                   rel="noopener noreferrer"
    //                   aria-label={tech.title}
    //                 >
    //                   {tech.theme ? (
    //                     <>
    //                       <Image
    //                         src={`https://assets.harshkanjiya.com/tech-stack/${tech.key}-light.svg`}
    //                         alt={`${tech.title} light icon`}
    //                         width={32}
    //                         height={32}
    //                         className="hidden [html.light_&]:block"
    //                         unoptimized
    //                       />
    //                       <Image
    //                         src={`https://assets.harshkanjiya.com/tech-stack/${tech.key}-dark.svg`}
    //                         alt={`${tech.title} dark icon`}
    //                         width={32}
    //                         height={32}
    //                         className="hidden [html.dark_&]:block"
    //                         unoptimized
    //                       />
    //                     </>
    //                   ) : (
    //                     <Image
    //                       src={`https://assets.harshkanjiya.com/tech-stack/${tech.key}.svg`}
    //                       alt={`${tech.title} icon`}
    //                       width={32}
    //                       height={32}
    //                       unoptimized
    //                     />
    //                   )}
    //                   <span className="sr-only">{tech.title}</span>
    //                 </a>
    //               </TooltipTrigger>

    //               <TooltipContent>
    //                 <p>{tech.title}</p>
    //               </TooltipContent>
    //             </Tooltip>
    //           </li>
    //         );
    //       })}
    //     </ul>
    //   </PanelContent>
    // </Panel>
  );
}
