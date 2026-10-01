"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { contact } from "@/data/portfolio";

const links = [
  { label: "About", href: "/about", mod: "scale", d: "0.16s" },
  { label: "Projects", href: "/projects", mod: "soft", d: "0.28s" },
  { label: "Resume", href: "/resume", mod: "scale", d: "0.40s" },
  { label: "GitHub", href: contact.github, mod: "soft", d: "0.52s", external: true },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 901px)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, []);

  return (
    <>
      <div className="menu-backdrop" onClick={() => setOpen(false)} />
      <header className="header">
        <Link href="/" className="logo appear appear--scale" style={{ "--d": "0.08s" }} aria-label="Arjun Ajikumar, home">
          Arjun<span className="logo-suffix">&nbsp;Ajikumar</span>
        </Link>

        <nav id="site-nav" className="site-nav" aria-label="Primary">
          {links.map((l) =>
            l.external ? (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={`appear appear--${l.mod}`} style={{ "--d": l.d }}>
                {l.label}
              </a>
            ) : (
              <Link key={l.href} href={l.href} aria-current={pathname === l.href ? "page" : undefined} className={`appear appear--${l.mod}`} style={{ "--d": l.d }}>
                {l.label}
              </Link>
            )
          )}
        </nav>

        <a href={`mailto:${contact.email}`} className="btn btn-solid header-cta appear appear--scale" style={{ "--d": "0.34s" }}>
          Hire me
        </a>

        <button
          type="button"
          className="burger appear appear--scale"
          style={{ "--d": "0.34s" }}
          aria-controls="site-nav"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
      </header>
    </>
  );
}
