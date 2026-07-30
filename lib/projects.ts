export type Project = {
    slug: string;
    title: string;
    blurb: string;
    year: number;
    tags: string[];
    description: string;
    liveUrl?: string;
    repoUrl?: string;
}

//List of information about my projects
export const projects: Project[] = [
  {
    slug: "affiliation-bias-llm",
    title: "Affiliation Bias in LLM Reviewed Abstracts",
    blurb:
      "A short, punchy description of what this project does and the problem it solves.",
    year: 2023,
    tags: ["Next.js", "TypeScript"],
    description:
      "A short, punchy description of what this project does and the problem it solves.",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/your-username/project-one",
  },
  {
    slug: "comparative-political-bias",
    title: "Comparative Political Bias Between Diagnostic LLMs and Primary Care Physicians",
    blurb:
      "A short, punchy description of what this project does and the problem it solves.",
    year: 2023,
    tags: ["React", "Node.js"],
    description:
      "A short, punchy description of what this project does and the problem it solves.",
    repoUrl: "https://github.com/your-username/project-two",
  },
  {
    slug: "liver-detection-ml",
    title: "Liver Detection ML",
    blurb:
      "A short, punchy description of what this project does and the problem it solves.",
    year: 2023,
    tags: ["Python"],
    description:
      "A short, punchy description of what this project does and the problem it solves.",
    liveUrl: "https://example.com",
  },
];
