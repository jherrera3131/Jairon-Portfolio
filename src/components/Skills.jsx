import skills from "../data/skills";
import SectionHeader from "./SectionHeader";

export default function Skills() {
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