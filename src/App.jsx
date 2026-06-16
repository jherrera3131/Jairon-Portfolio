import { useState } from "react";

import profileImage from "./assets/profile.png";
import travelOverview from "./assets/travel-overview.png";
import travelSystemOne from "./assets/travel-system-1.png";
import travelSystemTwo from "./assets/travel-system-2.png";

import Reveal from "./components/Reveal";
import SectionHeader from "./components/SectionHeader";
import Metric from "./components/Metric";

import personalInfo from "./data/personalInfo";
import skills from "./data/skills";
import projects, { projectFilters } from "./data/projects";
import experiences from "./data/experience";

function Navbar() {
  const links = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#f4efe7]/10 bg-[#080a0f]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a
          href="#home"
          className="font-mono text-sm font-semibold text-[#f4efe7]"
        >
          Jairon<span className="text-[#f2b56b]">.</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-[#a9a092] transition hover:text-[#f4efe7]"
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href={`mailto:${personalInfo.email}`}
          className="rounded-full border border-[#f2b56b]/40 px-4 py-2 text-sm text-[#f4efe7] transition hover:border-[#f2b56b] hover:bg-[#f2b56b]/10"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="grid-bg relative flex min-h-screen items-center overflow-hidden px-5 pt-24"
    >
      <div className="absolute left-8 top-28 hidden h-[70%] w-px bg-gradient-to-b from-transparent via-[#f2b56b]/30 to-transparent md:block" />
      <div className="absolute bottom-24 right-12 h-56 w-56 rounded-full border border-[#f2b56b]/10" />
      <div className="absolute bottom-36 right-24 h-28 w-28 rounded-full border border-[#71d6c9]/10" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <div>
            <p className="mb-5 font-mono text-sm uppercase tracking-[0.28em] text-[#f2b56b]">
              Product-minded builder / data systems / visual clarity
            </p>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-[#f4efe7] md:text-7xl">
              Designing tools for the part of the problem where things are still
              messy.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#a9a092]">
              I’m Jairon Herrera, a Computer Science & Economics graduate from
              Connecticut College based in Stamford, CT. I build software,
              analytics tools, dashboards, research platforms, and data
              visualizations that help people understand what is happening inside
              complex systems.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-[#f2b56b] px-6 py-3 text-sm font-bold text-[#080a0f] transition hover:-translate-y-0.5 hover:bg-[#ffd08f]"
              >
                View case studies
                <span>↗</span>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#f4efe7]/15 px-6 py-3 text-sm font-semibold text-[#f4efe7] transition hover:-translate-y-0.5 hover:border-[#f2b56b]/60 hover:bg-[#f2b56b]/10"
              >
                <span>PDF</span>
                Resume
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="group rounded-2xl border border-[#f4efe7]/10 bg-[#10131c]/70 p-4 transition hover:-translate-y-1 hover:border-[#f2b56b]/50 hover:bg-[#f2b56b]/10"
              >
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#f2b56b]">
                  Email
                </p>
                <p className="text-sm font-semibold text-[#f4efe7] group-hover:text-[#ffd08f]">
                  {personalInfo.email}
                </p>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-[#f4efe7]/10 bg-[#10131c]/70 p-4 transition hover:-translate-y-1 hover:border-[#71d6c9]/50 hover:bg-[#71d6c9]/10"
              >
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#71d6c9]">
                  GitHub
                </p>
                <p className="text-sm font-semibold text-[#f4efe7] group-hover:text-[#a7fff4]">
                  jherrera3131
                </p>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-[#f4efe7]/10 bg-[#10131c]/70 p-4 transition hover:-translate-y-1 hover:border-[#f2b56b]/50 hover:bg-[#f2b56b]/10"
              >
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#f2b56b]">
                  LinkedIn
                </p>
                <p className="text-sm font-semibold text-[#f4efe7] group-hover:text-[#ffd08f]">
                  /in/jaironhh
                </p>
              </a>
            </div>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#f4efe7]/10 bg-[#10131c]/60 px-4 py-2 text-sm text-[#a9a092]">
              <span className="h-2 w-2 rounded-full bg-[#71d6c9]" />
              Based in {personalInfo.location}
            </div>
          </div>
        </Reveal>

        <Reveal className="float-slow">
          <div className="card-glow rounded-[2rem] border border-[#f4efe7]/10 bg-[#10131c]/80 p-5">
            <div className="rounded-[1.5rem] border border-[#f4efe7]/10 bg-[#080a0f] p-5">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#f2b56b]" />
                  <span className="h-3 w-3 rounded-full bg-[#71d6c9]" />
                  <span className="h-3 w-3 rounded-full bg-[#f4efe7]/30" />
                </div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#a9a092]">
                  system view
                </p>
              </div>

              <div className="scanline rounded-2xl border border-[#f4efe7]/10 bg-[#10131c] p-5">
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-24 w-24 overflow-hidden rounded-2xl border border-[#f2b56b]/30 bg-[#f2b56b]/10">
                    <img
                      src={profileImage}
                      alt="Jairon Herrera"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#f4efe7]">
                      {personalInfo.name}
                    </h3>
                    <p className="text-sm text-[#a9a092]">
                      Product + Data + Code
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Metric label="Projects documented" value="6" />
                  <Metric label="Core theme" value="Complexity → clarity" />
                  <Metric label="Process" value="Research / Build / Evaluate" />
                </div>

                <div className="mt-5 rounded-2xl border border-[#f4efe7]/10 bg-[#080a0f]/70 p-4">
                  <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-[#f2b56b]">
                    Current focus
                  </p>

                  <p className="text-sm leading-6 text-[#a9a092]">
                  Seeking early-career data, software, and product-facing roles where I can build tools that make complex systems easier to understand. My portfolio highlights dashboards, research platforms, data visualizations, and decision-support systems.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                <MiniCard icon="SQL" label="Data" />
                <MiniCard icon="UX" label="Users" />
                <MiniCard icon="VIZ" label="Visuals" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MiniCard({ icon, label }) {
  return (
    <div className="rounded-2xl border border-[#f4efe7]/10 bg-[#10131c] p-4 text-center text-[#a9a092] transition hover:-translate-y-1 hover:border-[#f2b56b]/40">
      <div className="mb-2 flex justify-center font-mono text-sm font-bold text-[#f2b56b]">
        {icon}
      </div>
      <p className="text-xs font-semibold">{label}</p>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="About"
          title="A technical background with a product mindset."
          description="My work sits at the intersection of computer science, economics, data visualization, and user-centered product thinking."
        />

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-[#f4efe7]/10 bg-[#10131c]/70 p-6 md:col-span-2">
            <p className="leading-8 text-[#a9a092]">
              My work is built around a focused mix of software, data, and
              product thinking. I build web apps, databases, Python workflows,
              Rails projects, Flask systems, SQL-backed tools, dashboards,
              interfaces, and visual systems that help people understand
              complicated information faster. Whether I am writing code,
              analyzing data, or designing an interface, the goal is the same:
              make the system easier to read, trust, and act on.
            </p>

            <p className="mt-5 leading-8 text-[#a9a092]">
              At Connecticut College, I studied Computer Science and Economics
              because I was interested in both sides of a problem: how systems
              work, and how people make decisions inside them. My projects have
              covered recommendation systems, online community networks, KPI
              dashboards, SQL databases, retail inventory analytics, and
              interactive visualizations built with JavaScript, HTML, CSS, D3.js,
              Python, Flask, Rails, and SQL. What makes my work different is that
              I do not separate the technical problem from the human one. I want
              to build tools that are reliable, readable, and useful under
              pressure.
            </p>
          </div>

          <div className="rounded-3xl border border-[#f2b56b]/20 bg-[#f2b56b]/10 p-6">
            <div className="mb-4 text-3xl text-[#f2b56b]">✦</div>
            <h3 className="mb-3 text-xl font-bold text-[#f4efe7]">
              How I Work
            </h3>
            <p className="leading-7 text-[#a9a092]">
              Research the problem, structure the information, prototype the
              workflow, build the system, and evaluate what actually helps users
              make better decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="bg-[#10131c]/30 px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Skills"
          title="Tools I use to design, build, and analyze."
          description="A mix of programming, data analysis, visualization, and product-oriented research skills."
        />

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-[#f4efe7]/10 bg-[#10131c]/70 px-4 py-2 text-sm text-[#f4efe7] transition hover:-translate-y-0.5 hover:border-[#f2b56b]/50 hover:bg-[#f2b56b]/10"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
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
          title="Selected work"
          description="Projects focused on dashboards, data visualization, recommendation systems, research platforms, and web applications."
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
              {filter}
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

function ProjectCard({ project }) {
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

function ProjectVisual({ project }) {
  return (
    <div className="project-visual relative overflow-hidden border-b border-[#f4efe7]/10 bg-[#080a0f]">
      {project.images ? (
        <div className="relative">
          <div className="absolute left-5 top-5 z-10 rounded-full border border-[#f2b56b]/30 bg-[#080a0f]/80 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-[#f2b56b] backdrop-blur">
            {project.category}
          </div>

          <img
            src={project.images[0]}
            alt={`${project.name} screenshot`}
            className="h-64 w-full object-cover object-top opacity-90 transition duration-500 group-hover:scale-[1.03]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#10131c] via-[#10131c]/10 to-transparent" />

          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            {project.images.slice(0, 3).map((image, index) => (
              <div
                key={image}
                className="h-14 flex-1 overflow-hidden rounded-xl border border-[#f4efe7]/15 bg-[#080a0f]"
              >
                <img
                  src={image}
                  alt={`${project.name} preview ${index + 1}`}
                  className="h-full w-full object-cover object-top opacity-80"
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="relative flex h-60 items-center justify-center overflow-hidden">
          <div className="absolute left-6 top-6 rounded-full border border-[#f2b56b]/20 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-[#f2b56b]">
            {project.category}
          </div>

          <div className="absolute inset-0 grid-bg opacity-60" />

          <div className="relative w-[78%] rounded-2xl border border-[#f4efe7]/10 bg-[#10131c] p-4 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#a9a092]">
                {project.visualLabel}
              </p>
              <span className="h-2 w-2 rounded-full bg-[#71d6c9]" />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-[#f4efe7]/10 bg-[#f2b56b]/10 p-3">
                <div className="mb-3 h-2 w-10 rounded-full bg-[#f2b56b]/60" />
                <div className="h-10 rounded-lg bg-[#f4efe7]/10" />
              </div>

              <div className="rounded-xl border border-[#f4efe7]/10 bg-[#71d6c9]/10 p-3">
                <div className="mb-3 h-2 w-10 rounded-full bg-[#71d6c9]/60" />
                <div className="h-10 rounded-lg bg-[#f4efe7]/10" />
              </div>

              <div className="rounded-xl border border-[#f4efe7]/10 bg-[#f4efe7]/5 p-3">
                <div className="mb-3 h-2 w-10 rounded-full bg-[#f4efe7]/30" />
                <div className="h-10 rounded-lg bg-[#f4efe7]/10" />
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="h-2 w-full rounded-full bg-[#f4efe7]/10" />
              <div className="h-2 w-3/4 rounded-full bg-[#f4efe7]/10" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

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

function TravelCaseStudy() {
  return (
    <section id="travel-case-study" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Case Study"
          title="Travel Recommendation Research Platform"
          description="A research platform exploring how different recommendation systems handle constraints, preferences, ranking stability, and usability."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-[#f4efe7]/10 bg-[#10131c]/80 p-6">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-[#f2b56b]">
              Product question
            </p>

            <h3 className="text-2xl font-bold text-[#f4efe7]">
              How should a travel tool balance speed, constraints, and
              personalization?
            </h3>

            <p className="mt-4 leading-7 text-[#a9a092]">
              I compared a baseline ranking system with a structured
              preference-aware planner to understand whether richer user input
              leads to better recommendations or creates more complexity for
              users.
            </p>

            <div className="mt-6 grid gap-3">
              <Metric label="Participants" value="30+" />
              <Metric label="Controlled benchmarks" value="18" />
              <Metric
                label="Evaluation focus"
                value="Alignment / stability / usability"
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#f4efe7]/10 bg-[#10131c]">
            <img
              src={travelOverview}
              alt="Constrained Travel Recommender overview"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-[#f4efe7]/10 bg-[#10131c]">
            <img
              src={travelSystemOne}
              alt="Baseline Planner screenshot"
              className="h-full w-full object-cover object-top"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#f4efe7]/10 bg-[#10131c]">
            <img
              src={travelSystemTwo}
              alt="Structured Preference Planner screenshot"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <CaseStudyPoint
            label="Problem"
            text="Travel planning involves budget, time, destination, and preference constraints that can conflict with one another."
          />
          <CaseStudyPoint
            label="Design decision"
            text="I separated the baseline planner from the preference-aware planner so the systems could be compared clearly."
          />
          <CaseStudyPoint
            label="Learning"
            text="More personalization can improve perceived usefulness, but it also adds complexity that must be carefully designed."
          />
        </div>
      </div>
    </section>
  );
}

function CaseStudyPoint({ label, text }) {
  return (
    <div className="rounded-3xl border border-[#f4efe7]/10 bg-[#10131c]/70 p-6">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-[#f2b56b]">
        {label}
      </p>
      <p className="leading-7 text-[#a9a092]">{text}</p>
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="bg-[#10131c]/30 px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Experience / Education"
          title="Research, analytics, and technical work."
          description="A timeline of academic, research, and professional experiences that shaped my product and data-focused approach."
        />

        <div className="space-y-5">
          {experiences.map((item) => (
            <div
              key={`${item.title}-${item.org}`}
              className="rounded-3xl border border-[#f4efe7]/10 bg-[#10131c]/70 p-6"
            >
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                <div>
                  <h3 className="text-xl font-bold text-[#f4efe7]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[#f2b56b]">{item.org}</p>
                </div>
                <p className="font-mono text-sm text-[#a9a092]">{item.date}</p>
              </div>

              <p className="mt-4 leading-7 text-[#a9a092]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-5 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-3 font-mono text-sm uppercase tracking-[0.25em] text-[#f2b56b]">
          Contact
        </p>

        <h2 className="text-4xl font-black tracking-tight text-[#f4efe7] md:text-5xl">
          Let’s build something clear from something complex.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#a9a092]">
          I’m open to product design, data visualization, analytics, and
          technical roles where I can help turn complex systems into better user
          experiences.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-[#f2b56b] px-6 py-3 text-sm font-bold text-[#080a0f] transition hover:-translate-y-0.5 hover:bg-[#ffd08f]"
          >
            <span>✉️</span>
            Email Me
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#f4efe7]/15 px-6 py-3 text-sm font-semibold text-[#f4efe7] transition hover:-translate-y-0.5 hover:border-[#f2b56b]/60 hover:bg-[#f2b56b]/10"
          >
            <span>{`</>`}</span>
            GitHub
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#f4efe7]/15 px-6 py-3 text-sm font-semibold text-[#f4efe7] transition hover:-translate-y-0.5 hover:border-[#f2b56b]/60 hover:bg-[#f2b56b]/10"
          >
            <span>in</span>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#f4efe7]/10 px-5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-[#a9a092]/70 md:flex-row">
        <p>© 2026 Jairon Herrera. Built with React and Tailwind CSS.</p>
        <p className="inline-flex items-center gap-2">
          <span>{`</>`}</span>
          Designed for clarity, dashboards, and decision-support tools.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main className="noise">
      <Navbar />
      <Hero />

      <Reveal>
        <About />
      </Reveal>

      <Reveal>
        <Skills />
      </Reveal>

      <Reveal>
        <Projects />
      </Reveal>

      <Reveal>
        <TravelCaseStudy />
      </Reveal>

      <Reveal>
        <Experience />
      </Reveal>

      <Reveal>
        <Contact />
      </Reveal>

      <Footer />
    </main>
  );
}