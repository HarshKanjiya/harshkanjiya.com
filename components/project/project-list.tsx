import { Project } from "@/types/projects";
import { NotData } from "../no-data";
import { ProjectItem } from "./project-item";

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="relative">
      {projects.length === 0 ? (
        <NotData>
          <div className="font-mono font-medium flex flex-row gap-2 w-full justify-center">
            <p className="text-muted-foreground">No Projects for this query!</p>
          </div>
        </NotData>
      )
        : (
          <>
            <div className="relative">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {projects.map((project, id) => (
                  <div key={id}>
                    <ProjectItem key={project.slug} project={project} />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
    </div>
  );
}
