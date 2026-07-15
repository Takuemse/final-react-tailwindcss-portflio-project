import Section from "../components/ui/Section";
import SectionTitle from "../components/SectionTitle/SectionTitle";

const About = () => {
  return (
    <Section id="about">
      <SectionTitle eyebrow="About" title="Who I Am" />

      <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2">
        <p className="font-[Manrope] text-base leading-relaxed text-[#A1A1AA] md:text-lg">
          I'm a self-taught developer and designer from Harare, Zimbabwe,
          currently sharpening my craft through an intensive full-time tech
          bootcamp. My background sits at the intersection of design and
          engineering I care as much about how an interface feels as I do
          about how clean the code behind it is.
        </p>
        <p className="font-[Manrope] text-base leading-relaxed text-[#A1A1AA] md:text-lg">
          What drives me is building things with local relevance products
          that solve real problems for people in Zimbabwe, not just
          portfolio filler. Every project here reflects that: thinking
          through the user's actual situation before I write a single line
          of code.
        </p>
      </div>
    </Section>
  );
};

export default About;