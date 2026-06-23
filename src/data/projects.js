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
import wageGapPaper from "../assets/wage-gap-ols-nlsy79.pdf";
import wageGapPreview from "../assets/wage-gap-paper-preview.png";

export const projectFilters = [
    "All",
    "Featured",
    "Currently Building",
    "Data Visualization",
    "Dashboard",
    "Research",
    "Web App",
  ];

const projects = [
    {
        name: "MainStreet RiskLens",
        category: "Dashboard",
        status: "Currently Building",
        featured: true,
        caseStudy: false,
        caseStudyId: "mainstreet-risklens-case-study",
        visualType: "risklens",
        shortDescription:
          "An in-progress full-stack SBA credit risk platform for predicting 36-month charge-off risk, calibrating probability of default, explaining loan-level drivers, auditing fairness risk, and stress-testing expected loss.",
        tech: [
          "Python",
          "scikit-learn",
          "FastAPI",
          "React",
          "SHAP",
          "SQL",
          "FRED API",
          "LLM Pipeline",
        ],
        github: "",
        liveDemo: "",
        visualLabel: "Credit Risk Platform",
        mainProblem:
          "Small-business lenders need more than a risk score. They need calibrated probabilities, transparent expected-loss views, model validation, adverse-action reason codes, and fairness/proxy-risk checks that make credit decisions easier to review.",
        whatIBuilt:
          "Currently building a full-stack platform using SBA small-business loan data, time-based train/test splits, class-weighted baseline models, probability calibration, SHAP explanations, exposure toggles, fairness diagnostics, and macro stress-testing workflows.",
        result:
          "The goal is to create a portfolio-ready credit risk command center that connects machine learning, explainability, regulatory-aware adverse-action drafting, and financial risk analysis in one interactive dashboard.",
      },
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
    github: "https://github.com/jherrera3131/Reddit-Sparse-Interaction-Graph",
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
    name: "Explaining Race and Gender Wage Gaps",
    category: "Research",
    featured: true,
    caseStudy: false,
    images: [wageGapPreview],
    paper: wageGapPaper,
    shortDescription:
      "An econometrics research paper using NLSY79 data and OLS regression models to analyze race and gender wage gaps across human capital, background, and labor-market factors.",
    tech: [
      "Stata",
      "OLS Regression",
      "Econometrics",
      "NLSY79",
      "Hypothesis Testing",
    ],
    visualLabel: "Econometrics Research",
    mainProblem:
      "Observed wage gaps can reflect a mix of education, work experience, family background, labor-market sorting, and structural inequality, making it difficult to separate measurable explanations from persistent unexplained disparities.",
    whatIBuilt:
      "Built a sequence of OLS regression models using log hourly wages, race-gender indicators, schooling, age, tenure, parental education, poverty status, AFQT percentile, marital status, and industry controls.",
    result:
      "Found that observable human capital and background variables explain a meaningful portion of wage gaps, while some disparities remain after controls, pointing to the limits of available variables and the need to study work interruptions, employer bias, and structural labor-market factors.",
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