import personalInfo from "../data/personalInfo";

export default function Contact() {
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