import { useState } from "react";
import projects, { projectFilters } from "../data/projects";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";

const filterLabels = {
  All: "All",
  Featured: "Highlights",
  "Data Visualization": "Visual Analysis",
  Dashboard: "Analytics Tools",
  Research: "Research Systems",
  "Web App": "Web & Software",
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Featured") return project.featured;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Projects"
          title="Applied projects"
          description="Projects across software, data analysis, visualization, research systems, and web applications — built to make complex information easier to explore, evaluate, and use."
        />

        <div className="mb-8 flex flex-wrap gap-3">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                activeFilter === filter
                  ? "bg-[#f2b56b] font-semibold text-[#080a0f]"
                  : "border border-[#f4efe7]/10 bg-[#10131c]/70 text-[#a9a092] hover:border-[#f2b56b]/50 hover:text-[#f4efe7]"
              }`}
            >
              {filterLabels[filter]}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}