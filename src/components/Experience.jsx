import experiences from "../data/experience";
import SectionHeader from "./SectionHeader";

export default function Experience() {
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