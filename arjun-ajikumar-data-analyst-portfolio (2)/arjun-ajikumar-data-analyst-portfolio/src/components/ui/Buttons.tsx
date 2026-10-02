import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
  to?: string;
  href?: string;
  download?: boolean;
  onClick?: () => void;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500";

function Base({ cls, to, href, download, onClick, children }: Props & { cls: string }) {
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  if (href) {
    const external = /^https?:/.test(href);
    return (
      <a href={href} className={cls} download={download || undefined} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return <button type="button" onClick={onClick} className={cls}>{children}</button>;
}

export function PrimaryButton({ variant = "gradient", className, ...rest }: Props & { variant?: "gradient" | "white" }) {
  const look =
    variant === "white"
      ? "bg-white font-semibold text-black shadow-lg hover:scale-105 hover:bg-neutral-200"
      : "bg-gradient-to-r from-violet-600 to-fuchsia-600 font-semibold text-white hover:shadow-[0_0_24px_rgba(124,58,237,0.5)]";
  return <Base cls={cn(base, look, className)} {...rest} />;
}

export function SecondaryButton({ className, ...rest }: Props) {
  return (
    <Base
      cls={cn(base, "border border-white/15 bg-white/5 font-medium text-white backdrop-blur-sm hover:bg-white/10", className)}
      {...rest}
    />
  );
}
