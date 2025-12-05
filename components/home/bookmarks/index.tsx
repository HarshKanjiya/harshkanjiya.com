import { compareDesc } from "date-fns";

import { Panel, PanelHeader, PanelTitle } from "@/components/panel";
import { BookmarkItem } from "./bookmark-item";
import { BOOKMARKS } from "@/data/bookmarks";
import { CollapsibleList } from "@/components/collapsible-list";
import Link from "next/link";

const SORTED_BOOKMARKS = [...BOOKMARKS].sort((a, b) => {
  return compareDesc(new Date(a.createdAt), new Date(b.createdAt));
});

export function Bookmarks() {
  return (
    <Panel id="bookmarks">
      <PanelHeader>
        <PanelTitle className="flex gap-2 items-center group">
          Bookmarks
          <Link
            href="#bookmarks"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            #
          </Link>
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
