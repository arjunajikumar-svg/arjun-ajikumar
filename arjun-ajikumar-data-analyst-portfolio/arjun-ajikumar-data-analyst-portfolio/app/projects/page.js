import MiniFooter from "@/components/MiniFooter";
import { GithubIcon } from "@/components/Icons";
import { projects, moreProjects } from "@/data/portfolio";

export const metadata = { title: "Projects — Arjun Ajikumar" };

export default function Projects() {
  return (
    <>
      <main className="inner">
        <h1 className="page-title">My recent <em>works</em></h1>
        <p className="sub">
          All {projects.length + moreProjects.length} public repositories from my GitHub. The first three are written up in full.
        </p>

        <div className="stack" style={{ marginTop: 40 }}>
          {projects.map((p) => (
            <article key={p.name} className="card feat">
              <div>
                <h2 style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 1.2 }}>{p.name}</h2>
                <p className="meta">{p.company ? `${p.company}, ${p.year}` : p.year}</p>
                <p style={{ color: "#fff", fontSize: 17 }}>{p.question}</p>
                <ul className="tags">{p.tools.map((t) => <li key={t}>{t}</li>)}</ul>
                {p.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="btn btn-solid">
                    <GithubIcon /> {l.label}
                  </a>
                ))}
              </div>
              <div>
                <dl className="results">
                  {p.results.map((r) => (
                    <div key={r.label}><dt>{r.value}</dt><dd>{r.label}</dd></div>
                  ))}
                </dl>
                <h3 style={{ marginTop: 28, fontSize: 16 }}>What I did</h3>
                <ul className="list">{p.did.map((d) => <li key={d}>{d}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>

        <h2 className="h2">More from <em>GitHub</em></h2>
        <div className="cols">
          {moreProjects.map((p) => (
            <article key={p.name} className="card" style={{ display: "flex", flexDirection: "column" }}>
              <h3>{p.name}</h3>
              <p style={{ flex: 1 }}>{p.desc}</p>
              <ul className="tags">{p.tools.map((t) => <li key={t}>{t}</li>)}</ul>
              <a href={p.href} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ marginTop: 18, alignSelf: "flex-start" }}>
                <GithubIcon /> View on GitHub
              </a>
            </article>
          ))}
        </div>
      </main>
      <MiniFooter />
    </>
  );
}
