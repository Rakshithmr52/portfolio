import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
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

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* RM Monogram Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="brand-logo"
          aria-label="Rakshith M R Portfolio Home"
        >
          <div className="monogram-badge">
            <span className="monogram-text">RM</span>
          </div>
          <div className="brand-info">
            <span className="brand-name">Rakshith M R</span>
            <span className="brand-title">MCA Student</span>
          </div>
        </a>

        {/* Connect Action / Contact Quick Link */}
        <div className="nav-action-wrapper">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="btn btn-primary btn-sm nav-connect-btn"
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </header>
  );
}
