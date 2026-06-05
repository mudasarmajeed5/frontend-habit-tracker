import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { DesignGallery } from "@/components/DesignGallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ParticlesBackground } from "@/components/ParticlesBackground";

export default function Home() {
  return (
    <main className="relative">
      <ParticlesBackground />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <DesignGallery />
      <Contact />
      <Footer />
    </main>
  );
}
