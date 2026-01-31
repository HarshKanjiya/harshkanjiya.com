
import { Panel, PanelContent, PanelHeader, PanelTitle } from "@/components/panel";
import { EXPERIENCES } from "@/data/experiences";
import { ExperienceItem } from "./experience-item";

export function Experiences() {
  return (
    // <Panel id="experience">
    //   <PanelHeader>
    //     <a href="#experience">
    //       <PanelTitle className="flex gap-2 items-center group">
    //         Experience
    //         <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">#</span>
    //       </PanelTitle>
    //     </a>
    //   </PanelHeader>

    //   <div className="pr-2 pl-4">
    //     {EXPERIENCES.map((experience) => (
    //       <ExperienceItem key={experience.id} experience={experience} />
    //     ))}
    //   </div>
    // </Panel>

    <Panel className="screen-line-before screen-line-after" id="experiences">
      <h2 className="sr-only">Experiences</h2>
      <div className="flex items-center justify-between flex-1 flex-col h-full overflow-hidden dark:bg-accent/50 shadow-[inset_0_3px_2px_rgba(255,255,255,0.021)] bg-accent">
        <h3 className="w-full py-1.5 px-4 text-muted-foreground text-left">
          <a href="#experiences">Experiences</a>
        </h3>
        <div className="p-0.5 flex-1 h-full flex w-full py-[3px]">
          <div className="flex-1 max-sm:pb-3 flex flex-col bg-background outline rounded-sm outline-muted/50 relative overflow-hidden group w-full">
            <PanelContent className="space-y-2.5 bg-background w-full p-0">
              {EXPERIENCES.map((experience) => (
                <ExperienceItem key={experience.id} experience={experience} />
              ))}
            </PanelContent>
          </div>
        </div>
      </div>
    </Panel>
  );
}
