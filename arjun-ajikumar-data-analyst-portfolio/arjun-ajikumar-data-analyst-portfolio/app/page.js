import Link from "next/link";
import { profile, stats } from "@/data/portfolio";

// Hero background video supplied for this design. Delete the <video> to use plain black.
const VIDEO = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260818_072341_50851634-bbc3-4c33-9acc-7647d4db44aa.mp4";

export default function Home() {
  return (
    <>
      <div className="hero-photo" aria-hidden="true">
        <video src={VIDEO} autoPlay muted loop playsInline preload="auto" />
      </div>

      <main className="hero hero-home" id="top">
        <div className="hero-copy">
          <span className="badge appear appear--pop" style={{ "--d": "0.22s" }}>
            <svg className="badge-star" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.6C12.55 2.6 12.88 3.15 13.08 4.7c.62 4.7 1.52 5.6 6.22 6.22 1.55.2 2.1.53 2.1 1.08s-.55.88-2.1 1.08c-4.7.62-5.6 1.52-6.22 6.22-.2 1.55-.53 2.1-1.08 2.1s-.88-.55-1.08-2.1c-.62-4.7-1.52-5.6-6.22-6.22C3.15 12.88 2.6 12.55 2.6 12s.55-.88 2.1-1.08c4.7-.62 5.6-1.52 6.22-6.22C11.12 3.15 11.45 2.6 12 2.6Z" />
            </svg>
            {profile.title}
          </span>

          <h1>
            <span className="headline-line"><span className="appear appear--mask" style={{ "--d": "0.42s" }}>Turn <em>raw data</em> into</span></span>
            <span className="headline-line"><span className="appear appear--mask" style={{ "--d": "0.62s" }}>reports people can trust.</span></span>
          </h1>

          <p className="lede appear appear--soft" style={{ "--d": "0.82s", "--dur": "1.25s" }}>
            Skilled in Power BI, SQL, Python and Excel. I turn payroll, finance and sales data into clear, decision-ready reports.
          </p>

          <div className="hero-actions">
            <Link href="/projects" className="btn btn-solid appear appear--btn" style={{ "--d": "0.96s" }}>View projects</Link>
            <a href={profile.resume} download className="btn btn-ghost appear appear--side" style={{ "--d": "1.10s" }}>Download resume</a>
          </div>
        </div>
      </main>

      <footer className="stats">
        <div className="stat appear appear--stat" style={{ "--d": "1.12s" }}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <defs>
              <linearGradient id="gl" x1="3" y1="2" x2="14" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0.38" stopColor="#fff" /><stop offset="0.62" stopColor="#3a3a3a" /></linearGradient>
              <linearGradient id="gr" x1="3" y1="2" x2="14" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0.38" stopColor="#3a3a3a" /><stop offset="0.62" stopColor="#fff" /></linearGradient>
            </defs>
            <rect x="3.4" y="2.6" width="7.2" height="18.8" rx="3.6" fill="url(#gl)" />
            <rect x="13.4" y="2.6" width="7.2" height="18.8" rx="3.6" fill="url(#gr)" />
            <rect x="9.2" y="10.9" width="5.6" height="2.2" rx="1.1" fill="#4a4a4a" />
          </svg>
          {stats[0]}
        </div>

        <div className="stat appear appear--stat" style={{ "--d": "1.28s" }}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="2.4" y="2.4" width="19.2" height="19.2" rx="6.2" fill="#fff" />
            <path d="M12 7.1v7.4M8.15 12.35L12 16.2l3.85-3.85" fill="none" stroke="#111" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {stats[1]}
        </div>

        <div className="stat appear appear--stat" style={{ "--d": "1.44s" }}>
          <svg className="stat-icon-wide" viewBox="0 0 40 22" aria-hidden="true">
            <circle cx="10.2" cy="11" r="9.2" fill="#2b2b2b" />
            <circle cx="20.2" cy="11" r="9.2" fill="#fff" />
            <circle cx="30.2" cy="11" r="9.2" fill="#f26b1d" />
            <text x="30.2" y="15.1" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#fff" fontFamily="Inter, Arial, sans-serif">A</text>
          </svg>
          {stats[2]}
        </div>
      </footer>
    </>
  );
}
