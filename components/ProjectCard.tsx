import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-black/[.08] p-6 dark:border-white/[.145]">
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
            className="rounded-full bg-black/[.05] px-3 py-1 text-xs text-zinc-700 dark:bg-white/[.08] dark:text-zinc-300"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto flex gap-4 pt-2 text-sm font-medium">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline underline-offset-4 dark:text-zinc-50"
          >
            Live
          </a>
        )}
        {project.repoUrl && (
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
