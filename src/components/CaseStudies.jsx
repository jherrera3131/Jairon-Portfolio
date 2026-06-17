import { useState } from "react";
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
              {[
                "Inventory drops below threshold",
                "Reorder request created",
                "Warehouse fulfills stock",
              ].map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-3 rounded-xl border border-[#f4efe7]/10 bg-[#10131c] p-3"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f2b56b]/10 font-mono text-xs font-bold text-[#f2b56b]">
                    {index + 1}
                  </span>
                  <span className="text-sm text-[#a9a092]">{step}</span>
                </div>
              ))}
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
            className="image-lift h-full min-h-64 w-full object-cover object-top opacity-90"          />
        </div>
      ))}
    </div>
  );
}

function MiniFinding({ text }) {
  return (
    <div className="rounded-2xl border border-[#f4efe7]/10 bg-[#080a0f]/70 p-5">
      <p className="leading-7 text-[#a9a092]">{text}</p>
    </div>
  );
}

function CaseStudyPreview({ study, isOpen, onToggle }) {
  return (
<article

id={study.id}

className={`case-glow scroll-mt-24 overflow-hidden rounded-[2rem] border transition duration-500 ${

  isOpen

    ? "tilt-card-open case-file-active border-[#f2b56b]/45"

    : "tilt-card border-[#f4efe7]/10 bg-[#10131c]/60 hover:border-[#f2b56b]/30"

}`}

>
      <div className="grid gap-6 p-6 lg:grid-cols-[0.7fr_1.3fr] lg:p-8">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.35em] text-[#f2b56b]">
            {study.number} / Case File
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-[#f4efe7] md:text-4xl">
            {study.title}
          </h2>

          <p className="mt-4 text-base leading-7 text-[#a9a092]">
            {study.thesis}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {study.tools.slice(0, 4).map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-[#f4efe7]/10 bg-[#080a0f]/70 px-3 py-1 text-xs text-[#a9a092]"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-3xl border border-[#f2b56b]/20 bg-[#f2b56b]/10 p-5">
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.24em] text-[#f2b56b]">
              Why this one matters
            </p>
            <p className="leading-7 text-[#f4efe7]">{study.standout}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {study.results.map((result) => (
              <ResultPill
                key={result.label}
                label={result.label}
                value={result.value}
              />
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#f4efe7]/10 pt-4">
            <div className="text-sm text-[#a9a092]">
              <span className="text-[#f4efe7]">{study.role}</span>
              <span className="mx-2 text-[#f4efe7]/30">•</span>
              {study.timeline}
            </div>

            <button
              onClick={onToggle}
              aria-expanded={isOpen}
              className="magnetic-button group inline-flex items-center gap-3 rounded-full bg-[#f2b56b] px-5 py-3 text-sm font-black text-[#080a0f] transition hover:-translate-y-0.5 hover:bg-[#ffd08f]"            >
              {isOpen ? "Close Case File" : "Open Case File"}
              <span
                className={`transition duration-300 ${
                  isOpen ? "rotate-45" : "rotate-0"
                }`}
              >
                +
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`grid transition-all duration-700 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <CaseStudyExpanded study={study} />
        </div>
      </div>
    </article>
  );
}

function CaseStudyExpanded({ study }) {
  return (
    <div className="border-t border-[#f4efe7]/10 p-6 lg:p-8">
      {study.visualType === "inventory-kpi" ? (
        <InventoryCaseVisual />
      ) : (
        <ScreenshotGrid images={study.images} title={study.title} />
      )}

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-[#f4efe7]/10 bg-[#080a0f]/70 p-6">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-[#f2b56b]">
            The problem
          </p>
          <p className="leading-8 text-[#a9a092]">{study.problem}</p>
        </div>

        <div className="rounded-3xl border border-[#f4efe7]/10 bg-[#080a0f]/70 p-6">
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

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-[#f2b56b]">
            Key findings
          </p>

          <div className="grid gap-3">
            {study.findings.map((finding) => (
              <MiniFinding key={finding} text={finding} />
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#71d6c9]/20 bg-[#71d6c9]/10 p-6">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-[#71d6c9]">
            Reflection
          </p>
          <p className="text-lg leading-8 text-[#f4efe7]">
            {study.reflection}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  const [openStudy, setOpenStudy] = useState(null);

  function handleToggle(id) {
    setOpenStudy((current) => (current === id ? null : id));
  }

  return (
    <section id="case-studies" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Deep Dives"
          title="Case studies that show the thinking behind the build."
          description="Open a case file to see the problem, method, system decisions, results, and what made the project stand out."
        />
<div className="mb-8 rounded-[2rem] border border-[#f4efe7]/10 bg-[#10131c]/60 p-4">
  <div className="grid gap-3 md:grid-cols-3">
    {caseStudies.map((study) => (
      <a
        key={study.id}
        href={`#${study.id}`}
        className="group rounded-2xl border border-[#f4efe7]/10 bg-[#080a0f]/70 p-4 transition hover:-translate-y-1 hover:border-[#f2b56b]/50 hover:bg-[#f2b56b]/10"
      >
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#f2b56b]">
          {study.number} / Case File
        </p>
        <p className="mt-2 font-bold text-[#f4efe7] group-hover:text-[#ffd08f]">
          {study.title}
        </p>
        <p className="mt-2 text-sm leading-6 text-[#a9a092]">
          {study.eyebrow}
        </p>
      </a>
    ))}
  </div>
</div>
        <div className="space-y-6">
          {caseStudies.map((study) => (
            <CaseStudyPreview
              key={study.id}
              study={study}
              isOpen={openStudy === study.id}
              onToggle={() => handleToggle(study.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}