export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
};

// TODO: replace with your real projects
export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A short, punchy description of what this project does and the problem it solves.",
    tags: ["Next.js", "TypeScript"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/your-username/project-one",
  },
  {
    title: "Project Two",
    description:
      "A short, punchy description of what this project does and the problem it solves.",
    tags: ["React", "Node.js"],
    repoUrl: "https://github.com/your-username/project-two",
  },
  {
    title: "Project Three",
    description:
      "A short, punchy description of what this project does and the problem it solves.",
    tags: ["Python"],
    liveUrl: "https://example.com",
  },
];
