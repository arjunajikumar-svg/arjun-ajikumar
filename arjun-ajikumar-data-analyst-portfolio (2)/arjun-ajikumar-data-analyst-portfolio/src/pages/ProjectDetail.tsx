import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Github } from "lucide-react";
import { FadeIn } from "../components/ui/FadeIn";
import { CardGlow } from "../components/ui/CardGlow";
import { PrimaryButton, SecondaryButton } from "../components/ui/Buttons";
import { projects } from "../data/portfolio";

export function ProjectDetail() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);

  if (index === -1) {
    return (
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-40 text-center">
        <h1 className="text-3xl font-bold text-white">Page not found</h1>
        <div className="mt-8"><PrimaryButton to="/projects">See all projects</PrimaryButton></div>
      </main>
    );
  }

  const p = projects[index];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <main className="mx-auto max-w-5xl px-6 pb-16 pt-36">
      <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-[#94A3B8] transition-colors hover:text-white">
        <ArrowLeft className="h-4 w-4" /> All projects
      </Link>

      <FadeIn>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 font-medium text-violet-300">{p.category}</span>
          <span className="text-[#94A3B8]">{p.subtitle}</span>
          <span className="text-[#94A3B8]/60">{p.year}{p.context ? `, ${p.context}` : ""}</span>
        </div>
        <h1 className="gradient-text mt-5 font-extrabold leading-[1.1] tracking-tight" style={{ fontSize: "clamp(2rem, 5.5vw, 3.75rem)" }}>{p.title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#94A3B8] sm:text-lg">{p.summary}</p>
        <div className="mt-8">
          <PrimaryButton href={p.github}><Github className="h-4 w-4" /> View on GitHub</PrimaryButton>
        </div>
        <ul className="mt-8 flex flex-wrap gap-2">
          {p.tools.map((t) => <li key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">{t}</li>)}
        </ul>
      </FadeIn>

      <section className="mt-16" aria-labelledby="results">
        <h2 id="results" className="text-2xl font-bold tracking-tight text-white">Key results</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {p.metrics.map((m, i) => (
            <FadeIn key={m.label} index={i}>
              <CardGlow className="h-full rounded-2xl border border-white/10 bg-[#111116] p-6 transition-colors hover:border-violet-500/30">
                <p className="accent-gradient-text text-3xl font-extrabold tracking-tight sm:text-4xl">{m.value}</p>
                <p className="mt-2 text-sm leading-snug text-[#94A3B8]">{m.label}</p>
              </CardGlow>
            </FadeIn>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300">{p.findings}</p>
      </section>

      <section className="mt-16" aria-labelledby="did">
        <h2 id="did" className="text-2xl font-bold tracking-tight text-white">What I did</h2>
        <ol className="mt-6 space-y-4">
          {p.did.map((d, i) => (
            <FadeIn key={d} index={i}>
              <li className="flex gap-5 rounded-2xl border border-white/5 bg-[#0F0F14] p-5">
                <span className="text-3xl font-black leading-none text-violet-500/30">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-relaxed text-slate-300 sm:text-base">{d}</p>
              </li>
            </FadeIn>
          ))}
        </ol>
      </section>

      <nav aria-label="More projects" className="mt-20 grid gap-4 border-t border-white/10 pt-10 sm:grid-cols-2">
        <Link to={`/projects/${prev.slug}`} className="rounded-2xl border border-white/10 p-5 transition-colors hover:border-violet-500/40">
          <span className="inline-flex items-center gap-1 text-xs text-[#94A3B8]"><ArrowLeft className="h-3 w-3" /> Previous</span>
          <p className="mt-2 font-semibold text-white">{prev.title}</p>
        </Link>
        <Link to={`/projects/${next.slug}`} className="rounded-2xl border border-white/10 p-5 text-right transition-colors hover:border-violet-500/40">
          <span className="inline-flex items-center gap-1 text-xs text-[#94A3B8]">Next <ArrowRight className="h-3 w-3" /></span>
          <p className="mt-2 font-semibold text-white">{next.title}</p>
        </Link>
      </nav>
      <div className="mt-8 text-center"><SecondaryButton to="/projects" className="px-6 py-3 text-sm">Back to all projects</SecondaryButton></div>
    </main>
  );
}
