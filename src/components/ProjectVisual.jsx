export default function ProjectVisual({ project }) {
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