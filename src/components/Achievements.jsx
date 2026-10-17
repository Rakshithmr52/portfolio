import React from 'react';
import { Trophy, Medal, Award } from 'lucide-react';
import { achievementsList } from '../data/portfolioData';
import './Achievements.css';

export default function Achievements() {
  return (
    <section id="achievements" className="section-wrapper achievements-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Trophy size={14} />
            <span>Honors & Extracurriculars</span>
          </div>
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">
            Leadership, competitive spirit, and team success demonstrated across college and inter-collegiate sports.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="achievements-grid">
          {achievementsList.map((item) => (
            <div key={item.id} className="glass-card achievement-card">
              <div className="achievement-icon-wrapper">
                <Trophy size={30} className="trophy-icon" />
              </div>
              <div className="achievement-content">
                <div className="achievement-badge-row">
                  <span className="achievement-pill">{item.badge}</span>
                  <span className="achievement-sport">{item.sport}</span>
                </div>
                <h3 className="achievement-title">{item.title}</h3>
                <p className="achievement-event">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
