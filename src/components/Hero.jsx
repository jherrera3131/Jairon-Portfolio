import profileImage from "../assets/profile.png";
import personalInfo from "../data/personalInfo";
import Metric from "./Metric";
import Reveal from "./Reveal";

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

export default function Hero() {
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
                className="magnetic-button group inline-flex items-center gap-2 rounded-full bg-[#f2b56b] px-6 py-3 text-sm font-bold text-[#080a0f] transition hover:-translate-y-0.5 hover:bg-[#ffd08f]"              >
                View case studies
                <span className="arrow-nudge">↗</span>
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
                    Building a portfolio around dashboards, decision-support
                    tools, data visualization, and product experiences that make
                    complex systems easier to understand.
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