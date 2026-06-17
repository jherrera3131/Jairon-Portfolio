import travelOverview from "../assets/travel-overview.png";
import travelSystemOne from "../assets/travel-system-1.png";
import travelSystemTwo from "../assets/travel-system-2.png";
import onlineSalesMap from "../assets/online-sales-map.png";
import onlineSalesBar from "../assets/online-sales-bar.png";
import onlineSalesPie from "../assets/online-sales-pie.png";
import onlineSalesInfo from "../assets/online-sales-info.png";
import spotifyHome from "../assets/spotify-home.png";
import spotifyStats from "../assets/spotify-stats.png";
import redditPosts from "../assets/reddit-posts.png";
import redditNetworkBuild from "../assets/reddit-network-build.png";
import redditGraphStructure from "../assets/reddit-graph-structure.png";
import redditUserSubreddits from "../assets/reddit-user-subreddits.png";
import redditResults from "../assets/reddit-results.png";
import todoSignup from "../assets/todo-signup.png";
import todoDashboard from "../assets/todo-dashboard.png";
import todoList from "../assets/todo-list.png";

export const projectFilters = [
  "All",
  "Featured",
  "Data Visualization",
  "Dashboard",
  "Research",
  "Web App",
];

const projects = [
  {
    name: "Travel Recommendation Research Platform",
    category: "Research",
    featured: true,
    caseStudy: true,
    caseStudyId: "travel-case-study",
    images: [travelOverview, travelSystemOne, travelSystemTwo],
    shortDescription:
      "A Flask-based research platform comparing LLM-assisted and constraint-based travel recommendation systems.",
    tech: ["Python", "Flask", "SQL", "UX Research", "Recommendation Systems"],
    github: "",
    liveDemo: "",
    visualLabel: "AI + UX Research",
    mainProblem:
      "Travel planning requires users to balance constraints like budget, timing, preferences, and uncertainty.",
    whatIBuilt:
      "Built a web platform comparing recommendation strategies, designed user testing with 30+ participants, and evaluated 18 controlled benchmarks.",
    result:
      "Identified tradeoffs between simplicity, personalization, ranking stability, runtime, and usability.",
  },
  {
    name: "Retail Inventory & KPI Analytics System",
    category: "Dashboard",
    featured: true,
    caseStudy: true,
    caseStudyId: "inventory-case-study",
    visualType: "inventory-kpi",
    shortDescription:
      "A database-backed analytics system for monitoring inventory health, sales trends, reorder thresholds, and operational risk.",
    tech: ["Python", "SQL", "MySQL", "KPI Reporting", "Database Design"],
    github: "https://github.com/jherrera3131/Database-Final",
    liveDemo: "",
    visualLabel: "Inventory Monitoring",
    mainProblem:
      "Retail teams need to understand product demand, stock movement, reorder risk, and warehouse performance without manually digging through disconnected tables.",
    whatIBuilt:
      "Designed normalized schemas for customers, products, orders, warehouses, and inventory workflows, then wrote analytical SQL queries and Python reporting workflows to surface KPIs.",
    result:
      "Created a decision-support workflow for identifying inventory risks, operational bottlenecks, reorder thresholds, and product performance trends.",
  },
  {
    name: "Sparse Interaction Graphs for Trend Monitoring",
    category: "Research",
    featured: true,
    caseStudy: true,
    caseStudyId: "reddit-case-study",
    images: [
      redditPosts,
      redditNetworkBuild,
      redditGraphStructure,
      redditResults,
      redditUserSubreddits,
    ],
    shortDescription:
      "A network analysis platform that turns Reddit community activity into user-interaction graphs, bridge-like ties, and behavioral overlap metrics.",
    tech: ["Python", "Flask", "SQL", "NetworkX", "Data Pipelines", "Network Analysis"],
    github: "",
    liveDemo: "",
    visualLabel: "Network Analysis",
    mainProblem:
      "Raw Reddit activity is difficult to interpret because posts, comments, users, and subreddit overlap are spread across messy interaction data.",
    whatIBuilt:
      "Built a Flask-based tool to load recent posts, construct user-user interaction networks, analyze graph structure, identify bridge-like edges, and inspect user-to-subreddit portfolios.",
    result:
      "Surfaced network scale, cluster structure, bridge-like ties, central users, and overlap patterns that make online community behavior easier to study.",
  },
  {
    name: "Online Sales Data Visualization",
    category: "Data Visualization",
    featured: true,
    images: [onlineSalesMap, onlineSalesBar, onlineSalesPie, onlineSalesInfo],
    shortDescription:
      "An interactive sales visualization that lets users explore country-level spending, product trends, and payment method behavior through maps and charts.",
    tech: ["JavaScript", "HTML/CSS", "Leaflet", "GeoJSON", "CSV", "Data Visualization"],
    github: "https://github.com/jherrera3131/Online-Data-Sales",
    liveDemo: "",
    visualLabel: "Interactive Sales Map",
    mainProblem:
      "Global sales data is difficult to understand when country spending, top products, and payment methods are hidden inside static rows of data.",
    whatIBuilt:
      "Built an interactive map with country-level spending, hover insights, a product bar graph race, a payment-method pie chart, and an info modal explaining the visualization.",
    result:
      "Created a more exploratory interface for comparing sales patterns by geography, product demand, and payment behavior.",
  },
  {
    name: "Spotify Desktop Application",
    category: "Web App",
    featured: false,
    images: [spotifyHome, spotifyStats],
    shortDescription:
      "A Spotify-powered music dashboard that combines current playback, personalized playlists, weather-based recommendations, and listening analytics.",
    tech: ["Python", "Flask", "Spotify API", "HTML/CSS", "JavaScript", "Data Visualization"],
    github: "https://github.com/mrenwicka/COM-306-Spotify-Project",
    liveDemo: "",
    visualLabel: "Music Insights",
    mainProblem:
      "Spotify users have rich listening data, but it is not always presented as a personalized dashboard that connects music habits, stats, and contextual recommendations.",
    whatIBuilt:
      "Built a Flask app using Spotify data to display current playback, top songs, playlist recommendations, monthly playlists, and genre/artist breakdowns.",
    result:
      "Created a more personalized music experience that turns listening behavior into visual insights and recommendation features.",
  },
  {
    name: "ToDoApp",
    category: "Web App",
    featured: false,
    images: [todoDashboard, todoList, todoSignup],
    shortDescription:
      "A Ruby on Rails task management app designed around notebook-style task organization, categories, profiles, and completion workflows.",
    tech: ["Ruby", "Ruby on Rails", "HTML/CSS", "MVC", "Render"],
    github: "https://github.com/jherrera3131/ToDoApp",
    liveDemo: "",
    visualLabel: "Rails Web App",
    mainProblem:
      "Users need a simple way to create, categorize, update, complete, and review tasks without the interface feeling like a plain CRUD table.",
    whatIBuilt:
      "Built a Rails app with user accounts, profile views, categories, task creation, task completion, navigation states, and deployment configuration.",
    result:
      "Practiced full-stack Rails development while creating a more styled and personalized task management experience.",
  },
];

export default projects;