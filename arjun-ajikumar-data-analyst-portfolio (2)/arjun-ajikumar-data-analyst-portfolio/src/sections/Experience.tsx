import { Award, Briefcase, GraduationCap } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { FadeIn } from "../components/ui/FadeIn";
import { CardGlow } from "../components/ui/CardGlow";
import { certification, education, experience, languages } from "../data/portfolio";

const card = "h-full rounded-2xl border border-white/5 bg-[#0F0F14] p-6 transition-colors hover:border-violet-500/30 sm:p-8";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader tag="Experience & Education" title="Where I've Worked and Studied" />
      <div className="mt-14 grid gap-6 lg:grid-cols-5">
        <FadeIn className="lg:col-span-3">
          <CardGlow className={card}>
            <Briefcase className="mb-5 h-6 w-6 text-violet-300" aria-hidden="true" />
            <h3 className="text-xl font-bold tracking-tight text-white">{experience.role}</h3>
            <p className="mt-1 text-sm text-[#94A3B8]">
              <a href={experience.href} target="_blank" rel="noopener noreferrer" className="text-violet-300 underline-offset-4 hover:underline">{experience.company}</a>, {experience.location}. {experience.period}
            </p>
            <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-relaxed text-[#94A3B8] marker:text-violet-400">
              {experience.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </CardGlow>
        </FadeIn>

        <div className="grid gap-6 lg:col-span-2">
          <FadeIn index={1}>
            <CardGlow className={card}>
              <GraduationCap className="mb-4 h-6 w-6 text-violet-300" aria-hidden="true" />
              <h3 className="text-lg font-bold text-white">{education.title}</h3>
              <p className="mt-1 text-sm text-[#94A3B8]">{education.place}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">{education.detail}</p>
            </CardGlow>
          </FadeIn>
          <FadeIn index={2}>
            <CardGlow className={card}>
              <Award className="mb-4 h-6 w-6 text-violet-300" aria-hidden="true" />
              <h3 className="text-lg font-bold text-white">{certification.title}</h3>
              <p className="mt-1 text-sm text-[#94A3B8]">{certification.place}</p>
              <p className="text-sm text-[#94A3B8]">{certification.period}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">{certification.detail}</p>
            </CardGlow>
          </FadeIn>
        </div>
      </div>
      <p className="mt-8 text-center text-sm text-[#94A3B8]">Languages: {languages.join(", ")}</p>
    </section>
  );
}
