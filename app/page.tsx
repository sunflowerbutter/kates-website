import Bio from "@/components/Bio";
import ProjectGrid from "@/components/ProjectGrid";

export default function Home() {
  return (
    <div className="flex flex-1 justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-4xl flex-col items-center gap-16 px-6 py-24 sm:items-start sm:px-16">
        <Bio />
        <ProjectGrid />
      </main>
    </div>
  );
}
