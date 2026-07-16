import { HiOutlineLightBulb, HiOutlineCube, HiOutlineUsers } from "react-icons/hi2";
import Section from "../components/ui/Section";
import SectionTitle from "../components/SectionTitle/SectionTitle";

const principles = [
  {
    id: 1,
    icon: HiOutlineLightBulb,
    title: "Problem First",
    description: "I design around real user problems, not trends every decision has a reason.",
  },
  {
    id: 2,
    icon: HiOutlineCube,
    title: "Clean Systems",
    description: "Modular, readable code that's easy to extend, debug, and hand off.",
  },
  {
    id: 3,
    icon: HiOutlineUsers,
    title: "Built for People",
    description: "Local context matters. I build for the people who'll actually use it.",
  },
];

const Philosophy = () => {
  return (
    <Section id="philosophy">
      <SectionTitle eyebrow="How I Work" title="Design Philosophy" />

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {principles.map(({ id, icon: Icon, title, description }) => (
          <div
            key={id}
            className="rounded-2xl border border-[#2E2E2E] bg-[#171717] p-6 transition-all duration-300 hover:border-[#F64900]/50"
          >
            <Icon className="h-8 w-8 text-[#F64900]" />
            <h3 className="mt-4 font-[Space_Grotesk] text-lg font-semibold text-white">
              {title}
            </h3>
            <p className="mt-2 font-[Manrope] text-sm text-[#A1A1AA]">{description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Philosophy;