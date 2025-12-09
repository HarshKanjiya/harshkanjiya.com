
import { Panel, PanelHeader, PanelTitle } from "@/components/panel";
import { EXPERIENCES } from "@/data/experiences";
import { ExperienceItem } from "./experience-item";

export function Experiences() {
  return (
    <Panel id="experience">
      <PanelHeader>
        <a href="#experience">
          <PanelTitle className="flex gap-2 items-center group">
            Experience
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">#</span>
          </PanelTitle>
        </a>
      </PanelHeader>

      <div className="pr-2 pl-4">
        {EXPERIENCES.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </div>
    </Panel>
  );
}
