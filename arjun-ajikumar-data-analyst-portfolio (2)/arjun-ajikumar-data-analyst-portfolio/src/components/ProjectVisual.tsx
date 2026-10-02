import type { Project } from "../data/portfolio";

// Decorative browser-style frame. The headline number is the project's own first result.
export function ProjectVisual({ project }: { project: Project }) {
  const repo = project.github.replace("https://github.com/arjunajikumar-svg/", "").split("/")[0];
  const lead = project.metrics[0];

  return (
    <div aria-hidden="true" className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#1a1330] via-[#100d1c] to-[#0a0a0e]">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="ml-3 truncate text-[11px] text-slate-500">{repo}</span>
      </div>
      <div className="relative px-5 py-8 sm:py-10">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-600/25 blur-3xl" />
        <p className="relative text-[11px] font-semibold uppercase tracking-widest text-violet-300/80">{project.category}</p>
        <p className="accent-gradient-text relative mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">{lead.value}</p>
        <p className="relative mt-1 line-clamp-2 text-xs text-slate-400">{lead.label}</p>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/[0.04] via-transparent to-transparent" />
    </div>
  );
}
