import personalInfo from "../data/personalInfo";

export default function Navbar() {
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