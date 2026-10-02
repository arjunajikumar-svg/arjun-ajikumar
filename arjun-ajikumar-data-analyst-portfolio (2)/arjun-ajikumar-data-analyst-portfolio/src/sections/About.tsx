import { FadeIn } from "../components/ui/FadeIn";
import { CardGlow } from "../components/ui/CardGlow";
import { AnimatedCounter } from "../components/ui/AnimatedCounter";
import { aboutParagraphs, aboutStats } from "../data/portfolio";

export function About() {
  return (
    <section id="about" className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-24 sm:py-32 lg:grid-cols-2">
      <FadeIn>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-violet-400">About me</p>
        <h2 className="font-bold leading-tight tracking-tight text-white" style={{ fontSize: "clamp(1.875rem, 4.5vw, 3rem)" }}>
          From economics theory to decisions backed by data.
        </h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-[#94A3B8] sm:text-lg">
          {aboutParagraphs.map((p) => <p key={p}>{p}</p>)}
        </div>
      </FadeIn>

      <div className="grid grid-cols-2 gap-4">
        {aboutStats.map((s, i) => (
          <FadeIn key={s.label} index={i}>
            <CardGlow className="h-full rounded-3xl border border-white/10 bg-[#111116] p-6 transition-colors hover:border-violet-500/30 sm:p-8">
              <p className="accent-gradient-text text-3xl font-extrabold tracking-tight sm:text-4xl">
                <AnimatedCounter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm leading-snug text-[#94A3B8]">{s.label}</p>
            </CardGlow>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
