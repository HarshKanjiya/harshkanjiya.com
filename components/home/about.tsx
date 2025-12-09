import { Markdown } from "@/components/markdown";
import { ProseMono } from "@/components/ui/typography";
import { USER } from "@/data/user";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "@/components/panel";

import CurrentBookCard from "./aboutus/current-book-card";
import FavSongCard from "./aboutus/fav-song-card";
import ScrapBookCard from "./aboutus/scrap-book-card";

export function About() {
  return (
    <Panel id="about">
      <PanelHeader>
        <a href="#about">
          <PanelTitle className="flex gap-2 items-center group">
            About
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">#</span>
          </PanelTitle>
        </a>
      </PanelHeader>

      <PanelContent>
        <ProseMono>
          <Markdown>{USER.about}</Markdown>
        </ProseMono>
      </PanelContent>

      <div className="relative border-t border-edge">
        <div className="absolute inset-0 -z-1 grid grid-cols-1 gap-4 sm:grid-cols-2 px-4">
          <div className="border-x border-edge" />
          <div className="border-x border-edge" />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 p-4">
          <div className="h-[250px] sm:h-auto sm:aspect-3/2 flex screen-line-after screen-line-before">
            <CurrentBookCard />
          </div>
          <div className="row-span-2 flex h-[600px] sm:h-auto screen-line-after screen-line-before">
            <ScrapBookCard />
          </div>
          <div className="h-[370px] sm:h-auto sm:aspect-square flex screen-line-after screen-line-before">
            <FavSongCard />
          </div>
        </div>
      </div>
    </Panel>
  );
}
