import { useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard/ProjectCard";

const filters = ["all", "design", "development", "marketing"];

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const featuredProject = projects.find((project) => project.featured);

  const filteredProjects =
    activeFilter === "all"
      ? projects.filter((project) => project.id !== featuredProject?.id)
      : projects.filter((project) => project.category === activeFilter);

  const gridTitle = activeFilter === "all" ? "Archive Directory" : "Filtered Results";

  return (
    <main className="min-h-screen bg-[#0A0A0A] px-6 pb-24 pt-32 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs font-medium uppercase tracking-widest text-[#F64900]">
              Projects Archive
            </span>
            <h1 className="font-[Space_Grotesk] text-4xl font-bold text-white md:text-5xl">
              Selected Works
            </h1>
          </div>

          <div className="inline-flex w-fit items-center gap-1 rounded-full border border-[#2E2E2E] bg-[#171717]/40 p-1">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 font-[Manrope] text-xs font-medium capitalize transition-all duration-500 ease-out ${
                  activeFilter === filter
                    ? "bg-[#F64900] text-white"
                    : "text-[#A1A1AA] hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {activeFilter === "all" && featuredProject && (
          <div className="group mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="flex flex-col justify-center gap-6 lg:col-span-5">
              <div className="flex items-center gap-3">
                <span className=" font-mono text-[10px] font-medium uppercase tracking-widest text-[#F64900]">
                  Featured Case Study
                </span>
                <span className="font-mono text-xs text-[#A1A1AA]">
                  {featuredProject.year}
                </span>
              </div>

              <h2 className="font-[Space_Grotesk] text-3xl font-bold text-white md:text-4xl">
                {featuredProject.title}
              </h2>

              <p className="font-[Manrope] text-base leading-relaxed text-[#A1A1AA] md:text-lg">
                {featuredProject.description}
              </p>

              <div className="grid grid-cols-2 gap-6 border-t border-[#2E2E2E] pt-6">
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#A1A1AA]">
                    Role
                  </span>
                  <span className="font-[Manrope] text-sm text-white">
                    {featuredProject.role}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#A1A1AA]">
                    Tech Stack
                  </span>
                  <span className="font-[Manrope] text-sm text-white">
                    {featuredProject.tags.join(" • ")}
                  </span>
                </div>
              </div>

              
                <a href={featuredProject.caseStudyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-[#F64900] px-6 py-3 font-[Manrope] text-sm font-medium text-white transition-all duration-500 ease-out hover:-translate-y-0.5 hover:bg-[#EA580C]"
              >
                Read Case Study
                <HiArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="lg:col-span-7">
              <div className="relative aspect-16/10 w-full overflow-hidden rounded-3xl border border-[#2E2E2E] bg-[#171717]">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0A] via-transparent to-transparent opacity-70" />
              </div>
            </div>
          </div>
        )}

        <div className="mt-20 flex items-center justify-between border-b border-[#2E2E2E] pb-4">
          <h3 className="font-[Space_Grotesk] text-xl font-semibold text-white">
            {gridTitle}
          </h3>
          <span className="font-mono text-xs text-[#A1A1AA]">
            {String(filteredProjects.length).padStart(2, "0")} ITEMS
          </span>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;