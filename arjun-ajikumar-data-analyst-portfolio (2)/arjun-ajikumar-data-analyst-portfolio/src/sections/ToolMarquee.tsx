import { tools } from "../data/portfolio";

export function ToolMarquee() {
  const row = [...tools, ...tools];
  return (
    <section aria-label="Tools" className="py-12">
      <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-[#94A3B8]/60">Tools I work with</p>
      <div className="marquee-mask overflow-hidden">
        <ul className="marquee-track">
          {row.map((t, i) => (
            <li
              key={`${t}-${i}`}
              aria-hidden={i >= tools.length}
              className="mx-8 cursor-default whitespace-nowrap text-xl font-bold tracking-tight text-white opacity-40 transition-all duration-300 hover:scale-105 hover:opacity-100 sm:mx-12 sm:text-2xl"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
