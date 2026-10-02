import { Hero } from "../sections/Hero";
import { ToolMarquee } from "../sections/ToolMarquee";
import { About } from "../sections/About";
import { Capabilities } from "../sections/Capabilities";
import { SelectedWork } from "../sections/SelectedWork";
import { Process } from "../sections/Process";
import { Experience } from "../sections/Experience";
import { CTA } from "../sections/CTA";

export function Home() {
  return (
    <main>
      <Hero />
      <ToolMarquee />
      <About />
      <Capabilities />
      <SelectedWork />
      <Process />
      <Experience />
      <CTA />
    </main>
  );
}
