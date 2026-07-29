import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

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
