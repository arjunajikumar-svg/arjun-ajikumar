import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy, Mail } from "lucide-react";
import { PrimaryButton, SecondaryButton } from "../components/ui/Buttons";
import { contact } from "../data/portfolio";

export function CTA() {
  const [toast, setToast] = useState<string | null>(null);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contact.email);
      setToast("Email copied to clipboard");
    } catch {
      setToast("Copy failed. Please copy it manually.");
    }
    setTimeout(() => setToast(null), 2200);
  }

  return (
    <section id="contact" className="mx-auto my-20 max-w-5xl px-6">
      <div className="relative overflow-hidden rounded-3xl border border-violet-500/30 bg-gradient-to-b from-[#13111C] to-[#0A0A0E] p-10 text-center shadow-[0_0_80px_rgba(124,58,237,0.2)] sm:p-16">
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-500/20"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.22) 0%, transparent 65%)" }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative">
          <h2 className="mx-auto max-w-3xl font-extrabold leading-tight tracking-tight text-white" style={{ fontSize: "clamp(1.75rem, 4.5vw, 3rem)" }}>
            Hiring a junior data analyst? <span className="accent-gradient-text">Let&rsquo;s talk.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[#94A3B8] sm:text-lg">
            I&rsquo;m open to entry-level and junior data analyst roles. Send me a note, or take a look at my resume.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <PrimaryButton href={`mailto:${contact.email}`}><Mail className="h-4 w-4" /> Email me</PrimaryButton>
            <SecondaryButton onClick={copyEmail}><Copy className="h-4 w-4" /> {contact.email}</SecondaryButton>
          </div>
          <p className="mt-6 text-sm text-[#94A3B8]">{contact.phone} &middot; {contact.location}</p>
        </div>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            role="status"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className="fixed bottom-6 left-1/2 z-50 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-[#0E0E12] px-5 py-3 text-sm text-white shadow-xl"
          >
            <Check className="h-4 w-4 text-emerald-400" /> {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
