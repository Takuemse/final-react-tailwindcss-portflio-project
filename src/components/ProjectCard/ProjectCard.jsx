import { HiArrowUpRight } from "react-icons/hi2";

const ProjectCard = ({ project }) => {
  const { title, tagline, tags, image, caseStudyUrl } = project;

  return (
    
      <a href={caseStudyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#2E2E2E] bg-[#171717] transition-all duration-300 hover:border-[#F64900]/50 hover:-translate-y-1"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-[#1E1E1E]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-[Space_Grotesk] text-xl font-semibold text-white">
            {title}
          </h3>
          <HiArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-[#A1A1AA] transition-all duration-300 group-hover:text-[#F64900] group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>

        <p className="font-[Manrope] text-sm leading-relaxed text-[#A1A1AA]">
          {tagline}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#2E2E2E] bg-[#0A0A0A] px-3 py-1 font-[Manrope] text-xs text-[#A1A1AA] transition-colors duration-300 group-hover:border-[#F64900]/30 group-hover:text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;