import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState('');

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(personalInfo.email);
      } else {
        // Fallback for non-https or older browser contexts
        const textArea = document.createElement('textarea');
        textArea.value = personalInfo.email;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }

      setCopied(true);
      setCopyFeedback('Email copied to clipboard!');
      setTimeout(() => {
        setCopied(false);
        setCopyFeedback('');
      }, 3000);
    } catch (err) {
      console.error('Failed to copy email:', err);
      setCopyFeedback('Could not copy automatically. Email: ' + personalInfo.email);
    }
  };

  return (
    <section id="contact" className="section-wrapper contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            I am actively seeking opportunities to contribute to impactful software solutions. Reach out via email, phone, or professional networks.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Card 1: Email */}
          <div className="glass-card contact-card">
            <div className="contact-card-icon-box">
              <Mail size={24} />
            </div>
            <div className="contact-card-content">
              <span className="contact-card-type">Email Address</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="contact-card-value email-link"
                aria-label={`Send email to ${personalInfo.email}`}
              >
                {personalInfo.email}
              </a>
              <p className="contact-card-note">Primary channel for technical inquiries and opportunities</p>
            </div>
            <div className="contact-card-action">
              <button
                type="button"
                onClick={handleCopyEmail}
                className={`btn btn-sm ${copied ? 'btn-copied' : 'btn-secondary'} copy-btn`}
                aria-label="Copy email address to clipboard"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? 'Copied!' : 'Copy Email'}</span>
              </button>
              <a
                href={`mailto:${personalInfo.email}`}
                className="btn btn-primary btn-sm"
                aria-label="Open email client"
              >
                <span>Compose</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

          {/* Card 2: Phone */}
          <div className="glass-card contact-card">
            <div className="contact-card-icon-box">
              <Phone size={24} />
            </div>
            <div className="contact-card-content">
              <span className="contact-card-type">Phone Number</span>
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="contact-card-value phone-link"
                aria-label={`Call ${personalInfo.phone}`}
              >
                {personalInfo.phone}
              </a>
              <p className="contact-card-note">Available for direct calls and telephonic conversations</p>
            </div>
            <div className="contact-card-action">
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="btn btn-primary btn-sm"
                aria-label="Call phone number directly"
              >
                <Phone size={14} />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Card 3: LinkedIn */}
          <div className="glass-card contact-card">
            <div className="contact-card-icon-box">
              <LinkedinIcon size={24} />
            </div>
            <div className="contact-card-content">
              <span className="contact-card-type">Professional Network</span>
              <span className="contact-card-value">LinkedIn Profile</span>
              <p className="contact-card-note">Connect for professional updates, recommendations, and messaging</p>
            </div>
            <div className="contact-card-action">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                aria-label="Open Rakshith's LinkedIn Profile in a new tab"
              >
                <span>Connect</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Card 4: GitHub */}
          <div className="glass-card contact-card">
            <div className="contact-card-icon-box">
              <GithubIcon size={24} />
            </div>
            <div className="contact-card-content">
              <span className="contact-card-type">Code Repository</span>
              <span className="contact-card-value">GitHub / Rakshithmr52</span>
              <p className="contact-card-note">Explore open source contributions, repositories, and projects</p>
            </div>
            <div className="contact-card-action">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                aria-label="Open Rakshith's GitHub Profile in a new tab"
              >
                <span>View Profile</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Copy Feedback Toast/Alert */}
        {copyFeedback && (
          <div className="copy-feedback-toast animate-fade-in" role="status" aria-live="polite">
            <Check size={16} />
            <span>{copyFeedback}</span>
          </div>
        )}
      </div>
    </section>
  );
}
