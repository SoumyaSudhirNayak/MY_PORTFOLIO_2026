import type { Technology } from "../types/common";

export const technologies: Technology[] = [
  // CORE PROGRAMMING
  {
    name: "Python",
    category: "PROGRAMMING / BACKEND / AI",
    libraries: ["FastAPI", "Pandas", "NumPy", "scikit-learn", "OpenCV"],
    projects: ["statxtract", "driftseal", "outbreak-sentinal", "illegal-construction"],
    description: "Core language for backend microservices, ML pipelines, data extraction & computer vision algorithms."
  },
  {
    name: "Java",
    category: "PROGRAMMING / BACKEND",
    libraries: ["Spring Boot", "OOP", "Data Structures", "JVM"],
    projects: ["haemolink"],
    description: "Object-oriented programming, enterprise backend architecture, and robust software engineering fundamentals."
  },
  {
    name: "C",
    category: "PROGRAMMING / SYSTEMS",
    libraries: ["Pointers", "Memory Management", "Algorithms"],
    projects: [],
    description: "Low-level system programming, manual memory management, and core algorithmic data structures."
  },

  // FULL-STACK / WEB
  {
    name: "React",
    category: "FULL-STACK / FRONTEND",
    libraries: ["Hooks", "Router", "Context API", "Vite", "GSAP"],
    projects: ["driftseal", "haemolink", "outbreak-sentinal", "pediascape"],
    description: "Component-driven user interfaces, state management, SPA routing, and interactive visual web experiences."
  },
  {
    name: "Node.js",
    category: "FULL-STACK / BACKEND",
    libraries: ["Express", "npm", "Async I/O", "REST Services"],
    projects: ["haemolink", "outbreak-sentinal"],
    description: "Asynchronous server-side JavaScript runtime for scalable network applications and RESTful APIs."
  },
  {
    name: "Express.js",
    category: "FULL-STACK / BACKEND",
    libraries: ["Middleware", "Routing", "JWT Auth", "CORS"],
    projects: ["haemolink"],
    description: "Minimalist web framework for Node.js powering backend routing and authentication middleware."
  },
  {
    name: "JavaScript",
    category: "FULL-STACK / WEB",
    libraries: ["ES6+", "DOM API", "Async/Await", "Fetch API"],
    projects: ["pediascape", "haemolink"],
    description: "Core dynamic web programming language powering interactive frontend client applications."
  },
  {
    name: "TypeScript",
    category: "FULL-STACK / FRONTEND",
    libraries: ["Interfaces", "Generics", "Strict Typing", "Vite"],
    projects: ["haemolink", "statxtract"],
    description: "Strongly-typed JavaScript superset ensuring type-safe frontend components and backend payloads."
  },
  {
    name: "Tailwind CSS",
    category: "FRONTEND / STYLING",
    libraries: ["Flexbox/Grid", "Responsive Layouts", "Dark Mode"],
    projects: ["haemolink", "outbreak-sentinal"],
    description: "Utility-first CSS framework for rapid responsive user interface engineering."
  },

  // BACKEND / API
  {
    name: "FastAPI",
    category: "BACKEND / API",
    libraries: ["Pydantic", "Uvicorn", "Swagger Docs", "AsyncIO"],
    projects: ["statxtract", "driftseal", "outbreak-sentinal", "illegal-construction"],
    description: "High-performance Python web framework for asynchronous REST APIs and machine learning model serving."
  },
  {
    name: "REST APIs",
    category: "BACKEND / ARCHITECTURE",
    libraries: ["HTTP/HTTPS", "JSON", "OAuth2", "Rate Limiting"],
    projects: ["statxtract", "driftseal", "haemolink", "outbreak-sentinal"],
    description: "Architectural style for designing stateless, decoupled web services and API integration endpoints."
  },

  // CLOUD
  {
    name: "AWS",
    category: "CLOUD / INFRASTRUCTURE",
    libraries: ["EC2", "S3", "Lambda", "IAM", "CloudWatch"],
    projects: ["statxtract"],
    description: "Cloud computing platform for scalable server deployment, storage buckets, and serverless computing."
  },
  {
    name: "Supabase",
    category: "CLOUD / BACKEND-AS-A-SERVICE",
    libraries: ["Postgres Engine", "Auth", "Storage Buckets", "Realtime"],
    projects: ["haemolink", "outbreak-sentinal"],
    description: "Open-source Firebase alternative providing managed PostgreSQL databases and instant auth services."
  },

  // DATABASE
  {
    name: "PostgreSQL",
    category: "DATABASE / RELATIONAL",
    libraries: ["Relational Schemas", "Indexing", "PL/pgSQL", "Transactions"],
    projects: ["statxtract", "haemolink"],
    description: "Advanced open-source relational database management system for complex queries and ACID transactions."
  },
  {
    name: "MySQL",
    category: "DATABASE / RELATIONAL",
    libraries: ["Relational Tables", "SQL Queries", "Joins", "Stored Procedures"],
    projects: [],
    description: "Popular relational database engine for structured data storage and optimized query execution."
  },
  {
    name: "MongoDB",
    category: "DATABASE / NOSQL",
    libraries: ["Document Stores", "BSON", "Aggregation Pipeline", "Mongoose"],
    projects: [],
    description: "Document-oriented NoSQL database for flexible JSON-like data schema storage."
  },

  // TOOLS
  {
    name: "Git",
    category: "TOOLS / DEVOPS",
    libraries: ["GitHub", "Branching Workflows", "Version Control", "CI/CD"],
    projects: ["statxtract", "driftseal", "haemolink", "gramscape", "illegal-construction"],
    description: "Distributed version control system for code management, collaborative feature branching, and release tracking."
  },
  {
    name: "Figma",
    category: "DESIGN / UI/UX",
    libraries: ["Prototyping", "Design Systems", "Component Libraries", "Wireframes"],
    projects: ["driftseal", "haemolink", "pediascape", "gramscape"],
    description: "Collaborative UI/UX design tool for vector interface design, interactive prototyping, and component systems."
  },
  {
    name: "Canva",
    category: "DESIGN / GRAPHICS",
    libraries: ["Visual Assets", "Brand Kit", "Media Layouts"],
    projects: ["driftseal", "gramscape"],
    description: "Visual design software for rapid brand asset creation, presentation graphics, and marketing collaterals."
  },
];

export function getTechnologyByName(name: string): Technology | undefined {
  return technologies.find((t) => t.name.toLowerCase() === name.toLowerCase());
}
