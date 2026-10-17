import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';
import './Footer.css';

const FOOTER_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Internship', href: '#internship' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        {/* Top footer row */}
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="monogram-badge">
                <span className="monogram-text">RM</span>
              </div>
              <div className="footer-brand-text">
                <span className="footer-author-name">{personalInfo.fullName}</span>
                <span className="footer-author-role">{personalInfo.headline}</span>
              </div>
            </div>
            <p className="footer-brand-desc">
              Building functional, scalable applications and delivering impactful software solutions.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="footer-nav-block">
            <span className="footer-heading">Navigation</span>
            <ul className="footer-links-list">
              {FOOTER_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="footer-link"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Connect */}
          <div className="footer-connect-block">
            <span className="footer-heading">Connect</span>
            <div className="footer-social-icons">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon-only footer-social-btn"
                aria-label="Rakshith's GitHub profile"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon-only footer-social-btn"
                aria-label="Rakshith's LinkedIn profile"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="btn-icon-only footer-social-btn"
                aria-label="Send email to Rakshith"
              >
                <Mail size={18} />
              </a>
            </div>
            <span className="footer-email-text">{personalInfo.email}</span>
          </div>
        </div>

        {/* Bottom divider and copyright */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} {personalInfo.fullName}. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="footer-back-to-top"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
