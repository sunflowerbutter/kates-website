import type { Project } from "@/lib/projects";

//presentational, no state

//to display each individual project

export default function ProjectCard({
  project,
  onSelect,
  //keeps track of project & if its selected
}: {
  project: Project;
  onSelect: () => void;
}){
  return (
    <button
      type="button"
      onClick = {onSelect}
      className="rounded-xl border border-zinc-200 p-5 text-left transition hover:border-zinc-400 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <h2 className="text-lg font-semibold text-black dark:text-zinc-50">
        {project.title}
      </h2>
      <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {project.blurb}
      </p>
      <span className="text-sm text-zinc-600 dark:text-zinc-400">{project.year}</span>
      <span className="text-sm text-zinc-600 dark:text-zinc-400">{project.tags.join(", ")}</span>
    </button>
  );
} 


//ui components are functions that take an input
//input is of type Project, taking the const project array defined after
//the Project type in lib
/*
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-black/8 p-6 dark:border-white/[.145]">
      <h3 className="text-lg font-semibold text-black dark:text-zinc-50">
        {project.title}
      </h3>
      <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2"> 
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-black/5 px-3 py-1 text-xs text-zinc-700 dark:bg-white/8 dark:text-zinc-300"
          >
            {tag}
          </span>// project tags - languages etc
        ))}
      </div> 
      <div className="mt-auto flex gap-4 pt-2 text-sm font-medium">
        {project.liveUrl && ( //if liveUrl exists, render the link
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline underline-offset-4 dark:text-zinc-50"
          >
            Live
          </a>
        )}
        {project.repoUrl && ( //repo URL
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline underline-offset-4 dark:text-zinc-50"
          >
            Code
          </a>
        )}
      </div>
    </div>
  );
}
*/