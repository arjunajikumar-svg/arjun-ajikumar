import MiniFooter from "@/components/MiniFooter";
import { about, skills, experience, education, certifications, languages } from "@/data/portfolio";

export const metadata = { title: "About — Arjun Ajikumar" };

export default function About() {
  return (
    <>
      <main className="inner">
        <h1 className="page-title">Know who <em>I&apos;m</em></h1>
        <div className="prose">{about.map((p) => <p key={p}>{p}</p>)}</div>

        <h2 className="h2">Professional <em>skillset</em></h2>
        <div className="stack">
          {skills.map((s) => (
            <div key={s.group} className="card">
              <h3>{s.group}</h3>
              <ul className="tags">{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
        </div>

        <h2 className="h2">Work <em>experience</em></h2>
        {experience.map((e) => (
          <article key={e.role} className="card">
            <h3>{e.role}</h3>
            <p className="meta">
              <a href={e.href} target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "underline", textUnderlineOffset: 4 }}>{e.company}</a>, {e.location}. {e.period}
            </p>
            <ul className="list">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
          </article>
        ))}

        <h2 className="h2">Education and <em>certifications</em></h2>
        <div className="cols-2">
          {[...education, ...certifications].map((c) => (
            <article key={c.title} className="card">
              <h3>{c.title}</h3>
              <p className="meta">{c.place}</p>
              {c.period && <p className="meta">{c.period}</p>}
              {c.detail && <p>{c.detail}</p>}
            </article>
          ))}
        </div>
        <p className="sub">Languages: {languages.map((l) => `${l.name} (${l.level})`).join(", ")}</p>
      </main>
      <MiniFooter />
    </>
  );
}
