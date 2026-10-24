import { useEffect } from "react";
import { Aurora } from "./components/Aurora";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  useEffect(() => {
    // Always open the portfolio at the top, ignoring any restored scroll position.
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="top" className="relative min-h-[100dvh] bg-zinc-950 text-zinc-200">
      <Aurora />
      {/* sentinel drives the nav background swap via IntersectionObserver */}
      <div id="nav-sentinel" aria-hidden className="absolute top-0 h-4 w-full" />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
