import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "statxtract",
    number: "01",
    title: "STATXTRACT",
    subtitle: "Automated Survey Data Ingestion & Query Platform",
    type: "featured",
    visibility: "github-only",
    year: "2025",
    featured: true,
    status: "ongoing",
    priority: 100,
    category: ["Data", "Backend", "APIs", "Infrastructure"],
    tags: ["Government", "AICTE", "Ministry ecosystem"],
    description:
      "A production-oriented API gateway for ingesting and querying complex government survey microdata through secure, structured REST APIs.",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Pandas",
      "JWT",
      "REST APIs",
      "AWS",
    ],
    links: {
      github: "https://github.com/SoumyaSudhirNayak/statXtract",
    },
    role: "Lead FullStack Engineer",
    achievement: {
      title: "Winner",
      organization: "Ministry of Statistics, Ministry of Education Govt of India, AICTE",
    },
    caseStudy: {
      problem:
        "Government survey microdata is trapped in legacy formats, making it inaccessible for researchers and analysts who need structured, queryable access.",
      solution:
        "Built a production API gateway that ingests multi-format survey data, parses DDI metadata, manages dynamic schemas, and exposes secure REST endpoints with role-based access control.",
      challenges: [
        "Multi-format data ingestion from legacy systems",
        "Dynamic schema management for diverse survey structures",
        "Privacy-preserving cell suppression for sensitive data",
        "Scalable query interface with usage metering",
      ],
      outcome:
        "A functional data infrastructure platform serving structured survey data through secure, well-documented APIs.",
    },
    confidential: true,
  },
  {
    id: "tars-livechat",
    number: "02",
    title: "TARS LIVE CHAT",
    subtitle: "Real-time Full-Stack Messaging & Collaboration Platform",
    type: "case-study",
    visibility: "public",
    year: "2026",
    featured: true,
    status: "completed",
    priority: 95,
    category: ["Full Stack", "Real-time", "Authentication"],
    tags: ["Convex", "Clerk", "Next.js", "Tailwind"],
    description:
      "A production-ready real-time chat application with 1-to-1 direct messaging, group chats, typing indicators, reactions, unread counts, and Clerk authentication.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Convex",
      "Clerk",
      "Tailwind CSS",
      "shadcn/ui",
      "REST APIs",
    ],
    links: {
      github: "https://github.com/SoumyaSudhirNayak/TARS_LIVECHAT",
    },
    role: "FullStack Developer",
    caseStudy: {
      problem:
        "Real-time messaging applications require low-latency state synchronization, secure multi-tenant authentication, and reliable presence tracking across multiple devices.",
      solution:
        "Built a full-stack real-time chat application using Next.js App Router, Convex for reactive live queries/mutations, and Clerk for JWT-authenticated user management. Features direct messages, group management (rename/leave/delete), typing indicators, emoji reactions, and smart auto-scrolling.",
      challenges: [
        "Real-time reactivity for typing indicators, unread message badges, and presence heartbeats",
        "Multi-tenant Clerk JWT authentication integration with Convex row-level security",
        "Group conversation management, member permissions, and soft-delete message propagation",
        "Smart auto-scrolling with unread jump indicators",
      ],
      outcome:
        "A functional, production-deployed real-time messaging application with direct and group chat capabilities.",
    },
  },
  {
    id: "driftseal",
    number: "03",
    title: "DRIFTSEAL",
    subtitle: "ML Pipeline Security Framework",
    type: "case-study",
    visibility: "public",
    year: "2026",
    featured: false,
    status: "completed",
    priority: 90,
    category: ["AI/ML", "Security", "Anomaly Detection", "Data Integrity"],
    description:
      "A machine-learning security framework designed to detect data poisoning and behavioral drift using anomaly detection and automated remediation.",
    technologies: [
      "Python",
      "scikit-learn",
      "TensorFlow",
      "Pandas",
      "NumPy",
      "React",
      "FastAPI",
      "Figma",
    ],
    links: {
      github: "https://github.com/SoumyaSudhirNayak/DRIFTSEAL",
    },
    role: "FullStack Engineer",
    caseStudy: {
      problem:
        "ML pipelines are vulnerable to data poisoning attacks and behavioral drift that can compromise model integrity without detection.",
      solution:
        "Designed a security framework with validation, feature analysis, drift/anomaly detection, risk assessment, and automated remediation stages.",
      challenges: [
        "Detecting subtle data poisoning across diverse data distributions",
        "Building real-time anomaly detection without excessive false positives",
        "Automating remediation while preserving pipeline continuity",
      ],
      outcome:
        "A comprehensive ML security framework that monitors pipeline health and automatically responds to threats.",
    },
  },
  {
    id: "haemolink",
    number: "04",
    title: "HAEMOLINK",
    subtitle: "Intelligent Blood Donation & Delivery Ecosystem",
    type: "case-study",
    visibility: "public",
    year: "2025",
    featured: false,
    status: "completed",
    priority: 85,
    category: ["Full Stack", "Healthcare", "Real-time"],
    description:
      "A multi-role real-world workflow connecting patients, donors, hospitals, and delivery riders for efficient blood donation and delivery.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind",
      "Supabase",
      "REST APIs",
      "Figma",
      "HTML5 QR Scanner",
      "Vercel",
    ],
    links: {
      live: "https://haemolink.vercel.app/",
      github: "https://github.com/SoumyaSudhirNayak/HAEMOLINK",
    },
    role: "FullStack Developer",
    caseStudy: {
      problem:
        "Blood donation workflows are fragmented — patients, donors, hospitals, and delivery logistics operate in silos, leading to delays and wastage.",
      solution:
        "Built a unified ecosystem with role-based access for patients, donors, hospitals, and riders, enabling real-time request matching, QR-based verification, and delivery tracking.",
      challenges: [
        "Multi-role authentication and authorization",
        "Real-time donor matching algorithms",
        "QR-based verification workflow",
        "Delivery logistics and tracking",
      ],
      outcome:
        "A functional blood donation and delivery platform deployed on Vercel, serving multiple user roles through a single unified interface.",
    },
  },
  {
    id: "outbreak-sentinal",
    number: "05",
    title: "OUTBREAK SENTINAL",
    subtitle: "Real-time Outbreak Tracking & Resource Management",
    type: "case-study",
    visibility: "github-only",
    year: "2025",
    featured: false,
    status: "completed",
    priority: 80,
    category: ["Backend", "Real-time", "GIS"],
    description:
      "A real-time outbreak tracking system with WebSocket-based updates, resource routing, and map-based visualization.",
    technologies: [
      "FastAPI",
      "WebSockets",
      "Supabase",
      "Mapbox",
      "React",
      "Python",
    ],
    links: {
      github: "https://github.com/SoumyaSudhirNayak/OUTBREAK-SENTINAL",
    },
    role: "FullStack   & Systems Developer",
    caseStudy: {
      problem:
        "Outbreak response requires real-time coordination between alerts, location tracking, resource allocation, and routing — often handled manually.",
      solution:
        "Built a real-time system with WebSocket-based alert propagation, map-based visualization, and automated resource routing.",
      challenges: [
        "Real-time WebSocket event propagation",
        "Map-based spatial visualization",
        "Resource allocation and routing optimization",
      ],
      outcome:
        "A functional real-time outbreak monitoring and response system with live map updates.",
    },
  },
  {
    id: "pediascape",
    number: "06",
    title: "PEDIASCAPE",
    subtitle: "Comprehensive E-Learning Platform",
    type: "standard",
    visibility: "public",
    year: "2025",
    featured: false,
    status: "completed",
    priority: 70,
    category: ["Full Stack", "Education", "AI"],
    description:
      "A centralized learning platform combining learning resources, career roadmaps, project guidance, study material and AI-assisted support.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase",
      "Figma",
      "D3.js",
      "Gemini API",
      "Hugging Face API",
    ],
    links: {
      live: "https://pediascape-flax.vercel.app/",
      github: "https://github.com/SoumyaSudhirNayak/PEDIASCAPE",
    },
    role: "FullStack Developer",
  },
  {
    id: "gramscape",
    number: "07",
    title: "GRAMSCAPE",
    subtitle:
      "Gamification for Rural Planning using Drone, Land Survey Maps & GIS Data",
    type: "standard",
    visibility: "restricted",
    year: "2024",
    featured: false,
    status: "completed",
    priority: 60,
    category: ["3D / GIS", "Innovation"],
    tags: ["Smart India Hackathon"],
    description:
      "A spatial planning tool combining GIS data, drone surveys, and Unity-based gamification for rural infrastructure planning.",
    technologies: ["QGIS", "Autodesk InfraWorks", "Unity Engine", "Figma", "Git"],
    achievement: {
      title: "Grand Finalist / Top-5",
      organization: "Smart India Hackathon 2024",
    },
    role: "GIS & UI Developer",
  },
  {
    id: "illegal-construction",
    number: "08",
    title: "AI-BASED ILLEGAL CONSTRUCTION DETECTION",
    shortTitle: "CONSTRUCTION DETECTION",
    subtitle: "Satellite Imagery Analysis for Urban Compliance",
    type: "standard",
    visibility: "restricted",
    year: "2025",
    featured: false,
    status: "completed",
    priority: 55,
    category: ["AI/ML", "GIS", "Computer Vision"],
    description:
      "An AI system that detects illegal construction by analyzing Sentinel-2 satellite imagery through deep learning and change detection algorithms.",
    technologies: [
      "Sentinel-2",
      "Google Earth Engine",
      "QGIS",
      "Python",
      "Deep Learning",
      "FastAPI",
    ],
    achievement: {
      title: "Winner",
      organization: "VJ Hackathon 2025, Industry 4.0 Domain",
    },
    role: "AI & GIS Developer",
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured).sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));
}

export function getPublicProjects(): Project[] {
  return projects
    .filter((p) => p.visibility !== "private")
    .sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "ALL") return getPublicProjects();
  return getPublicProjects().filter((p) =>
    p.category.some((c) => c.toLowerCase().includes(category.toLowerCase()))
  );
}
