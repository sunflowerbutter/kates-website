"use client";

import { useState } from "react";
import type { Project } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";

/*
export default function ProjectGrid() {
  return (
    <section className="flex flex-col gap-6 w-full max-w-4xl">
      <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
*/

//use client, owns the selected state


export default function ProjectGrid({ projects }: {projects: Project[]}){
  const [selected, setSelected] = useState<Project | null>(null);

  //return a grid of project cards
  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard 
            key={project.slug}
            project={project} 
            onSelect={() => setSelected(project)} 
          />
        ))}
      </div>
      {selected && ( //display close up if selected is not null
        <ProjectModal project={selected} onClose={() => setSelected(null)} /> )}
    </>
  );
}