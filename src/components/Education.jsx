import React from 'react';
import { GraduationCap, Calendar, Building2, Award } from 'lucide-react';
import { educationList } from '../data/portfolioData';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="section-wrapper education-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">Education & Qualifications</h2>
          <p className="section-subtitle">
            Formal academic grounding spanning computer applications, software foundations, and pre-university studies.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="education-timeline">
          <div className="timeline-spine" aria-hidden="true" />

          <div className="timeline-items">
            {educationList.map((edu, index) => {
              const isCurrent = edu.status === 'Pursuing';
              return (
                <div key={edu.id} className="timeline-item">
                  {/* Timeline Marker Dot */}
                  <div className={`timeline-marker ${isCurrent ? 'current' : ''}`}>
                    <div className="marker-inner-dot" />
                  </div>

                  {/* Card */}
                  <div className="glass-card education-card">
                    <div className="education-card-header">
                      <div className="education-primary-info">
                        <div className="education-meta-badges">
                          <span className={`status-badge ${isCurrent ? 'status-active' : ''}`}>
                            {edu.status}
                          </span>
                          <span className="duration-badge">
                            <Calendar size={13} />
                            <span>{edu.duration}</span>
                          </span>
                        </div>
                        <h3 className="education-degree">{edu.degree}</h3>
                        <div className="education-institution">
                          <Building2 size={16} className="institution-icon" />
                          <span>{edu.institution}</span>
                        </div>
                      </div>

                      {/* Grade / Score pill */}
                      <div className="education-score-box">
                        <Award size={18} className="score-icon" />
                        <span className="score-value">{edu.score}</span>
                      </div>
                    </div>

                    <p className="education-desc">{edu.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
