import travelOverview from "../assets/travel-overview.png";
import travelSystemOne from "../assets/travel-system-1.png";
import travelSystemTwo from "../assets/travel-system-2.png";

import redditPosts from "../assets/reddit-posts.png";
import redditNetworkBuild from "../assets/reddit-network-build.png";
import redditGraphStructure from "../assets/reddit-graph-structure.png";
import redditResults from "../assets/reddit-results.png";
import redditUserSubreddits from "../assets/reddit-user-subreddits.png";

const caseStudies = [
  {
    id: "travel-case-study",
    number: "01",
    eyebrow: "Recommendation Systems / UX Research / LLM-assisted Design",
    title: "Travel Recommendation Research Platform",
    thesis:
      "A research platform testing whether more personalization actually improves travel recommendations after hard constraints have already narrowed the options.",
    role: "Researcher, full-stack developer, product designer",
    timeline: "Jan. 2026 – May 2026",
    tools: ["Python", "Flask", "SQL", "HTML/CSS", "LLM-assisted ranking", "MCDA"],
    images: [travelOverview, travelSystemOne, travelSystemTwo],
    standout:
      "This project stands out because it challenged the easy assumption that more personalization always means better recommendations. I built and evaluated ranking systems under the same constrained itinerary pool, then compared them with benchmark metrics, user sessions, survey responses, and a multi-criteria decision analysis pipeline.",
    problem:
      "Travel planning is not just a search problem. Users deal with budgets, dates, airports, destination constraints, activity preferences, crowd tolerance, and trip style. Once invalid trips are filtered out, the harder product question becomes: which valid options should appear first, and why?",
    difficulty:
      "The challenge was separating filtering from ranking. If each system saw different trip options, the comparison would be messy. I kept the candidate set constant so the evaluation focused on ranking behavior: baseline cost/time ordering, structured preference ranking, and an LLM-assisted direction for translating less structured travel intent into recommendation signals.",
    method: [
      "Built a Flask research platform that generated feasible itineraries from shared flight, hotel, and point-of-interest data.",
      "Compared ranking strategies across the same itinerary pool so complexity, not data availability, became the variable being tested.",
      "Evaluated systems across constraint satisfaction, preference alignment, ranking stability, and runtime.",
      "Used Shannon entropy weighting and PROMETHEE II to combine metrics into an overall system ranking instead of relying on one isolated score.",
    ],
    results: [
      { label: "Benchmark scenarios", value: "18" },
      { label: "Logged sessions", value: "38" },
      { label: "Survey responses", value: "29" },
      { label: "System 1 benchmark net flow", value: "+0.865" },
    ],
    findings: [
      "The simpler baseline was more stable and faster in controlled benchmarks.",
      "The preference-aware system felt more useful to users even when objective gains were limited.",
      "Users selected from similar ranked positions across both systems, showing that perception and behavior did not fully align.",
    ],
    reflection:
      "The biggest lesson was that product intelligence is not just adding more inputs. In constrained decision tools, simplicity, trust, speed, and perceived control can matter as much as algorithmic complexity.",
  },
  {
    id: "inventory-case-study",
    number: "02",
    eyebrow: "Database Systems / KPI Thinking / Operational Analytics",
    title: "Retail Inventory & KPI Analytics System",
    thesis:
      "A relational database and analytics workflow modeling how a large retail operation could track stores, products, orders, inventory, pricing, warehouses, and reorder risk.",
    role: "Database designer, SQL developer, Python workflow builder",
    timeline: "Spring 2025",
    tools: ["MySQL", "SQL", "Python", "Database Design", "KPI Reporting"],
    visualType: "inventory-kpi",
    standout:
      "This project stands out because it turned a messy retail operation into a structured decision system. Instead of only storing products and orders, the database modeled store-level pricing, inventory thresholds, reorder requests, warehouse fulfillment, carts, checkout, and analytical queries managers could actually use.",
    problem:
      "Retail inventory data becomes difficult to manage when products differ by store, prices vary by region, warehouses restock multiple locations, and checkout transactions must update inventory without breaking database consistency.",
    difficulty:
      "The hard part was designing a schema realistic enough to reflect retail operations without overbuilding. Pricing had to move out of the Product table so the same item could have different prices by store. Reorder thresholds had to trigger restock logic before products were depleted. Transactions had to update Inventory, ReorderRequests, and ReorderFulfillments consistently.",
    method: [
      "Designed an E-R model and relational schema around stores, customers, products, carts, orders, inventory, warehouses, brands, reorder thresholds, reorder requests, and reorder fulfillments.",
      "Normalized the schema so product, pricing, inventory, and order behavior could be tracked without unnecessary duplication.",
      "Implemented operational SQL queries for top-selling products, top customers, profitable stores, brand comparison, and co-purchase patterns.",
      "Built Python workflows to support customer checkout, inventory updates, and reorder fulfillment behavior.",
    ],
    results: [
      { label: "Core entities modeled", value: "10+" },
      { label: "Operational query types", value: "5" },
      { label: "Reorder workflow", value: "Threshold-based" },
      { label: "Pricing model", value: "Store-specific" },
    ],
    findings: [
      "Separating product pricing from products made the system better match real regional pricing behavior.",
      "Reorder thresholds created a clearer inventory risk signal before stockouts occurred.",
      "Analytical queries turned the database from a storage system into a manager-facing decision tool.",
    ],
    reflection:
      "This project helped me see databases as product infrastructure. Good schema design is not only about correctness. It shapes what questions the business can answer later.",
  },
  {
    id: "reddit-case-study",
    number: "03",
    eyebrow: "Network Analysis / Behavioral Data / Research Tools",
    title: "Sparse Interaction Graphs for Trend Monitoring",
    thesis:
      "A pair of Flask research tools that convert Reddit mental-health community activity into interaction networks, bridge-like ties, and cross-community overlap patterns.",
    role: "Researcher, Python developer, network analyst",
    timeline: "Aug. 2025 – Dec. 2025",
    tools: ["Python", "Flask", "NetworkX", "Reddit API", "Chart.js", "CSV pipelines"],
    images: [
      redditPosts,
      redditNetworkBuild,
      redditGraphStructure,
      redditResults,
      redditUserSubreddits,
    ],
    standout:
      "This project stands out because it made invisible community structure measurable. Raw posts and comments became a graph of users, ties, edge weights, local overlap, betweenness, and subreddit portfolios, making it possible to study how support and information may move across sensitive online spaces.",
    problem:
      "Mental-health communities contain thousands of small interactions, but raw comment threads do not reveal who connects different groups, which ties are repeated, or whether stronger interactions happen between users with similar subreddit activity.",
    difficulty:
      "The work required turning nested Reddit comment trees into a usable graph. Deleted accounts had to be filtered out, reply chains had to become user-user edges, edge weights had to capture repeated interaction, and subreddit portfolios had to be collected separately to compare behavioral overlap.",
    method: [
      "Built App 1 to load subreddit posts, walk full comment trees, construct weighted user-user interaction graphs, and compute graph structure metrics.",
      "Used NetworkX to calculate node/edge counts, connected components, local overlap, weighted degree, and betweenness-style bridge indicators.",
      "Built App 2 to enrich user pairs with subreddit portfolios and calculate mutual subreddit counts and similarity scores.",
      "Visualized tie-strength patterns with grouped summaries and charts so overlap trends could be understood at a glance.",
    ],
    results: [
      { label: "Users analyzed", value: "2,276" },
      { label: "User-user edges", value: "2,339" },
      { label: "Connected components", value: "33" },
      { label: "Bridge-like edges", value: "~20" },
    ],
    findings: [
      "Repeated interactions were associated with higher subreddit overlap.",
      "One-interaction ties averaged 0.07 shared subreddits, while 5+ interaction ties averaged 0.67.",
      "A small set of low-overlap edges appeared positioned to connect otherwise separated support clusters.",
    ],
    reflection:
      "The project showed me how much context can be hidden inside interaction data. The next step would be combining graph structure with text analysis to understand not only who connects communities, but what kind of information moves through those ties.",
  },
];

export default caseStudies;