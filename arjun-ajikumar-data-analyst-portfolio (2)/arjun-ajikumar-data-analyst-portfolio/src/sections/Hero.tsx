import { motion } from "framer-motion";
import { ArrowRight, Database, Download, GraduationCap, Layers } from "lucide-react";
import { PrimaryButton, SecondaryButton } from "../components/ui/Buttons";
import { profile, projects } from "../data/portfolio";

export function Hero() {
  const strip = [
    { Icon: Layers, text: `${projects.length} individual projects` },
    { Icon: Database, text: "Power BI, SQL, Python, Excel" },
    { Icon: GraduationCap, text: "MA in Economics" },
  ];

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4 pb-16 pt-28 text-center">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(circle at 50% 30%, rgba(124, 58, 237, 0.18) 0%, transparent 70%)" }} />
      <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0" />

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-medium text-violet-300 sm:text-sm"
      >
        ✨ {profile.badge}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative max-w-5xl font-extrabold leading-[1.08] tracking-tight"
        style={{ fontSize: "clamp(2.25rem, 7vw, 5.5rem)" }}
      >
        <span className="gradient-text">Turning raw data into</span>{" "}
        <span className="accent-gradient-text">reports people can trust.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="relative mt-6 max-w-2xl text-base font-normal leading-relaxed text-[#94A3B8] sm:text-lg md:text-xl"
      >
        {profile.intro}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="relative mt-8 flex flex-wrap items-center justify-center gap-4"
      >
        <PrimaryButton variant="white" to="/#work">Explore My Work <ArrowRight className="h-4 w-4" /></PrimaryButton>
        <SecondaryButton href={profile.resume} download><Download className="h-4 w-4" /> Download Resume</SecondaryButton>
      </motion.div>

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-[#94A3B8]"
      >
        {strip.map(({ Icon, text }) => (
          <li key={text} className="inline-flex items-center gap-2"><Icon className="h-4 w-4 text-violet-400" aria-hidden="true" />{text}</li>
        ))}
      </motion.ul>
    </section>
  );
}
