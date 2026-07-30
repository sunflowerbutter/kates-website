//use client - overlay + expanded detail
"use client";

import { useEffect, useId, useRef } from "react";
import type { Project } from "@/lib/projects";

export default function ProjectModal({
    project,
    onClose,
}: {
    project: Project;
    onClose: () => void;
}) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const titleId = useId();

    useEffect(() => {
        const dialog = dialogRef.current;
        if(!dialog) return;

        dialog.showModal(); //show the modal when the component mounts

        //Lock background scroll, compensating for the scrollbar so the page
        //doesn't shift horizontally when it disappears
        const { overflow, paddingRight } = document.body.style;
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        
        return () => {
            dialog.close(); //close the modal when the component unmounts
            document.body.style.overflow = overflow;
            document.body.style.paddingRight = paddingRight;
        }; //cleanup function to restore the original styles
    }, []);

    return (
        <dialog
            ref={dialogRef}
            aria-labelledby={titleId}
            onCancel={(e) => {
                e.preventDefault();
                onClose();
            }}

            onClick={(e: React.MouseEvent<HTMLDialogElement>) => {
                if(e.target === dialogRef.current) onClose();
            }}
            className="m-auto max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-8 shadow-xl backdrop:bg-black/60 backdrop:backdrop-blur-sm"
        >
            <div className="flex items-start justify-between gap-4">
                <h2 id={titleId}>{project.title}</h2> 
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{project.year}</p>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-full bg-black/5 px-3 py-1 text-xs text-zinc-700 dark:bg-white/8 dark:text-zinc-300"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{project.description}</p>

            {project.repoUrl && (
                <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm text-black underline underline-offset-4 dark:text-zinc-50"
                >
                    View on Github
                </a>
            )}
            {project.liveUrl && (
                <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm text-black underline underline-offset-4 dark:text-zinc-50"
                >
                    View Live
                </a>
            )};
        </dialog>
    );
}