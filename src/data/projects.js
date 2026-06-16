import travelOverview from "../assets/travel-overview.png";
import travelSystemOne from "../assets/travel-system-1.png";
import travelSystemTwo from "../assets/travel-system-2.png";

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
    shortDescription:
      "A database-backed analytics system for monitoring inventory health, sales trends, and reorder risks.",
    tech: ["Python", "SQL", "MySQL", "KPI Reporting", "Database Design"],
    github: "https://github.com/jherrera3131/Database-Final",
    liveDemo: "",
    visualLabel: "Inventory Monitoring",
    mainProblem:
      "Retail data across customers, orders, warehouses, and inventory can be difficult to turn into clear operational decisions.",
    whatIBuilt:
      "Designed normalized relational schemas, wrote analytical SQL queries, and automated KPI reporting with Python.",
    result:
      "Created a clearer workflow for surfacing inventory risks, bottlenecks, reorder thresholds, and product performance trends.",
  },
  {
    name: "Sparse Interaction Graphs for Trend Monitoring",
    category: "Research",
    featured: true,
    shortDescription:
      "A network analysis project that transformed Reddit interaction data into structured graphs for behavioral trend analysis.",
    tech: ["Python", "SQL", "NetworkX", "Data Pipelines", "Network Analysis"],
    github: "",
    liveDemo: "",
    visualLabel: "Network Analysis",
    mainProblem:
      "Large online communities create messy interaction data that is hard to understand from raw comments alone.",
    whatIBuilt:
      "Built ingestion pipelines to convert Reddit comment datasets into structured interaction networks and applied similarity metrics.",
    result:
      "Improved visibility into behavioral overlap, influence hubs, bridge-like relationships, and online interaction trends.",
  },
  {
    name: "Online Sales Data Visualization",
    category: "Data Visualization",
    featured: false,
    shortDescription:
      "An interactive global sales visualization with a world map, product race chart, and payment method breakdown.",
    tech: ["JavaScript", "HTML/CSS", "GeoJSON", "CSV", "Data Visualization"],
    github: "https://github.com/jherrera3131/Online-Data-Sales",
    liveDemo: "",
    visualLabel: "Interactive Sales Map",
    mainProblem:
      "Global sales data is hard to compare when geography, products, and payment methods are only shown in static tables.",
    whatIBuilt:
      "Created an interactive map, bar graph race, pie chart, country-specific views, and insight popups.",
    result:
      "Built a more visual way to explore sales patterns across countries, products, and payment behavior.",
  },
  {
    name: "Spotify Desktop Application",
    category: "Web App",
    featured: false,
    shortDescription:
      "A Spotify-based app that displays music insights, top songs, genre breakdowns, and playlist features.",
    tech: ["Python", "Flask", "Spotify API", "HTML/CSS", "JavaScript"],
    github: "https://github.com/mrenwicka/COM-306-Spotify-Project",
    liveDemo: "",
    visualLabel: "Music Insights",
    mainProblem:
      "Spotify users generate personal listening data, but that data is not always presented as a customized analytics experience.",
    whatIBuilt:
      "Built features for top songs, current song information, genre pie charts, monthly playlists, and weather-based playlist ideas.",
    result:
      "Created a personalized music dashboard experience using API data and user listening behavior.",
  },
  {
    name: "ToDoApp",
    category: "Web App",
    featured: false,
    shortDescription:
      "A Ruby on Rails task management app for creating, organizing, and managing personal to-do items.",
    tech: ["Ruby", "Ruby on Rails", "HTML/CSS", "MVC", "Render"],
    github: "https://github.com/jherrera3131/ToDoApp",
    liveDemo: "",
    visualLabel: "Rails Web App",
    mainProblem:
      "Users need a simple way to create, track, and manage personal tasks through a clean web interface.",
    whatIBuilt:
      "Built a Rails application using MVC structure, database-backed models, views, routes, and deployment configuration.",
    result:
      "Practiced full-stack web development, Rails conventions, and app deployment workflows.",
  },
];

export default projects;