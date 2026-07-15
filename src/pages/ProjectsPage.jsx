import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import SectionTitle from "../components/SectionTitle/SectionTitle";

const ProjectsPage = () => {
  return (
    <main className="min-h-screen bg-[#0A0A0A] px-6 pb-24 pt-32 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Full Archive"
          title="All Projects"
          description="Every project I've shipped as part of my journey into product design and frontend engineering."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;