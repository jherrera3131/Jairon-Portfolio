import travelOverview from "../assets/travel-overview.png";
import travelSystemOne from "../assets/travel-system-1.png";
import travelSystemTwo from "../assets/travel-system-2.png";
import Metric from "./Metric";
import SectionHeader from "./SectionHeader";

function CaseStudyPoint({ label, text }) {
  return (
    <div className="rounded-3xl border border-[#f4efe7]/10 bg-[#10131c]/70 p-6">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-[#f2b56b]">
        {label}
      </p>
      <p className="leading-7 text-[#a9a092]">{text}</p>
    </div>
  );
}

export default function TravelCaseStudy() {
  return (
    <section id="travel-case-study" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Case Study"
          title="Travel Recommendation Research Platform"
          description="A research platform exploring how different recommendation systems handle constraints, preferences, ranking stability, and usability."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-[#f4efe7]/10 bg-[#10131c]/80 p-6">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-[#f2b56b]">
              Product question
            </p>

            <h3 className="text-2xl font-bold text-[#f4efe7]">
              How should a travel tool balance speed, constraints, and
              personalization?
            </h3>

            <p className="mt-4 leading-7 text-[#a9a092]">
              I compared a baseline ranking system with a structured
              preference-aware planner to understand whether richer user input
              leads to better recommendations or creates more complexity for
              users.
            </p>

            <div className="mt-6 grid gap-3">
              <Metric label="Participants" value="30+" />
              <Metric label="Controlled benchmarks" value="18" />
              <Metric
                label="Evaluation focus"
                value="Alignment / stability / usability"
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#f4efe7]/10 bg-[#10131c]">
            <img
              src={travelOverview}
              alt="Constrained Travel Recommender overview"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-[#f4efe7]/10 bg-[#10131c]">
            <img
              src={travelSystemOne}
              alt="Baseline Planner screenshot"
              className="h-full w-full object-cover object-top"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#f4efe7]/10 bg-[#10131c]">
            <img
              src={travelSystemTwo}
              alt="Structured Preference Planner screenshot"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <CaseStudyPoint
            label="Problem"
            text="Travel planning involves budget, time, destination, and preference constraints that can conflict with one another."
          />
          <CaseStudyPoint
            label="Design decision"
            text="I separated the baseline planner from the preference-aware planner so the systems could be compared clearly."
          />
          <CaseStudyPoint
            label="Learning"
            text="More personalization can improve perceived usefulness, but it also adds complexity that must be carefully designed."
          />
        </div>
      </div>
    </section>
  );
}