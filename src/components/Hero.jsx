import React, { useState } from 'react';
import {
  ArrowRight,
  Mail,
  GraduationCap,
  Sparkles,
  MapPin,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import profilePhoto from '../assets/profile.jpg';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 76;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Subtle ambient lighting orbs */}
      <div className="hero-glow hero-glow-1" aria-hidden="true" />
      <div className="hero-glow hero-glow-2" aria-hidden="true" />

      <div className="container hero-container">
        <div className="hero-content">
          {/* Status / Role pill */}
          <div className="hero-badge animate-fade-in">
            <span className="hero-badge-pulse" />
            <GraduationCap size={15} className="hero-badge-icon" />
            <span>Master of Computer Applications</span>
          </div>

          {/* Headline & Name */}
          <h1 className="hero-title animate-fade-in">
            Hi, I'm <span className="text-gradient">{personalInfo.fullName}</span>
          </h1>

          <div className="hero-headline-wrapper animate-fade-in">
            <span className="hero-headline">{personalInfo.headline}</span>
            <span className="hero-headline-divider">•</span>
            <span className="hero-location">
              <MapPin size={14} />
              <span>{personalInfo.location}</span>
            </span>
          </div>

          {/* Full Professional Introduction */}
          <p className="hero-intro animate-fade-in">
            {personalInfo.introduction}
          </p>

          {/* Call to Actions */}
          <div className="hero-actions animate-fade-in">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              className="btn btn-primary"
            >
              <span>Explore My Projects</span>
              <ArrowRight size={17} />
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="btn btn-secondary"
            >
              <Mail size={17} />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Profiles */}
          <div className="hero-socials animate-fade-in">
            <span className="socials-label">Connect with me:</span>
            <div className="socials-group">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon-only social-icon-btn"
                aria-label="Open Rakshith's GitHub Profile"
              >
                <GithubIcon size={20} />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon-only social-icon-btn"
                aria-label="Open Rakshith's LinkedIn Profile"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Profile Photograph presentation */}
        <div className="hero-visual animate-fade-in">
          <div className="profile-frame-outer">
            <div className="profile-frame-glow" aria-hidden="true" />
            <div className="profile-frame-inner">
              {!imgError ? (
                <img
                  src={profilePhoto}
                  alt="Photograph of Rakshith M R"
                  className="profile-photo"
                  loading="eager"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="profile-fallback">
                  <span className="profile-fallback-monogram">RM</span>
                  <span className="profile-fallback-name">Rakshith M R</span>
                </div>
              )}
            </div>

            {/* Subtle decorative tech accent */}
            <div className="profile-badge-accent">
              <Sparkles size={14} className="sparkle-icon" />
              <span>Software & Web</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
