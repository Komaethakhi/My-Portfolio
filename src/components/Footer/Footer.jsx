import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaTimes } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';
import styles from './Footer.module.css';

export const Footer = () => {
  const { name, socialLinks } = portfolioData.personalInfo;
  const [policyOpen, setPolicyOpen] = useState(false);

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const togglePolicyModal = () => {
    setPolicyOpen(!policyOpen);
    if (!policyOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} container`}>
        <div className={styles.footerTop}>
          {/* Brand Info */}
          <div className={styles.footerBrand}>
            <div className={styles.brandLogo} style={{ cursor: 'pointer' }} onClick={() => handleNavClick('home')}>
              M.Komaethakhi<span className={styles.logoDot}>_</span>
            </div>
            <p className={styles.brandDesc}>
              Final Year Computer Science Engineering student engineering responsive and high-performance MERN Stack web solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.footerLinks}>
            <span className={styles.linksTitle}>Quick Navigation</span>
            <ul className={styles.linksList}>
              <li><a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Home</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About Me</a></li>
              <li><a href="#skills" onClick={(e) => { e.preventDefault(); handleNavClick('skills'); }}>Skills</a></li>
              <li><a href="#projects" onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}>Projects</a></li>
            </ul>
          </div>

          {/* Social connections */}
          <div className={styles.footerLinks}>
            <span className={styles.linksTitle}>Find Me On</span>
            <ul className={styles.linksList}>
              <li>
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FaGithub /> GitHub
                </a>
              </li>
              <li>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FaLinkedin /> LinkedIn
                </a>
              </li>
              <li>
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FaInstagram /> Instagram
                </a>
              </li>
              <li>
                <a href={socialLinks.email} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FaEnvelope /> Email Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and Privacy policy triggers */}
        <div className={styles.footerBottom}>
          <span className={styles.copyright}>
            &copy; {currentYear} {name}. All rights reserved.
          </span>
          <div className={styles.policyLinks}>
            <button className={styles.policyLink} onClick={togglePolicyModal}>Privacy Policy</button>
            <span className={styles.copyright} style={{ cursor: 'default' }}>Terms of Service</span>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal overlay */}
      <AnimatePresence>
        {policyOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.modalOverlay}
            onClick={togglePolicyModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25 }}
              className={styles.modalContainer}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.modalHeader}>
                <h3 className={styles.modalTitle}>Privacy Policy</h3>
                <button className={styles.modalClose} onClick={togglePolicyModal} aria-label="Close privacy modal">
                  <FaTimes />
                </button>
              </div>

              <div className={styles.modalBody}>
                <p>
                  This Privacy Policy describes how your information is handled when you visit this portfolio website.
                </p>

                <h4>1. Information Collection</h4>
                <p>
                  We do not collect any personal identifier information automatically. When you submit the contact form, the details you enter (Name, Email, Subject, Message) are used purely for communication and response purposes.
                </p>

                <h4>2. Cookies & Analytics</h4>
                <p>
                  This site does not use persistent cookies for user tracking. However, standard hosting services (e.g., Vercel, Render) may log diagnostic metadata for quality of service.
                </p>

                <h4>3. Third-party Links</h4>
                <p>
                  This portfolio contains links to external platforms (e.g., LinkedIn, GitHub). We are not responsible for the privacy practices or contents of those external services.
                </p>

                <h4>4. Contact Support</h4>
                <p>
                  If you have questions about this policy, please reach out to me directly at: <br />
                  <strong>komaethakhi.m.dev@gmail.com</strong>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};
export default Footer;
