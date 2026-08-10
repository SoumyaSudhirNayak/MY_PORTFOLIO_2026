# Soumya Sudhir Nayak — Developer Portfolio

A modern, high-performance, dark-themed personal developer portfolio built with **React**, **TypeScript**, **Vite**, **GSAP**, and **Lenis**. Showcasing projects in Full-Stack Engineering, AI/ML, Backend Systems, and Data Infrastructure.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19.2-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-8.2-purple?logo=vite)

---

## 🚀 Key Features

- **⚡ Interactive Hero Section**: Features mouse-tracking parallax, real-time typing CLI terminal, and background watermark effects.
- **🛠️ Technical Constellation Toolbox**: Interactive 2D tech stack grid with detailed inspector panel and project cross-references.
- **💼 Selected Work Grid**: Clean, uniform project card layout featuring curated color gradients, project tags, direct links, and detailed Case Study pages.
- **🐍 Dynamic Snake-Flow Journey Timeline**: Fully data-driven wrapped layout algorithm that automatically computes row capacity and alternates direction with continuous amber timeline connectors.
- **🏆 Achievements Showcase**: Dedicated section highlighting hackathon wins, top-5 finishes, and ministry recognitions.
- **🌊 Lenis Inertia Scrolling**: Subtle, responsive smooth scrolling integrated with frame-rate clock and native scroll events.
- **📱 Mobile & Desktop Optimized**: Fully responsive layout with custom mobile breakpoints, touch support, and zero horizontal overflow.

---

## 🛠️ Tech Stack

- **Framework & Core**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Animations & Parallax**: [GSAP (GreenSock)](https://gsap.com/)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS3 with Custom Properties (Design Tokens), Dark Theme, Glassmorphism, and Flexbox/Grid

---

## 📁 Project Structure

```text
my-portfolio/
├── public/
│   └── assets/
│       └── resume/           # PDF Resume file
├── src/
│   ├── components/           # Shared reusable components
│   │   ├── Footer/           # Global footer component
│   │   ├── HeroTerminal/     # Interactive typing CLI terminal
│   │   ├── icons/            # SVG brand icons
│   │   ├── navigation/       # Top navigation & mobile menu
│   │   └── SmoothScroll/     # Lenis smooth scroll provider
│   ├── data/                 # Data configuration files
│   │   ├── achievements.ts   # Honors & awards dataset
│   │   ├── heroTerminal.ts   # Terminal CLI commands dataset
│   │   ├── journey.ts        # Timeline milestones dataset
│   │   ├── navigation.ts     # Navigation links dataset
│   │   ├── profile.ts        # Personal details & contact links
│   │   └── projects.ts       # Selected Work portfolio dataset
│   ├── hooks/                # Custom React hooks (useInView, useMediaQuery)
│   ├── pages/                # Page views
│   │   ├── Home/             # Main single-page portfolio layout
│   │   └── ProjectCaseStudy/ # Detailed project case study page
│   ├── sections/             # Main homepage section components
│   │   ├── About/            # About & philosophy section
│   │   ├── Achievements/     # Awards & recognitions
│   │   ├── Contact/          # CTA & get-in-touch section
│   │   ├── Hero/             # Top hero banner & terminal
│   │   ├── Journey/          # Responsive snake-flow timeline
│   │   ├── Process/          # How I Work workflow steps
│   │   ├── SelectedWork/     # Projects grid & filterable cards
│   │   └── Toolbox/          # 2D constellation tech stack grid
│   ├── types/                # TypeScript interfaces & types
│   ├── App.tsx               # Application router setup
│   ├── main.tsx              # React DOM root entry point
│   └── index.css             # Global CSS reset & design tokens
├── package.json              # Dependencies & build scripts
├── tsconfig.json             # TypeScript config
└── vite.config.ts            # Vite bundler config
```

---

## 💻 Local Setup & Installation

### Prerequisites

Ensure you have the following installed on your system:
- **[Node.js](https://nodejs.org/)** (`v18.0.0` or higher)
- **npm** (`v9.0.0` or higher)

### 1. Clone the Repository

```bash
git clone https://github.com/SoumyaSudhirNayak/my-portfolio.git
cd my-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

---

## 📦 Production Build & Preview

### Create a Production Build

To bundle the application for production:

```bash
npm run build
```

This compiles TypeScript and outputs optimized static assets to the `dist/` folder.

### Preview Production Build Locally

To test the compiled production build locally:

```bash
npm run preview
```

---

## ⚙️ Environment Variables

No environment variables are required out of the box. All portfolio datasets (projects, achievements, milestones) are stored in `src/data/`.

---

## 🚀 Deployment

This application can be deployed instantly to any static hosting provider.

### Deploy to Vercel

```bash
npx vercel
```

### Deploy to Netlify

```bash
npx netlify deploy --prod
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
