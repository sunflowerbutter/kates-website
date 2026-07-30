import Bio from "@/components/Bio";
import ProjectGrid from "@/components/ProjectGrid";
import Link from "next/link";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <div className="flex flex-1 justify-center bg-zinc-50 font-sans dark:bg-black">
      <header className="flex flex-col gap-4">
          <nav className="flex w-full items-center justify-between">
            <Link
              href="/"
              className="text-sm font-medium text-black underline underline-offset-4 dark:text-zinc-50"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium text-black underline underline-offset-4 dark:text-zinc-50"
            >
              Projects
            </Link>
          </nav>
      </header>
      <main className="flex w-full max-w-4xl flex-col items-center gap-16 px-6 py-24 sm:items-start sm:px-16">
        <div className="w-full border-t border-black/8 dark:border-white/[.145]" />
        <Bio />
        <ProjectGrid projects={projects} />
      </main>
      <footer className="flex w-full max-w-4xl flex-col items-center gap-6 px-6 py-16 sm:px-16">
        <div className="w-full border-t border-black/8 dark:border-white/[.145]" />
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Built by Kate Kligys.
        </p>
      </footer>
    </div>
  );
}
