import React from 'react';
import {
  Code,
  Globe,
  Wrench,
  Terminal,
  CheckCircle,
  FileCode2,
  Layers,
  GitBranch,
  Monitor,
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import './Skills.css';

const CATEGORY_ICONS = {
  Programming: Terminal,
  'Web Development': Globe,
  'Tools & Environment': Wrench,
};

const SKILL_ICONS = {
  C: Code,
  'Basic Java': FileCode2,
  HTML: Layers,
  CSS: Globe,
  GitHub: GitBranch,
  'Visual Studio Code': Monitor,
};

export default function Skills() {
  return (
    <section id="skills" className="section-wrapper skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Code size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">Skills & Tooling</h2>
          <p className="section-subtitle">
            Confirmed foundational skill set in structured programming, web markup and styling, and collaborative development tools.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="skills-grid">
          {skillCategories.map((category, catIdx) => {
            const CategoryIcon = CATEGORY_ICONS[category.title] || Terminal;
            return (
              <div key={catIdx} className="glass-card skill-category-card">
                <div className="category-header">
                  <div className="category-icon-wrapper">
                    <CategoryIcon size={22} />
                  </div>
                  <div>
                    <h3 className="category-title">{category.title}</h3>
                    <p className="category-desc">{category.description}</p>
                  </div>
                </div>

                <div className="skills-list">
                  {category.skills.map((skill, skillIdx) => {
                    const SkillIcon = SKILL_ICONS[skill.name] || CheckCircle;
                    return (
                      <div key={skillIdx} className="skill-pill">
                        <div className="skill-pill-left">
                          <SkillIcon size={16} className="skill-icon" />
                          <span className="skill-name">{skill.name}</span>
                        </div>
                        <span className="skill-context">{skill.level}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
