import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Building, ExternalLink } from 'lucide-react';
import { certificationsList } from '../data/portfolioData';
import './Certifications.css';

export default function Certifications() {
  return (
    <section id="certifications" className="section-wrapper certifications-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Award size={14} />
            <span>Credentials</span>
          </div>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Demonstrating applied capabilities, technical readiness, and disciplined engineering practices.
          </p>
        </div>

        {/* Certificate Card Grid */}
        <div className="certifications-grid">
          {certificationsList.map((cert) => (
            <div key={cert.id} className="glass-card cert-card">
              <div className="cert-card-inner">
                {/* Visual Icon */}
                <div className="cert-icon-container">
                  <div className="cert-icon-box">
                    <ShieldCheck size={32} />
                  </div>
                  <div className="cert-verified-badge">
                    <CheckCircle2 size={13} />
                    <span>{cert.badge}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="cert-details">
                  <div className="cert-meta">
                    <div className="cert-issuer">
                      <Building size={14} className="issuer-icon" />
                      <span>{cert.organization}</span>
                    </div>
                  </div>

                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-desc">{cert.description}</p>

                  {/* Future attachment / link placeholder container */}
                  <div className="cert-footer-meta">
                    <div className="cert-status-indicator">
                      <span className="cert-status-dot" />
                      <span>Official Credential issued by CertoMeter</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
