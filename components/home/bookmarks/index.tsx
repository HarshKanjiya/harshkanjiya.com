import { compareDesc } from "date-fns";

import { CollapsibleList } from "@/components/collapsible-list";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "@/components/panel";
import { BOOKMARKS } from "@/data/bookmarks";
import { BookmarkItem } from "./bookmark-item";

const SORTED_BOOKMARKS = [...BOOKMARKS].sort((a, b) => {
  return compareDesc(new Date(a.createdAt), new Date(b.createdAt));
});

export function Bookmarks() {
  return (
    // <Panel id="bookmarks">
    //   <PanelHeader>
    //     <a href="#bookmarks">
    //       <PanelTitle className="flex gap-2 items-center group">
    //         Bookmarks
    //         <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">#</span>
    //       </PanelTitle>
    //     </a>
    //   </PanelHeader>

    //   <CollapsibleList
    //     items={SORTED_BOOKMARKS}
    //     max={6}
    //     renderItem={(item) => <BookmarkItem bookmark={item} />}
    //   />
    // </Panel>
    <Panel className="screen-line-before screen-line-after" id="bookmarks">
      <h2 className="sr-only">Bookmarks</h2>
      <div className="flex items-center justify-between flex-1 flex-col h-full overflow-hidden dark:bg-accent/50 shadow-[inset_0_3px_2px_rgba(255,255,255,0.021)] bg-accent">
        <h3 className="w-full py-1.5 px-4 text-muted-foreground text-left">
          <a href="#bookmarks">Bookmarks</a>
        </h3>
        <div className="p-0.5 flex-1 h-full flex w-full py-[3px]">
          <div className="flex-1 max-sm:pb-3 flex flex-col bg-background outline rounded-sm outline-muted/50 relative overflow-hidden group w-full">
            <PanelContent className="space-y-2.5 bg-background w-full p-0">
              <CollapsibleList
                items={SORTED_BOOKMARKS}
                max={6}
                renderItem={(item) => <BookmarkItem bookmark={item} />}
              />
            </PanelContent>
          </div>
        </div>
      </div>
    </Panel>
  );
}
