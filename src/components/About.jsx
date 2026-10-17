import React from 'react';
import { User, Code2, Cpu, Lightbulb, Compass, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './About.css';

const PILLARS = [
  {
    icon: Code2,
    title: 'Functional Application Development',
    description:
      'Passionate about writing clean code and building practical software that transforms concepts into reliable digital tools.',
  },
  {
    icon: Cpu,
    title: 'Solid Core Fundamentals',
    description:
      'Strong grounding in programming paradigms, structured problem-solving, and efficient computational logic.',
  },
  {
    icon: Lightbulb,
    title: 'Continuous Adaptability',
    description:
      'Quick to grasp modern tools, collaborate on evolving codebases, and embrace new technical paradigms with enthusiasm.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-wrapper about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <User size={14} />
            <span>About Me</span>
          </div>
          <h2 className="section-title">Background & Technical Mindset</h2>
          <p className="section-subtitle">
            Focused on building dependable applications, mastering computing fundamentals, and delivering real value.
          </p>
        </div>

        {/* Content Grid */}
        <div className="about-grid">
          {/* Main narrative card */}
          <div className="glass-card about-narrative-card">
            <div className="about-quote-mark">“</div>
            <h3 className="about-narrative-heading">
              Dedicated to learning, building, and delivering software solutions.
            </h3>
            <p className="about-narrative-text">
              {personalInfo.introduction}
            </p>

            <div className="about-highlights-list">
              <div className="about-highlight-item">
                <CheckCircle2 size={18} className="highlight-check" />
                <span>Currently pursuing MCA at BMSIT, Bengaluru</span>
              </div>
              <div className="about-highlight-item">
                <CheckCircle2 size={18} className="highlight-check" />
                <span>BCA graduate with comprehensive computer science coursework</span>
              </div>
              <div className="about-highlight-item">
                <CheckCircle2 size={18} className="highlight-check" />
                <span>Hands-on project experience in web and software systems</span>
              </div>
            </div>
          </div>

          {/* Core Pillars */}
          <div className="about-pillars-stack">
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="glass-card pillar-card">
                  <div className="pillar-icon-wrapper">
                    <Icon size={22} />
                  </div>
                  <div className="pillar-content">
                    <h4 className="pillar-title">{pillar.title}</h4>
                    <p className="pillar-description">{pillar.description}</p>
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
