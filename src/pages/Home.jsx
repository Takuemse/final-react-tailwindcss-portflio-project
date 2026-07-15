import Hero from "../sections/Hero";
import About from "../sections/About";
import Philosophy from "../sections/Philosophy";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Timeline from "../sections/Timeline";
import Certificates from "../sections/Certificates";
import Contact from "../sections/Contact";

const Home = () => {
  return (
    <main className="bg-[#0A0A0A]">
      <Hero />
      <About />
      <Philosophy />
      <Skills />
      <Projects />
      <Timeline />
      <Certificates />
      <Contact />
    </main>
  );
};

export default Home;