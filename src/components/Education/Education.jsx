import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import styles from './Education.module.css';

const courses = [
  "Data Structures & Algorithms",
  "Database Management Systems",
  "Web Technology",
  "Object Oriented Programming",
  "Software Engineering",
  "Operating Systems",
  "Computer Networks",
  "Artificial Intelligence",
  "Entrepreneurship"
];

export const Education = () => {
  const edu = portfolioData.education[0]; // Fetch Anna University afiliations

  return (
    <section id="education" className={`${styles.educationSection} section`}>
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Education</h2>

        <div className={styles.eduContainer}>
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className={styles.eduCard}
          >
            {/* Header info */}
            <div className={styles.eduHeader}>
              <div className={styles.titleGroup}>
                <h3 className={styles.eduTitle}>{edu.degree}</h3>
                <span className={styles.eduCollege}>{edu.institution}</span>
              </div>
              <span className={styles.durationBadge}>{edu.duration}</span>
            </div>

            <p className={styles.eduDesc}>
              {edu.details} Currently maintaining a competitive academic standing while pursuing research opportunities in web applications and network layers. Actively involved in building real-world projects and participating in code challenges.
            </p>

            {/* Course tags */}
            <h4 className={styles.courseworkTitle}>Core Coursework & Specialized Electives</h4>
            <div className={styles.courseworkGrid}>
              {courses.map((course, idx) => (
                <div 
                  key={idx} 
                  className={styles.courseTag}
                  data-aos="fade-up"
                  data-aos-delay={idx * 50}
                >
                  {course}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Education;
