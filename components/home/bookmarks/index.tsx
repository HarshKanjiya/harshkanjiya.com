import { compareDesc } from "date-fns";

import { CollapsibleList } from "@/components/collapsible-list";
import { Panel, PanelHeader, PanelTitle } from "@/components/panel";
import { BOOKMARKS } from "@/data/bookmarks";
import { BookmarkItem } from "./bookmark-item";

const SORTED_BOOKMARKS = [...BOOKMARKS].sort((a, b) => {
  return compareDesc(new Date(a.createdAt), new Date(b.createdAt));
});

export function Bookmarks() {
  return (
    <Panel id="bookmarks">
      <PanelHeader>
        <PanelTitle className="flex gap-2 items-center group">
          Bookmarks
          <a
            href="#bookmarks"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            #
          </a>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={SORTED_BOOKMARKS}
        max={6}
        renderItem={(item) => <BookmarkItem bookmark={item} />}
      />
    </Panel>
  );
}
