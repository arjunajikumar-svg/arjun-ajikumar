import { FadeIn } from "./ui/FadeIn";

interface Props { tag: string; title: string; text?: string }

export function SectionHeader({ tag, title, text }: Props) {
  return (
    <FadeIn className="mx-auto max-w-3xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-violet-400">{tag}</p>
      <h2 className="font-bold leading-tight tracking-tight text-white" style={{ fontSize: "clamp(1.875rem, 4.5vw, 3rem)" }}>
        {title}
      </h2>
      {text && <p className="mt-4 text-base text-[#94A3B8] sm:text-lg">{text}</p>}
    </FadeIn>
  );
}
