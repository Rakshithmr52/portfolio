import React from 'react';
import { Briefcase, Building2, CheckCircle2, Terminal } from 'lucide-react';
import { internshipList } from '../data/portfolioData';
import './Internship.css';

export default function Internship() {
  return (
    <section id="internship" className="section-wrapper internship-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Briefcase size={14} />
            <span>Practical Experience</span>
          </div>
          <h2 className="section-title">Internship</h2>
          <p className="section-subtitle">
            Hands-on technical exposure in full-stack Java development and industry-standard workflows.
          </p>
        </div>

        {/* Internship Cards */}
        <div className="internship-container">
          {internshipList.map((intern) => (
            <div key={intern.id} className="glass-card internship-card">
              <div className="internship-card-header">
                <div className="internship-role-box">
                  <div className="internship-icon-box">
                    <Terminal size={24} />
                  </div>
                  <div>
                    <span className="internship-badge">Internship Experience</span>
                    <h3 className="internship-role">{intern.role}</h3>
                    <div className="internship-company">
                      <Building2 size={16} className="company-icon" />
                      <span>{intern.company}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="internship-highlights">
                <h4 className="highlights-title">Key Responsibilities & Learnings:</h4>
                <ul className="highlights-list">
                  {intern.highlights.map((item, idx) => (
                    <li key={idx} className="highlight-item">
                      <CheckCircle2 size={18} className="highlight-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
