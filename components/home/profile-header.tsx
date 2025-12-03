// import { FlipSentences } from "@/registry/flip-sentences";
import { USER } from "@/data/user";
import { PronounceMyName } from "../pronounce-my-name";
import Image from "next/image";

export function ProfileHeader() {
  return (
    <div className="screen-line-after flex border-x border-edge pb-2">
      <div className="shrink-0 border-edge">
        <div className="mx-0.5 my-[3px] ml-8">
          <img
            className="size-32 rounded-full ring-2 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
            alt={`${USER.displayName}'s avatar`}
            src={USER.avatar}
            fetchPriority="high"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-end">
        <div className="border-t border-edge">
          <div className="flex items-center gap-2 pl-4">
            <h1 className="-translate-y-px text-3xl font-semibold flex gap-2 items-baseline ">
              <span className="font-mono text-sm text-muted-foreground mr-2">Hey, I'm</span>
              {USER.displayName}
              <span className="font-mono text-sm text-muted-foreground ml-2">&</span>
            </h1>
          </div>

          <div className="h-12.5 border-t border-edge py-1 pl-4 sm:h-9 font-mono text-muted-foreground">
            Welcome to my corner of the internet!
          </div>
        </div>
      </div>
    </div>
  );
}
