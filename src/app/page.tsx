import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Proejcts";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
