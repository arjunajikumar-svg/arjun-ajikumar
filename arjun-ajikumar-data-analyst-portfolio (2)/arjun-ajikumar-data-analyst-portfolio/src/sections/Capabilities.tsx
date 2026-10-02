import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Code2, Database, FileText, Table2, Workflow } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { FadeIn } from "../components/ui/FadeIn";
import { capabilities } from "../data/portfolio";

const icons = { chart: BarChart3, table: Table2, database: Database, code: Code2, workflow: Workflow, file: FileText };

export function Capabilities() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader tag="Capabilities" title="End-to-End Analysis, From Raw Data to Report" text="The tools and techniques behind my projects." />
      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((c, i) => {
          const Icon = icons[c.icon];
          const to = c.category ? `/projects?cat=${encodeURIComponent(c.category)}` : "/projects";
          return (
            <FadeIn key={c.title} index={i} className="h-full">
              <Link
                to={to}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#121217] p-8 transition-colors hover:border-violet-500/40 hover:bg-[#181820] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 shadow-[0_0_24px_rgba(124,58,237,0.25)]">
                  <Icon className="h-6 w-6 text-violet-300" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white">{c.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#94A3B8]">{c.text}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-violet-300">
                  See related projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
