//server component, reads data, renders

import { projects } from "@/lib/projects";
import ProjectGrid from "@/components/ProjectGrid";

export default function ProjectsPage() {
    return (
        <div className="flex flex-1 justify-center bg-zinc-50 font-sans dark:bg-black">
            <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
                Projects
            </h1>    
            <ProjectGrid projects={projects} />
        </div>
    );
}