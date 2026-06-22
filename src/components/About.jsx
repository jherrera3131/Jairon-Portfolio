import SectionHeader from "./SectionHeader";

export default function About() {
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
            My work is built around a focused mix of software, data, and analytical problem-solving. I’ve worked across web applications, databases, Python workflows, Rails projects, Flask systems, SQL-backed tools, dashboards, and interactive visualizations, with the same goal across each project: make complicated information easier to understand, trust, and act on.
            </p>

            <p className="mt-5 leading-8 text-[#a9a092]">
            At Connecticut College, I studied Computer Science and Economics because I was interested in both sides of a problem: how systems work, and how people make decisions inside them. My projects have covered recommendation systems, online community networks, KPI dashboards, SQL databases, retail inventory analytics, and interactive visualizations built with JavaScript, HTML, CSS, D3.js, Python, Flask, Rails, and SQL. What connects them is not one specific job title or field, but the way I approach problems: breaking down complexity, finding patterns, and building clearer ways to work with information.
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