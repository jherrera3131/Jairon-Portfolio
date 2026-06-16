export default function SectionHeader({ eyebrow, title, description }) {
    return (
      <div className="mb-10">
        <p className="mb-3 font-mono text-sm uppercase tracking-[0.25em] text-[#f2b56b]">
          {eyebrow}
        </p>
  
        <h2 className="text-3xl font-bold tracking-tight text-[#f4efe7] md:text-4xl">
          {title}
        </h2>
  
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#a9a092]">
            {description}
          </p>
        )}
      </div>
    );
  }