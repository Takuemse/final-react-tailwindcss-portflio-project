import { skills } from "../data/skills";
import SkillCard from "../components/SkillCard/SkillCard";
import Section from "../components/ui/Section";
import SectionTitle from "../components/SectionTitle/SectionTitle";

const Skills = () => {
  return (
    <Section id="skills">
      <SectionTitle
        eyebrow="Toolkit"
        title="Skills & Technologies"
        description="The tools I reach for when turning ideas into interfaces."
      />

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {skills.map((skill) => (
          <SkillCard key={skill.id} icon={skill.icon} name={skill.name} category={skill.category} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;