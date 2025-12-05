
import { Panel, PanelHeader, PanelTitle } from "@/components/panel";
import { EXPERIENCES } from "@/data/experiences";
import { ExperienceItem } from "./experience-item";
import Link from "next/link";

export function Experiences() {
  return (
    <Panel id="experience">
      <PanelHeader>
        <PanelTitle className="flex gap-2 items-center group">
          Experience
          <Link
            href="#experience"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            #
          </Link>
        </PanelTitle>
      </PanelHeader>

      <div className="pr-2 pl-4">
        {EXPERIENCES.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </div>
    </Panel>
  );
}
