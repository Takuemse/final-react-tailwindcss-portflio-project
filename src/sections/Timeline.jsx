import { timeline } from "../data/timeline";
import Section from "../components/ui/Section";
import SectionTitle from "../components/SectionTitle/SectionTitle";

const Timeline = () => {
  return (
    <Section id="timeline">
      <SectionTitle eyebrow="Journey" title="My Path So Far" />

      <div className="mt-12 flex flex-col gap-8 border-l border-[#2E2E2E] pl-8">
        {timeline.map((item) => (
          <div key={item.id} className="relative">
            <span className="absolute -left-9.5 top-1 h-3 w-3 rounded-full bg-[#F64900]" />
            <span className="font-[Manrope] text-sm font-medium text-[#F64900]">
              {item.year}
            </span>
            <h3 className="mt-1 font-[Space_Grotesk] text-lg font-semibold text-white">
              {item.title}
            </h3>
            <p className="mt-2 max-w-2xl font-[Manrope] text-sm text-[#A1A1AA]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Timeline;