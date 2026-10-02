import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/portfolio";
import { FadeIn } from "./ui/FadeIn";
import { ProjectVisual } from "./ProjectVisual";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-5, 5]);

  return (
    <FadeIn index={index} className="h-full">
      <motion.div
        className="h-full"
        style={{ rotateX, rotateY, transformPerspective: 900 }}
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          x.set((e.clientX - r.left) / r.width - 0.5);
          y.set((e.clientY - r.top) / r.height - 0.5);
        }}
        onMouseLeave={() => { x.set(0); y.set(0); }}
      >
        <Link
          to={`/projects/${project.slug}`}
          className="group flex h-full flex-col rounded-2xl border border-white/10 bg-[#0F0F14] p-4 transition-colors hover:border-violet-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
        >
          <div className="overflow-hidden rounded-xl">
            <div className="transition-transform duration-500 group-hover:scale-105"><ProjectVisual project={project} /></div>
          </div>
          <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
            <div className="mb-3 flex flex-wrap gap-2">
              <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-2.5 py-0.5 text-xs font-medium text-violet-300">{project.category}</span>
              {project.tools.slice(0, 2).map((t) => (
                <span key={t} className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-[#94A3B8]">{t}</span>
              ))}
            </div>
            <h3 className="text-lg font-bold leading-snug tracking-tight text-white">{project.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-[#94A3B8]">{project.summary}</p>
            <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-violet-300">
              View project <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </div>
        </Link>
      </motion.div>
    </FadeIn>
  );
}
