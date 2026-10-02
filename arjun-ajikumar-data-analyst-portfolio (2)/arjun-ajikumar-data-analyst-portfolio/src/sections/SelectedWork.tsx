import { ArrowRight } from "lucide-react";
import { ProjectCard } from "../components/ProjectCard";
import { FadeIn } from "../components/ui/FadeIn";
import { SecondaryButton } from "../components/ui/Buttons";
import { projects } from "../data/portfolio";

export function SelectedWork() {
  const featured = projects.filter((p) => p.featured);
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-violet-400">Work</p>
          <h2 className="font-bold tracking-tight text-white" style={{ fontSize: "clamp(1.875rem, 4.5vw, 3rem)" }}>Selected Projects</h2>
        </div>
        <SecondaryButton to="/projects" className="px-6 py-3 text-sm">View all {projects.length} projects <ArrowRight className="h-4 w-4" /></SecondaryButton>
      </FadeIn>
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}
      </div>
    </section>
  );
}
