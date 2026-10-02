import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

interface Props { to: number; prefix?: string; suffix?: string }

export function AnimatedCounter({ to, prefix = "", suffix = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, { duration: 1.6, ease: "easeOut", onUpdate: (v) => setValue(Math.round(v)) });
    return () => controls.stop();
  }, [inView, to]);

  return <span ref={ref}>{prefix}{value.toLocaleString("en-US")}{suffix}</span>;
}
