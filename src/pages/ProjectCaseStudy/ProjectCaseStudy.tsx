import { useParams, Link, Navigate } from "react-router-dom";
import { getProjectById, getPublicProjects } from "../../data/projects";
import { ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";
import { GithubIcon } from "../../components/icons/BrandIcons";
import CaseStudyTerminal from "../../components/CaseStudyTerminal/CaseStudyTerminal";
import Footer from "../../components/Footer/Footer";
import "./ProjectCaseStudy.css";

export default function ProjectCaseStudy() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? getProjectById(projectId) : undefined;

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const allProjects = getPublicProjects();
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];

  return (
    <div className="case-study">
      {/* Header */}
      <div className="cs__header">
        <div className="container">
          <Link to="/" className="cs__back">
            <ArrowLeft size={16} />
            BACK TO PORTFOLIO
          </Link>

          <div className="cs__header-grid">
            {/* Left Column: Hero Title & Metadata */}
            <div className="cs__header-left">
              <div className="cs__meta">
                <span className="cs__number">{project.number}</span>
                <span className="cs__year">{project.year}</span>
                {project.status && <span className="cs__status">{project.status.toUpperCase()}</span>}
                {project.visibility === "restricted" && (
                  <span className="cs__restricted">RESTRICTED</span>
                )}
              </div>

              <h1 className="cs__title">{project.title}</h1>
              <p className="cs__subtitle">{project.subtitle}</p>

              {project.achievement && (
                <div className="cs__achievement">
                  🏆 {project.achievement.title}
                  {project.achievement.organization && ` — ${project.achievement.organization}`}
                </div>
              )}

              <div className="cs__links">
                {project.links?.github && project.visibility !== "restricted" && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    <GithubIcon size={16} />
                    VIEW ON GITHUB
                  </a>
                )}
                {project.links?.live && project.visibility === "public" && (
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    <ExternalLink size={16} />
                    VIEW LIVE
                  </a>
                )}
              </div>
            </div>

            {/* Right Column: Reusable Terminal Metadata Inspector */}
            <div className="cs__header-right">
              <CaseStudyTerminal project={project} />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="cs__content container">
        {/* Overview */}
        <div className="cs__section">
          <h2 className="cs__section-title">OVERVIEW</h2>
          <p className="cs__section-text">{project.description}</p>
        </div>

        {/* Case Study Content */}
        {project.caseStudy?.problem && (
          <div className="cs__section">
            <h2 className="cs__section-title">THE PROBLEM</h2>
            <p className="cs__section-text">{project.caseStudy.problem}</p>
          </div>
        )}

        {project.caseStudy?.solution && (
          <div className="cs__section">
            <h2 className="cs__section-title">THE SOLUTION</h2>
            <p className="cs__section-text">{project.caseStudy.solution}</p>
          </div>
        )}

        {project.caseStudy?.challenges && project.caseStudy.challenges.length > 0 && (
          <div className="cs__section">
            <h2 className="cs__section-title">KEY CHALLENGES</h2>
            <ul className="cs__challenges">
              {project.caseStudy.challenges.map((challenge, i) => (
                <li key={i} className="cs__challenge">
                  <span className="cs__challenge-num">0{i + 1}</span>
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.caseStudy?.outcome && (
          <div className="cs__section">
            <h2 className="cs__section-title">OUTCOME</h2>
            <p className="cs__section-text">{project.caseStudy.outcome}</p>
          </div>
        )}
      </div>

      {/* Project Navigation (Previous / Next) */}
      {allProjects.length > 1 && (
        <div className="cs__nav">
          <div className="container cs__nav-grid">
            {/* PREVIOUS PROJECT */}
            {prevProject && prevProject.id !== project.id ? (
              <Link to={`/work/${prevProject.id}`} className="cs__nav-link cs__nav-link--prev">
                <ArrowLeft size={22} />
                <div className="cs__nav-info">
                  <span className="cs__nav-label">PREVIOUS PROJECT</span>
                  <span className="cs__nav-title">{prevProject.title}</span>
                </div>
              </Link>
            ) : <div />}

            {/* NEXT PROJECT */}
            {nextProject && nextProject.id !== project.id ? (
              <Link to={`/work/${nextProject.id}`} className="cs__nav-link cs__nav-link--next">
                <div className="cs__nav-info">
                  <span className="cs__nav-label">NEXT PROJECT</span>
                  <span className="cs__nav-title">{nextProject.title}</span>
                </div>
                <ArrowRight size={22} />
              </Link>
            ) : <div />}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
