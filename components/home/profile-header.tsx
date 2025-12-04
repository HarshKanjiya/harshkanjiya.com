// import { FlipSentences } from "@/registry/flip-sentences";
import { USER } from "@/data/user";

export function ProfileHeader() {
  return (
    <div className="screen-line-after flex flex-col sm:flex-row border-x border-edge pb-2">
      <div className="shrink-0 border-edge">
        <div className="sm:mx-0.5 my-[3px] ml-[50%] -translate-x-1/2 sm:translate-x-3 w-fit mt-16 mx-0 sm:mt-[3px]">
          <img
            className="size-32 rounded-full ring-2 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
            alt={`${USER.displayName}'s avatar`}
            src={USER.avatar}
            fetchPriority="high"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-end pt-3 sm:pt-0">
        <div className="border-t border-edge">
          <div className="flex items-center gap-2 w-full sm:w-fit justify-center sm:pl-8">
            <h1 className="-translate-y-px text-3xl font-semibold flex gap-2 sm:items-baseline flex-col sm:flex-row items-center ">
              <span className="font-mono text-sm text-muted-foreground mr-2">Hey, I'm</span>
              <span>
                <span>{USER.displayName}</span>
                <span className="font-mono text-sm text-muted-foreground ml-2">&</span>
              </span>
            </h1>
          </div>

          <div className="h-12.5 border-t border-edge py-1 sm:pl-4 sm:h-9 font-mono text-muted-foreground text-center sm:text-left">
            Welcome to my corner of the&nbsp;internet!
          </div>
        </div>
      </div>
    </div>
  );
}
