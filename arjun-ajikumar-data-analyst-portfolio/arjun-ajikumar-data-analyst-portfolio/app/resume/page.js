import MiniFooter from "@/components/MiniFooter";
import { profile, summary, skills, experience, education } from "@/data/portfolio";

export const metadata = { title: "Resume — Arjun Ajikumar" };

export default function Resume() {
  const job = experience[0];
  return (
    <>
      <main className="inner" style={{ maxWidth: 860 }}>
        <h1 className="page-title">My <em>resume</em></h1>
        <a href={profile.resume} download className="btn btn-solid" style={{ marginTop: 24 }}>Download resume (.docx)</a>

        <article className="card" style={{ marginTop: 36 }}>
          <h2 style={{ fontSize: 26, fontWeight: 500, letterSpacing: "-0.04em" }}>{profile.name}</h2>
          <p className="meta">{profile.title}</p>
          <p>{summary}</p>

          <h3 style={{ marginTop: 28, fontSize: 16 }}>Skills</h3>
          <dl style={{ marginTop: 8, display: "grid", gap: 6, color: "#d0d0d0", fontSize: 15 }}>
            {skills.map((s) => (
              <div key={s.group}><dt style={{ color: "#9a9a9a" }}>{s.group}</dt><dd>{s.items.join(", ")}</dd></div>
            ))}
          </dl>

          <h3 style={{ marginTop: 28, fontSize: 16 }}>Experience</h3>
          <p>{job.role}, {job.company}, {job.location}. {job.period}</p>

          <h3 style={{ marginTop: 28, fontSize: 16 }}>Education</h3>
          <ul className="list">{education.map((e) => <li key={e.title}>{e.title}, {e.place} ({e.period})</li>)}</ul>
        </article>
      </main>
      <MiniFooter />
    </>
  );
}
