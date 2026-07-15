import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import SectionTitle from "../components/SectionTitle/SectionTitle";

const Projects = () => {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="bg-[#0A0A0A] px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Selected Work"
          title="Projects"
          description="A few builds that show how I think, not just what I can code."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/projects"
            className="rounded-full border border-[#2E2E2E] px-6 py-3 font-[Manrope] text-sm font-medium text-white transition-all duration-300 hover:border-[#F64900] hover:text-[#F64900]"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;