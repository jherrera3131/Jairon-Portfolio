import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CaseStudies from "./components/CaseStudies";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

export default function App() {
  return (
    <main className="noise">
      <Navbar />
      <Hero />

      <Reveal>
        <About />
      </Reveal>

      <Reveal>
        <Skills />
      </Reveal>

      <Reveal>
        <Projects />
      </Reveal>

      <CaseStudies />

      <Reveal>
        <Experience />
      </Reveal>

      <Reveal>
        <Contact />
      </Reveal>

      <Footer />
    </main>
  );
}