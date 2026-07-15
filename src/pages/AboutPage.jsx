import About from "../sections/About";
import AboutHero from "../sections/AboutHero";
import Philosophy from "../sections/Philosophy";
import Timeline from "../sections/Timeline";
import Certificates from "../sections/Certificates";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-[#0A0A0A] pt-24">
      <AboutHero/>
      <About />

      <Philosophy />
      <Timeline />
      <Certificates />
    </main>
  );
};

export default AboutPage;