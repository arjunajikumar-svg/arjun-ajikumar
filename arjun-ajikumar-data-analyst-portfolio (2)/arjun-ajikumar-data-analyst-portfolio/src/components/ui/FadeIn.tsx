import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props { children: ReactNode; index?: number; delay?: number; className?: string }

export function FadeIn({ children, index = 0, delay, className }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "50px" }}
      transition={{ duration: 0.6, delay: delay ?? index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
