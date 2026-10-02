import { useSearchParams } from "react-router-dom";
import { ProjectCard } from "../components/ProjectCard";
import { cn } from "../lib/utils";
import { projects, type Category } from "../data/portfolio";

const categories: ("All" | Category)[] = ["All", "Python", "Power BI", "SQL", "Excel"];

export function ProjectsPage() {
  const [params, setParams] = useSearchParams();
  const raw = params.get("cat");
  const active = (categories as string[]).includes(raw ?? "") ? (raw as "All" | Category) : "All";
  const list = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <main className="mx-auto max-w-6xl px-6 pb-16 pt-36">
      <h1 className="font-extrabold leading-tight tracking-tight" style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)" }}>
        <span className="gradient-text">All </span><span className="accent-gradient-text">projects</span>
      </h1>
      <p className="mt-4 max-w-2xl text-base text-[#94A3B8] sm:text-lg">
        {projects.length} projects across Python, Power BI, SQL and Excel. Each one has its own page with the approach and results.
      </p>

      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter by tool">
        {categories.map((c) => {
          const count = c === "All" ? projects.length : projects.filter((p) => p.category === c).length;
          return (
            <button
              key={c}
              type="button"
              aria-pressed={active === c}
              onClick={() => setParams(c === "All" ? {} : { cat: c })}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500",
                active === c ? "border-violet-500/60 bg-violet-500/15 text-white" : "border-white/10 text-[#94A3B8] hover:text-white"
              )}
            >
              {c} <span className="text-xs opacity-60">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => <ProjectCard key={p.slug} project={p} index={i % 3} />)}
      </div>
    </main>
  );
}
