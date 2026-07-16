import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import styles from './Experience.module.css';

export const Experience = () => {
  const experiences = portfolioData.experience;

  return (
    <section id="experience" className={`${styles.experienceSection} section`}>
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Experience</h2>

        <div className={styles.timeline}>
          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div 
                key={idx}
                className={`${styles.timelineItem} ${isLeft ? styles.timelineItemLeft : styles.timelineItemRight}`}
              >
                {/* Central Connector Node */}
                <div className={styles.timelineDot} />

                {/* Animated Highlight Card */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, type: 'spring' }}
                  className={styles.timelineContent}
                >
                  <span className={styles.timelineDate}>{exp.duration}</span>
                  <h3 className={styles.timelineTitle}>{exp.role}</h3>
                  <span className={styles.timelineCompany}>{exp.company}</span>
                  
                  <p className={styles.timelineDesc}>{exp.description}</p>
                  
                  <ul className={styles.timelineHighlights}>
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className={styles.highlightItem}>
                        {!isLeft && <span className={styles.highlightDot} />}
                        <span>{highlight}</span>
                        {isLeft && <span className={styles.highlightDot} />}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Experience;
