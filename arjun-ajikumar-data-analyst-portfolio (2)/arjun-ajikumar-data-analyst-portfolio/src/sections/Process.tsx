import { SectionHeader } from "../components/SectionHeader";
import { FadeIn } from "../components/ui/FadeIn";
import { process } from "../data/portfolio";

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeader tag="Process" title="How I Approach Analysis" text="The steps that repeat across my projects." />
      <ol className="relative mt-16 space-y-12 border-l border-dashed border-violet-500/30 pl-8 sm:pl-12">
        {process.map((s, i) => (
          <FadeIn key={s.title} index={i}>
            <li className="relative">
              <span aria-hidden="true" className="absolute -left-[2.45rem] top-3 h-3 w-3 rounded-full bg-violet-500 shadow-[0_0_12px_rgba(124,58,237,0.8)] sm:-left-[3.45rem]" />
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-8">
                <span className="text-6xl font-black leading-none text-violet-500/20">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-white">{s.title}</h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-[#94A3B8]">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-2"><span className="text-violet-400">&#10003;</span>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          </FadeIn>
        ))}
      </ol>
    </section>
  );
}
