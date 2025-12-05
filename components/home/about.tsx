import { Markdown } from "@/components/markdown";
import { ProseMono } from "@/components/ui/typography";
import { FAVORITE_SONG, USER } from "@/data/user";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "@/components/panel";
import { FavoriteSong } from "@/types/user";

import Link from "next/link";
import { CirclePattern } from "./circle-pattern";
import FavSongCard from "./fav-song-card";

export function About() {
  return (
    <Panel id="about">
      <PanelHeader>
        <PanelTitle className="flex gap-2 items-center group">
          About
          <Link
            href="#about"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            #
          </Link>
        </PanelTitle>
      </PanelHeader>

      <PanelContent>
        <ProseMono>
          <Markdown>{USER.about}</Markdown>
        </ProseMono>
      </PanelContent>

      <div className="relative border-t border-edge">
        <div className="absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2 px-4">
          <div className="border-x border-edge" />
          <div className="border-x border-edge" />
        </div>
        <div className="absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2 py-4">
          <div className="border-t col-span-full border-edge" />
          <div className="border-b col-span-full border-edge" />
        </div>
        <div className="absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2 py-4">
          <div className="border-y col-span-full max-w-[calc(50%+8px)] border-edge h-[239px]" />
          <div className="border-y col-span-full max-w-[calc(50%+8px)] border-edge h-[359px]" />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 p-4">
          <div className="p-3 border-edge border aspect-3/2">
            <div className="flex items-center justify-center flex-col border-edge border p-2 h-full rounded-lg bg-accent2">

            </div>
          </div>
          <div className="p-3 border-edge border row-span-2">
            <div className="flex items-center justify-center flex-col border-edge border p-2 h-full rounded-lg bg-accent2">

            </div>
          </div>
          <div className="p-3 border-edge border aspect-square flex">
            <FavSongCard />
          </div>
        </div>
      </div>
    </Panel>
  );
}
