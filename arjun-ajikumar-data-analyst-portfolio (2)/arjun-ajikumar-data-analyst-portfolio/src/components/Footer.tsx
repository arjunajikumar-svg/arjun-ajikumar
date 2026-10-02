import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { contact, profile } from "../data/portfolio";

const underline =
  "relative text-sm text-[#94A3B8] transition-colors hover:text-white after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-violet-400 after:transition-all hover:after:w-full";

export function Footer() {
  return (
    <footer className="mx-auto mt-10 max-w-6xl border-t border-white/10 px-6 pb-12 pt-16">
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 text-lg font-extrabold tracking-tight text-white">
            <Sparkles className="h-5 w-5 text-violet-500" aria-hidden="true" /> ARJUN
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#94A3B8]">
            Entry-level data analyst turning raw data into clear, decision-ready reports.
          </p>
          <p className="mt-6 inline-flex items-center gap-2 text-xs text-[#94A3B8]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to opportunities
          </p>
          <p className="mt-4 text-xs text-[#94A3B8]/70">&copy; {new Date().getFullYear()} {profile.name}</p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-white">Navigate</h3>
          <ul className="space-y-3">
            {[["Work", "/#work"], ["Skills", "/#skills"], ["About", "/#about"], ["Experience", "/#experience"], ["Contact", "/#contact"]].map(([l, to]) => (
              <li key={to}><Link to={to} className={underline}>{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-white">Resources</h3>
          <ul className="space-y-3">
            <li><Link to="/projects" className={underline}>All projects</Link></li>
            <li><a href={profile.resume} download className={underline}>Download resume</a></li>
            <li><a href={contact.github} target="_blank" rel="noopener noreferrer" className={underline}>GitHub repositories</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-white">Connect</h3>
          <ul className="space-y-3">
            <li><a href={contact.github} target="_blank" rel="noopener noreferrer" className={`${underline} inline-flex items-center gap-2`}><Github className="h-4 w-4" /> GitHub</a></li>
            <li><a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className={`${underline} inline-flex items-center gap-2`}><Linkedin className="h-4 w-4" /> LinkedIn</a></li>
            <li><a href={`mailto:${contact.email}`} className={`${underline} inline-flex items-center gap-2 break-all`}><Mail className="h-4 w-4 shrink-0" /> {contact.email}</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
