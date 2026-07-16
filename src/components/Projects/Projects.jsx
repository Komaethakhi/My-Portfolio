import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle, FaCheckCircle, FaTimes } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';
import styles from './Projects.module.css';

// Custom SVG Project Previews
const ProjectVisual = ({ type }) => {
  switch (type) {
    case 'ticket_system':
      return (
        <div className={styles.placeholderVisual}>
          <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="180" height="100" rx="8" fill="#1E293B" stroke="#00ADB5" strokeWidth="2" />
            <rect x="20" y="25" width="45" height="75" rx="4" fill="#0D1324" />
            <rect x="75" y="25" width="105" height="15" rx="3" fill="#0D1324" />
            <circle cx="85" cy="32.5" r="3" fill="#FFB703" />
            <rect x="95" y="30" width="70" height="5" rx="1" fill="#A0AEC0" />
            
            {/* Ticketing Columns */}
            <rect x="75" y="48" width="50" height="20" rx="3" fill="#0D1324" stroke="rgba(0, 173, 181, 0.4)" />
            <rect x="130" y="48" width="50" height="20" rx="3" fill="#0D1324" stroke="rgba(255, 183, 3, 0.4)" />
            <rect x="75" y="73" width="50" height="20" rx="3" fill="#0D1324" stroke="rgba(0, 173, 181, 0.4)" />
            
            {/* Ticket Text Indicators */}
            <line x1="80" y1="54" x2="115" y2="54" stroke="#A0AEC0" strokeWidth="2" />
            <line x1="80" y1="60" x2="100" y2="60" stroke="#FF5555" strokeWidth="2" />
            
            <line x1="135" y1="54" x2="170" y2="54" stroke="#A0AEC0" strokeWidth="2" />
            <line x1="135" y1="60" x2="160" y2="60" stroke="#00ADB5" strokeWidth="2" />
            
            <line x1="80" y1="79" x2="115" y2="79" stroke="#A0AEC0" strokeWidth="2" />
            <line x1="80" y1="85" x2="105" y2="85" stroke="#FFB703" strokeWidth="2" />
          </svg>
        </div>
      );
    case 'movie_watchlist':
      return (
        <div className={styles.placeholderVisual}>
          <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="10" width="170" height="100" rx="8" fill="#1E293B" stroke="#00ADB5" strokeWidth="2" />
            {/* Screen border */}
            <rect x="25" y="18" width="150" height="72" rx="4" fill="#0D1324" />
            {/* Play Button */}
            <circle cx="100" cy="54" r="16" fill="rgba(0, 173, 181, 0.2)" stroke="#00ADB5" strokeWidth="2" />
            <polygon points="95,46 110,54 95,62" fill="#FFB703" />
            {/* Film Strips / Progress Bar */}
            <rect x="35" y="98" width="130" height="4" rx="2" fill="#393E46" />
            <rect x="35" y="98" width="80" height="4" rx="2" fill="#00ADB5" />
            {/* Stars */}
            <polygon points="40,30 42,35 47,35 43,38 45,43 40,40 35,43 37,38 33,35 38,35" fill="#FFB703" />
            <polygon points="160,30 162,35 167,35 163,38 165,43 160,40 155,43 157,38 153,35 158,35" fill="#FFB703" />
          </svg>
        </div>
      );
    case 'erp_portal':
      return (
        <div className={styles.placeholderVisual}>
          <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="10" width="170" height="100" rx="8" fill="#1E293B" stroke="#00ADB5" strokeWidth="2" />
            {/* Bar Charts / Statistics */}
            <rect x="30" y="25" width="40" height="70" rx="4" fill="#0D1324" stroke="rgba(0, 173, 181, 0.4)" />
            <rect x="35" y="65" width="8" height="20" rx="1" fill="#FFB703" />
            <rect x="47" y="45" width="8" height="40" rx="1" fill="#00ADB5" />
            <rect x="59" y="55" width="8" height="30" rx="1" fill="#A0AEC0" />

            {/* Dashboard widgets */}
            <rect x="80" y="25" width="90" height="30" rx="4" fill="#0D1324" stroke="rgba(0, 173, 181, 0.4)" />
            <circle cx="95" cy="40" r="8" fill="#393E46" />
            <line x1="110" y1="36" x2="160" y2="36" stroke="#00ADB5" strokeWidth="2" />
            <line x1="110" y1="44" x2="145" y2="44" stroke="#A0AEC0" strokeWidth="1.5" />

            <rect x="80" y="65" width="90" height="30" rx="4" fill="#0D1324" stroke="rgba(0, 173, 181, 0.4)" />
            <circle cx="95" cy="80" r="8" fill="#00ADB5" opacity="0.3" />
            <path d="M91 80 A4 4 0 0 1 99 80" stroke="#FFB703" strokeWidth="2" fill="none" />
            <line x1="110" y1="76" x2="155" y2="76" stroke="#00ADB5" strokeWidth="2" />
            <line x1="110" y1="84" x2="135" y2="84" stroke="#A0AEC0" strokeWidth="1.5" />
          </svg>
        </div>
      );
    case 'event_websites':
      return (
        <div className={styles.placeholderVisual}>
          <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="10" width="170" height="100" rx="8" fill="#1E293B" stroke="#00ADB5" strokeWidth="2" />
            {/* Calendar card */}
            <rect x="35" y="25" width="60" height="70" rx="6" fill="#0D1324" stroke="rgba(0, 173, 181, 0.4)" />
            <rect x="35" y="25" width="60" height="15" rx="2" fill="#FFB703" />
            <circle cx="45" cy="32.5" r="2" fill="#0D1324" />
            <circle cx="85" cy="32.5" r="2" fill="#0D1324" />
            {/* Calendar grid */}
            <circle cx="48" cy="52" r="3" fill="#A0AEC0" />
            <circle cx="65" cy="52" r="3" fill="#A0AEC0" />
            <circle cx="82" cy="52" r="3" fill="#A0AEC0" />
            <circle cx="48" cy="67" r="3" fill="#A0AEC0" />
            <circle cx="65" cy="67" r="3" fill="#00ADB5" />
            <circle cx="82" cy="67" r="3" fill="#A0AEC0" />
            <circle cx="48" cy="82" r="3" fill="#A0AEC0" />
            <circle cx="65" cy="82" r="3" fill="#A0AEC0" />
            <circle cx="82" cy="82" r="3" fill="#FFB703" />
            {/* Party balloon/ribbons on the right */}
            <path d="M140 30 C130 15, 160 15, 150 30" stroke="#00ADB5" strokeWidth="2" fill="#00ADB5" opacity="0.4" />
            <path d="M145 35 L145 60 C145 65 140 68 140 70" stroke="#00ADB5" strokeWidth="1.5" fill="none" />
            <path d="M125 55 C120 40, 140 40, 135 55" stroke="#FFB703" strokeWidth="2" fill="#FFB703" opacity="0.4" />
            <path d="M130 60 L130 85 C130 90 125 93 125 95" stroke="#FFB703" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
      );
    case 'pingdo':
      return (
        <div className={styles.placeholderVisual}>
          <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="10" width="120" height="100" rx="12" fill="#1E293B" stroke="#00ADB5" strokeWidth="2" />
            <rect x="45" y="15" width="110" height="90" rx="8" fill="#0D1324" />
            {/* Header */}
            <rect x="55" y="25" width="90" height="8" rx="2" fill="#FFB703" opacity="0.3" />
            {/* Checklist items */}
            {/* Item 1 */}
            <circle cx="65" cy="45" r="5" fill="#00ADB5" />
            <path d="M63 45 L65 47 L68 43" stroke="#0D1324" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="78" y1="45" x2="135" y2="45" stroke="#FFFFFF" strokeWidth="2" />
            {/* Item 2 */}
            <circle cx="65" cy="62" r="5" fill="#00ADB5" />
            <path d="M63 62 L65 64 L68 60" stroke="#0D1324" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="78" y1="62" x2="120" y2="62" stroke="#FFFFFF" strokeWidth="2" />
            {/* Item 3 */}
            <circle cx="65" cy="79" r="5" fill="none" stroke="#A0AEC0" strokeWidth="1.5" />
            <line x1="78" y1="79" x2="110" y2="79" stroke="#A0AEC0" strokeWidth="2" />
            {/* Ping indicator / Bell icon */}
            <circle cx="138" cy="80" r="10" fill="#FFB703" />
            <path d="M135 83 A3 3 0 0 0 141 83 M133 80 L143 80 L140 75 L140 73 A2 2 0 0 0 136 73 L136 75 Z" fill="#0D1324" />
          </svg>
        </div>
      );
    case 'student_management':
      return (
        <div className={styles.placeholderVisual}>
          <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="10" width="170" height="100" rx="8" fill="#1E293B" stroke="#00ADB5" strokeWidth="2" />
            {/* Graduation Cap */}
            <path d="M70 35 L100 25 L130 35 L100 45 Z" fill="#FFB703" />
            <path d="M80 40 L80 55 C80 62 120 62 120 55 L120 40" fill="none" stroke="#FFB703" strokeWidth="2" />
            <path d="M125 35 L125 50 C125 52 128 53 128 55" fill="none" stroke="#FF5555" strokeWidth="1.5" />
            
            {/* AI Network node overlay */}
            <circle cx="45" cy="75" r="6" fill="#0D1324" stroke="#00ADB5" strokeWidth="2" />
            <circle cx="100" cy="85" r="8" fill="#0D1324" stroke="#00ADB5" strokeWidth="2" />
            <circle cx="155" cy="75" r="6" fill="#0D1324" stroke="#00ADB5" strokeWidth="2" />
            
            <line x1="51" y1="75" x2="92" y2="83" stroke="#00ADB5" strokeWidth="1.5" opacity="0.6" />
            <line x1="149" y1="75" x2="108" y2="83" stroke="#00ADB5" strokeWidth="1.5" opacity="0.6" />
            <line x1="100" y1="47" x2="100" y2="77" stroke="#00ADB5" strokeWidth="1.5" opacity="0.6" strokeDasharray="2 2" />

            {/* Neural weights/features */}
            <circle cx="45" cy="75" r="2" fill="#FFB703" />
            <circle cx="100" cy="85" r="3" fill="#FFB703" />
            <circle cx="155" cy="75" r="2" fill="#FFB703" />
          </svg>
        </div>
      );
    default:
      return <div className={styles.placeholderVisual} />;
  }
};

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = portfolioData.projects;

  const filters = ['All', 'MERN', 'Frontend', 'Mobile'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" className={`${styles.projectsSection} section`}>
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Projects</h2>

        {/* Filter Controls */}
        <div className={styles.filterContainer} data-aos="fade-up">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`${styles.filterBtn} ${activeFilter === filter ? styles.activeFilter : ''}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout 
          className={styles.projectsGrid}
        >
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className={styles.projectCard}
            >
              {/* Custom SVG Preview */}
              <div className={styles.imageContainer}>
                {project.status && (
                  <span className={`${styles.statusBadge} ${project.status.toLowerCase() === 'ongoing' ? styles.ongoing : styles.completed}`}>
                    {project.status}
                  </span>
                )}
                <div className={styles.projectImg}>
                  <ProjectVisual type={project.image} />
                </div>
              </div>

              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                
                <div className={styles.techBadges}>
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className={styles.techBadge}>{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className={styles.techBadge}>+{project.technologies.length - 4} More</span>
                  )}
                </div>

                <div className={styles.cardActions}>
                  <button 
                    onClick={() => handleOpenModal(project)}
                    className={`${styles.actionBtn} ${styles.btnDetails}`}
                    style={{ flex: (!project.githubLink || project.githubLink === '#') && (!project.liveDemo || project.liveDemo === '#') ? '100%' : '1' }}
                  >
                    <FaInfoCircle /> Details
                  </button>
                  {project.githubLink && project.githubLink !== '#' && (
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glow-btn"
                      style={{ padding: '0.5rem', flex: 1, fontSize: '0.8rem' }}
                    >
                      <FaGithub /> Git
                    </a>
                  )}
                  {project.liveDemo && project.liveDemo !== '#' && (
                    <a 
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glow-btn-accent"
                      style={{ padding: '0.5rem', flex: 1, fontSize: '0.8rem' }}
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Details Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.modalOverlay}
            onClick={handleCloseModal}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25 }}
              className={styles.modalContainer}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={styles.modalHeader}>
                <h3 className={styles.modalTitle}>
                  {selectedProject.title}
                  {selectedProject.status && (
                    <span className={`${styles.statusBadge} ${selectedProject.status.toLowerCase() === 'ongoing' ? styles.ongoing : styles.completed}`} style={{ position: 'relative', top: 'unset', left: 'unset', marginLeft: '10px', verticalAlign: 'middle', display: 'inline-block' }}>
                      {selectedProject.status}
                    </span>
                  )}
                </h3>
                <button className={styles.modalClose} onClick={handleCloseModal} aria-label="Close details modal">
                  <FaTimes />
                </button>
              </div>

              {/* Modal Body */}
              <div className={styles.modalBody}>
                <div className={styles.modalImgWrapper}>
                  <ProjectVisual type={selectedProject.image} />
                </div>

                <p className={styles.modalDescription}>
                  {selectedProject.longDescription}
                </p>

                <h4 className={styles.featureTitle}>Key Features & Deliverables</h4>
                <ul className={styles.featureList}>
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <FaCheckCircle /> <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <h4 className={styles.featureTitle}>Technologies Utilized</h4>
                <div className={styles.techBadges}>
                  {selectedProject.technologies.map((tech, idx) => (
                    <span key={idx} className={styles.techBadge} style={{ color: 'var(--primary-color)', borderColor: 'var(--primary-color)' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              {(selectedProject.githubLink && selectedProject.githubLink !== '#') || (selectedProject.liveDemo && selectedProject.liveDemo !== '#') ? (
                <div className={styles.modalActions}>
                  {selectedProject.githubLink && selectedProject.githubLink !== '#' && (
                    <a 
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glow-btn"
                      style={{ flex: 1, justifyContent: 'center' }}
                    >
                      <FaGithub /> Repository Code
                    </a>
                  )}
                  {selectedProject.liveDemo && selectedProject.liveDemo !== '#' && (
                    <a 
                      href={selectedProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glow-btn-accent"
                      style={{ flex: 1, justifyContent: 'center' }}
                    >
                      <FaExternalLinkAlt /> Open Live Demo
                    </a>
                  )}
                </div>
              ) : (
                <div className={styles.modalActions} style={{ justifyContent: 'center', color: 'var(--text-gray)', fontSize: '0.9rem', fontStyle: 'italic' }}>
                  Code repository and live demo will be available upon release.
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
export default Projects;
