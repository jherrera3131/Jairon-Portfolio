import ProjectVisual from "./ProjectVisual";

function ProjectDetail({ label, text }) {
  return (
    <div>
      <p className="mb-1 font-mono text-xs uppercase tracking-[0.2em] text-[#f2b56b]">
        {label}
      </p>
      <p className="text-sm leading-6 text-[#a9a092]">{text}</p>
    </div>
  );
}

export default function ProjectCard({ project }) {
  return (
    <article className="project-card group overflow-hidden rounded-3xl border border-[#f4efe7]/10 transition duration-300 hover:-translate-y-1 hover:border-[#f2b56b]/40">
      <ProjectVisual project={project} />

      <div className="p-6">
        <div className="mb-3 flex items-start justify-between gap-4">
          <h3 className="text-2xl font-bold text-[#f4efe7]">{project.name}</h3>

          {project.featured && (
            <span className="rounded-full border border-[#f2b56b]/20 bg-[#f2b56b]/10 px-3 py-1 text-xs font-semibold text-[#f2b56b]">
              Featured
            </span>
          )}
        </div>

        <p className="mb-5 leading-7 text-[#a9a092]">
          {project.shortDescription}
        </p>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#f4efe7]/10 bg-[#080a0f]/60 px-3 py-1 text-xs text-[#a9a092]"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="space-y-4 border-t border-[#f4efe7]/10 pt-5">
          <ProjectDetail label="Problem" text={project.mainProblem} />
          <ProjectDetail label="Built" text={project.whatIBuilt} />
          <ProjectDetail label="Impact" text={project.result} />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.caseStudy && (
            <a
              href="#travel-case-study"
              className="inline-flex items-center gap-2 rounded-full bg-[#f2b56b] px-4 py-2 text-sm font-bold text-[#080a0f] transition hover:-translate-y-0.5 hover:bg-[#ffd08f]"
            >
              View Case Study
              <span>↗</span>
            </a>
          )}

          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#f4efe7]/10 px-4 py-2 text-sm text-[#f4efe7] transition hover:-translate-y-0.5 hover:border-[#f2b56b]/60 hover:bg-[#f2b56b]/10"
            >
              <span>{`</>`}</span>
              Code
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-full border border-[#f4efe7]/10 px-4 py-2 text-sm text-[#a9a092]/60">
              <span>{`</>`}</span>
              Code coming soon
            </span>
          )}

          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#f4efe7]/10 px-4 py-2 text-sm text-[#f4efe7] transition hover:-translate-y-0.5 hover:border-[#f2b56b]/60 hover:bg-[#f2b56b]/10"
            >
              <span>↗</span>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}