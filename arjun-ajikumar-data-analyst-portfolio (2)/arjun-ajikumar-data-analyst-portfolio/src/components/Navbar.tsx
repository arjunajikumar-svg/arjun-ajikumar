import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Sparkles, X } from "lucide-react";
import { contact } from "../data/portfolio";

const links = [
  { label: "Work", to: "/#work" },
  { label: "Skills", to: "/#skills" },
  { label: "About", to: "/#about" },
  { label: "Process", to: "/#process" },
  { label: "Experience", to: "/#experience" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-5 z-50 px-4">
      <div className="relative mx-auto max-w-6xl">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-[#0E0E12]/80 px-6 py-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-md">
          <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2 text-lg font-extrabold tracking-tight text-white sm:text-xl" aria-label="Arjun Ajikumar, home">
            <Sparkles className="h-5 w-5 text-violet-500 drop-shadow-[0_0_8px_rgba(124,58,237,0.9)]" aria-hidden="true" />
            ARJUN
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="text-sm font-medium text-[#94A3B8] transition-colors duration-200 hover:text-white">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="hidden rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500 p-px transition-shadow hover:shadow-[0_0_24px_rgba(124,58,237,0.5)] sm:inline-flex"
            >
              <span className="rounded-full bg-[#0E0E12] px-5 py-2 text-sm font-semibold text-white">Hire me</span>
            </a>
            <button
              type="button"
              className="rounded-full p-2 text-white md:hidden"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              aria-label="Mobile"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="absolute inset-x-0 top-full mt-3 flex flex-col gap-1 rounded-3xl border border-white/10 bg-[#0E0E12]/95 p-3 backdrop-blur-xl md:hidden"
            >
              {links.map((l) => (
                <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-base font-medium text-slate-200 hover:bg-white/5">
                  {l.label}
                </Link>
              ))}
              <a href={`mailto:${contact.email}`} className="mt-1 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-3 text-center font-semibold text-white">
                Hire me
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
