function InventoryKpiVisual() {
  return (
    <div className="relative h-60 overflow-hidden bg-[#080a0f] p-5">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative h-full rounded-2xl border border-[#f4efe7]/10 bg-[#10131c] p-4 shadow-2xl">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#f2b56b]">
              Inventory Command Center
            </p>
            <p className="mt-1 text-xs text-[#a9a092]">
              Sales, stock, reorder risk, and warehouse movement
            </p>
          </div>

          <span className="rounded-full border border-[#71d6c9]/30 bg-[#71d6c9]/10 px-3 py-1 text-xs font-semibold text-[#71d6c9]">
            Live KPIs
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-xl border border-[#f4efe7]/10 bg-[#080a0f]/70 p-3">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#a9a092]">
              Reorder Risk
            </p>
            <p className="mt-2 text-2xl font-black text-[#f2b56b]">18</p>
            <div className="mt-3 h-2 rounded-full bg-[#f4efe7]/10">
              <div className="h-2 w-[62%] rounded-full bg-[#f2b56b]" />
            </div>
          </div>

          <div className="rounded-xl border border-[#f4efe7]/10 bg-[#080a0f]/70 p-3">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#a9a092]">
              Inventory Turnover
            </p>
            <p className="mt-2 text-2xl font-black text-[#71d6c9]">4.7x</p>
            <div className="mt-3 h-2 rounded-full bg-[#f4efe7]/10">
              <div className="h-2 w-[74%] rounded-full bg-[#71d6c9]" />
            </div>
          </div>

          <div className="rounded-xl border border-[#f4efe7]/10 bg-[#080a0f]/70 p-3">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#a9a092]">
              GMROI
            </p>
            <p className="mt-2 text-2xl font-black text-[#f4efe7]">2.3</p>
            <div className="mt-3 h-2 rounded-full bg-[#f4efe7]/10">
              <div className="h-2 w-[52%] rounded-full bg-[#f4efe7]/50" />
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-[1.2fr_0.8fr] gap-3">
          <div className="rounded-xl border border-[#f4efe7]/10 bg-[#080a0f]/70 p-3">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-semibold text-[#f4efe7]">
                Stock movement
              </p>
              <p className="font-mono text-[10px] text-[#a9a092]">7 days</p>
            </div>

            <div className="flex h-16 items-end gap-2">
              {[32, 48, 38, 70, 54, 82, 60].map((height, index) => (
                <div
                  key={index}
                  className="flex-1 rounded-t bg-[#f2b56b]/70"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#f4efe7]/10 bg-[#080a0f]/70 p-3">
            <p className="mb-3 text-xs font-semibold text-[#f4efe7]">
              Alerts
            </p>

            <div className="space-y-2">
              <div className="flex items-center justify-between rounded-lg bg-[#f2b56b]/10 px-2 py-1">
                <span className="text-[11px] text-[#a9a092]">Low stock</span>
                <span className="text-[11px] font-bold text-[#f2b56b]">9</span>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-[#71d6c9]/10 px-2 py-1">
                <span className="text-[11px] text-[#a9a092]">Fast movers</span>
                <span className="text-[11px] font-bold text-[#71d6c9]">14</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectVisual({ project }) {
  if (project.visualType === "inventory-kpi") {
    return (
      <div className="project-visual relative overflow-hidden border-b border-[#f4efe7]/10 bg-[#080a0f]">
        <InventoryKpiVisual />
      </div>
    );
  }

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