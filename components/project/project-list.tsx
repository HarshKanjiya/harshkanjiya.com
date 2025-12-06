import { Project } from "@/types/projects";
import { NotData } from "../no-data";
import { PostItem } from "../post-item";

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="relative pt-4">
      {projects.length === 0 ? (
        <NotData>
          <div className="font-mono font-medium flex flex-row gap-2 w-full justify-center">
            <p className="text-muted-foreground">No Projects for this query!</p>
          </div>
        </NotData>
      )
        : (
          <>
            <div className="absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
              <div className="border-r border-edge" />
              <div className="border-l border-edge" />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {projects.map((project, index) => (
                <PostItem
                  isProject={true}
                  key={project.slug}
                  post={project}
                  shouldPreloadImage={index <= 4}
                />
              ))}
            </div>
          </>
        )}
    </div>
  );
}
