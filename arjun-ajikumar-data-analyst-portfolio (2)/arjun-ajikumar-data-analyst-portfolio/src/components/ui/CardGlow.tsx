import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "../../lib/utils";

export function CardGlow({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mouse-x", `${e.clientX - r.left}px`);
    el.style.setProperty("--mouse-y", `${e.clientY - r.top}px`);
  }

  return (
    <div ref={ref} onMouseMove={onMove} className={cn("card-glow relative overflow-hidden", className)}>
      <div className="relative">{children}</div>
    </div>
  );
}
