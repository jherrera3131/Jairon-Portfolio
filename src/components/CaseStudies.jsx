import caseStudies from "../data/caseStudies";
import SectionHeader from "./SectionHeader";

function InventoryCaseVisual() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[#f4efe7]/10 bg-[#080a0f] p-5">
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative rounded-3xl border border-[#f4efe7]/10 bg-[#10131c] p-5">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#f2b56b]">
              Inventory Command Center
            </p>
            <h4 className="mt-2 text-2xl font-black text-[#f4efe7]">
              Stock risk, pricing, and reorder flow
            </h4>
          </div>

          <span className="rounded-full border border-[#71d6c9]/30 bg-[#71d6c9]/10 px-3 py-1 text-xs font-bold text-[#71d6c9]">
            SQL-backed
          </span>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          <MiniKpi label="Reorder triggers" value="Thresholds" accent="amber" />
          <MiniKpi label="Pricing model" value="Per store" accent="teal" />
          <MiniKpi label="Manager queries" value="5 views" accent="light" />
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-2xl border border-[#f4efe7]/10 bg-[#080a0f]/70 p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-bold text-[#f4efe7]">
                Reorder workflow
              </p>
              <p className="font-mono text-xs text-[#a9a092]">
                inventory → request → fulfillment
              </p>
            </div>

            <div className="space-y-3">
              {["Inventory drops below threshold", "Reorder request created", "Warehouse fulfills stock"].map(
                (step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-3 rounded-xl border border-[#f4efe7]/10 bg-[#10131c] p-3"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f2b56b]/10 font-mono text-xs font-bold text-[#f2b56b]">
                      {index + 1}
                    </span>
                    <span className="text-sm text-[#a9a092]">{step}</span>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-[#f4efe7]/10 bg-[#080a0f]/70 p-4">
            <p className="mb-3 text-sm font-bold text-[#f4efe7]">
              Query outputs
            </p>

            <div className="space-y-2 font-mono text-xs text-[#a9a092]">
              <p className="rounded-lg bg-[#f2b56b]/10 px-3 py-2">
                top_selling_products_by_store
              </p>
              <p className="rounded-lg bg-[#71d6c9]/10 px-3 py-2">
                profitable_store_ranking
              </p>
              <p className="rounded-lg bg-[#f4efe7]/5 px-3 py-2">
                dewalt_co_purchase_patterns
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniKpi({ label, value, accent }) {
  const color =
    accent === "amber"
      ? "text-[#f2b56b]"
      : accent === "teal"
      ? "text-[#71d6c9]"
      : "text-[#f4efe7]";

  return (
    <div className="rounded-2xl border border-[#f4efe7]/10 bg-[#080a0f]/70 p-4">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#a9a092]">
        {label}
      </p>
      <p className={`mt-2 text-2xl font-black ${color}`}>{value}</p>
    </div>
  );
}

function ScreenshotGrid({ images, title }) {
  if (!images) return null;

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {images.slice(0, 3).map((image, index) => (
        <div
          key={image}
          className={`group overflow-hidden rounded-3xl border border-[#f4efe7]/10 bg-[#10131c] ${
            index === 0 ? "lg:col-span-2" : ""
          }`}
        >
          <img
            src={image}
            alt={`${title} screenshot ${index + 1}`}
            className="h-full min-h-64 w-full object-cover object-top opacity-90 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
          />
        </div>
      ))}
    </div>
  );
}

function ResultPill({ label, value }) {
  return (
    <div className="rounded-2xl border border-[#f4efe7]/10 bg-[#080a0f]/70 p-4">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#a9a092]">
        {label}
      </p>
      <p className="mt-2 text-2xl font-black text-[#f4efe7]">{value}</p>
    </div>
  );
}

function MethodStep({ number, text }) {
  return (
    <div className="rounded-2xl border border-[#f4efe7]/10 bg-[#10131c]/70 p-5 transition hover:-translate-y-1 hover:border-[#f2b56b]/40">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-[#f2b56b]">
        Step {number}
      </p>
      <p className="leading-7 text-[#a9a092]">{text}</p>
    </div>
  );
}

function FindingCard({ text }) {
  return (
    <div className="rounded-2xl border border-[#f4efe7]/10 bg-[#080a0f]/70 p-5">
      <p className="leading-7 text-[#a9a092]">{text}</p>
    </div>
  );
}

function CaseStudy({ study }) {
  return (
    <article
      id={study.id}
      className="scroll-mt-24 border-t border-[#f4efe7]/10 px-5 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.35em] text-[#f2b56b]">
              {study.number} / Case Study
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-[#f4efe7] md:text-5xl">
              {study.title}
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#a9a092]">
              {study.thesis}
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#f2b56b]/20 bg-[#f2b56b]/10 p-6">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-[#f2b56b]">
              What makes this one stand out
            </p>
            <p className="text-lg leading-8 text-[#f4efe7]">{study.standout}</p>
          </div>
        </div>

        <div className="mb-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-[#f4efe7]/10 bg-[#10131c]/70 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#a9a092]">
              My role
            </p>
            <p className="mt-2 font-semibold text-[#f4efe7]">{study.role}</p>
          </div>

          <div className="rounded-2xl border border-[#f4efe7]/10 bg-[#10131c]/70 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#a9a092]">
              Timeline
            </p>
            <p className="mt-2 font-semibold text-[#f4efe7]">
              {study.timeline}
            </p>
          </div>

          <div className="rounded-2xl border border-[#f4efe7]/10 bg-[#10131c]/70 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#a9a092]">
              Tools
            </p>
            <p className="mt-2 font-semibold text-[#f4efe7]">
              {study.tools.slice(0, 4).join(" / ")}
            </p>
          </div>
        </div>

        {study.visualType === "inventory-kpi" ? (
          <InventoryCaseVisual />
        ) : (
          <ScreenshotGrid images={study.images} title={study.title} />
        )}

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-[#f4efe7]/10 bg-[#10131c]/70 p-6">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-[#f2b56b]">
              The problem
            </p>
            <p className="leading-8 text-[#a9a092]">{study.problem}</p>
          </div>

          <div className="rounded-3xl border border-[#f4efe7]/10 bg-[#10131c]/70 p-6">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-[#f2b56b]">
              What made it hard
            </p>
            <p className="leading-8 text-[#a9a092]">{study.difficulty}</p>
          </div>
        </div>

        <div className="mt-10">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-[#f2b56b]">
            Method
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {study.method.map((step, index) => (
              <MethodStep key={step} number={index + 1} text={step} />
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-[#f2b56b]">
              Results
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {study.results.map((result) => (
                <ResultPill
                  key={result.label}
                  label={result.label}
                  value={result.value}
                />
              ))}
            </div>
          </div>

          <div>
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-[#f2b56b]">
              Key findings
            </p>

            <div className="grid gap-3">
              {study.findings.map((finding) => (
                <FindingCard key={finding} text={finding} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-[#71d6c9]/20 bg-[#71d6c9]/10 p-6">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-[#71d6c9]">
            Reflection
          </p>
          <p className="text-lg leading-8 text-[#f4efe7]">{study.reflection}</p>
        </div>
      </div>
    </article>
  );
}

export default function CaseStudies() {
  return (
    <section id="case-studies">
      <div className="px-5 pt-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Deep Dives"
            title="Case studies that show the thinking behind the build."
            description="The strongest projects are not just screenshots. They show how I framed the problem, chose methods, designed the system, and evaluated whether the work actually helped."
          />
        </div>
      </div>

      {caseStudies.map((study) => (
        <CaseStudy key={study.id} study={study} />
      ))}
    </section>
  );
}