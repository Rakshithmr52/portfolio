import React from 'react';
import {
  FolderGit2,
  Cloud,
  Footprints,
  Ticket,
  Check,
  Clock,
  Sparkles,
} from 'lucide-react';
import { projectsList } from '../data/portfolioData';
import './Projects.css';

const PROJECT_ICONS = {
  cloud: Cloud,
  footprints: Footprints,
  ticket: Ticket,
};

export default function Projects() {
  return (
    <section id="projects" className="section-wrapper projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <FolderGit2 size={14} />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="section-title">Projects & Systems</h2>
          <p className="section-subtitle">
            Practical software projects demonstrating full-stack cloud architecture, workflow systems, and route optimization.
          </p>
        </div>

        {/* Projects Gallery */}
        <div className="projects-grid">
          {projectsList.map((project) => {
            const Icon = PROJECT_ICONS[project.icon] || FolderGit2;
            const isCompleted = project.status === 'Completed';

            return (
              <div
                key={project.id}
                className={`glass-card project-card ${project.featured ? 'project-featured' : ''}`}
              >
                {/* Visual Top Bar / Header */}
                <div className="project-card-header">
                  <div className="project-visual-header">
                    <div className="project-icon-box">
                      <Icon size={24} />
                    </div>
                    {project.featured && (
                      <div className="featured-pill">
                        <Sparkles size={13} />
                        <span>Featured Full-Stack Project</span>
                      </div>
                    )}
                  </div>

                  <div className="project-status-wrapper">
                    <span
                      className={`project-status-badge ${
                        isCompleted ? 'status-completed' : 'status-in-progress'
                      }`}
                    >
                      {isCompleted ? <Check size={12} /> : <Clock size={12} />}
                      <span>{project.status}</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="project-body">
                  <div className="project-title-area">
                    <span className="project-tagline">{project.tagline}</span>
                    <h3 className="project-title">{project.title}</h3>
                  </div>

                  <p className="project-description">{project.description}</p>

                  {/* Confirmed Features */}
                  <div className="project-features-block">
                    <h4 className="features-title">Confirmed Project Highlights:</h4>
                    <ul className="features-list">
                      {project.features.map((feat, idx) => (
                        <li key={idx} className="feature-item">
                          <span className="feature-dot" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Tags */}
                  <div className="project-tech-stack">
                    <span className="tech-label">Technologies:</span>
                    <div className="tech-tags-group">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="tag tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
