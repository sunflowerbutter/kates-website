export default function Bio() {
  return (
    <section className="flex flex-col gap-4 max-w-2xl">
      {/* TODO: replace with your name, tagline, and bio */}
      <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
        Kate Kligys
      </h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400">
        Short tagline about what you do — e.g. software engineer building
        things for the web.
      </p>
      <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
        A couple of sentences about your background, what you&rsquo;re
        interested in, and what you&rsquo;re currently working on. Keep it
        short — this is a portfolio, not a resume.
      </p>
      <div className="flex gap-4 text-sm font-medium">
        <a
          href="mailto:you@example.com"
          className="text-black underline underline-offset-4 dark:text-zinc-50"
        >
          Email
        </a>
        <a
          href="https://github.com/your-username"
          className="text-black underline underline-offset-4 dark:text-zinc-50"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/your-username"
          className="text-black underline underline-offset-4 dark:text-zinc-50"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
