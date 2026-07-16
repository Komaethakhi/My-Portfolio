import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaEnvelope, FaMapMarkerAlt, FaBriefcase, FaCode, FaCloud, FaServer } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';
import styles from './About.module.css';

export const About = () => {
  const { name, role, introduction, aboutMe, email, location, avatar } = portfolioData.personalInfo;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } }
  };

  return (
    <section id="about" className={`${styles.aboutSection} section`}>
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">About Me</h2>

        <div className={styles.aboutGrid}>
          {/* Left: Glass Profile Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={styles.profileCard}
          >
            <div className={styles.profileAvatar}>
              <img src={avatar} alt={name} className={styles.avatarImage} />
            </div>
            <h3>{name}</h3>
            <p>{role.split('|')[1].trim()}</p>

            <div className={styles.detailsList}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}><FaGraduationCap style={{ marginRight: '6px' }} /> Degree</span>
                <span className={styles.detailValue}>B.E. Computer Science</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}><FaEnvelope style={{ marginRight: '6px' }} /> Email</span>
                <span className={styles.detailValue} style={{ fontSize: '0.8rem' }}>{email}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}><FaMapMarkerAlt style={{ marginRight: '6px' }} /> Location</span>
                <span className={styles.detailValue}>{location}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}><FaBriefcase style={{ marginRight: '6px' }} /> Availability</span>
                <span className={styles.detailValue}>Open for Roles</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Technical Biography & Career Objective */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={styles.infoContent}
          >
            <h3>Engineering Solutions Through Code</h3>
            <p className={styles.objective}>
              "Final Year B.E Computer Science Engineering student passionate about software development, web technologies, and creating real-world applications."
            </p>
            <p className={styles.bioText}>
              {aboutMe}
            </p>
            
            <div className={styles.bulletPoints}>
              <div className={styles.bullet}>
                <FaCloud className={styles.bulletIcon} />
                <span>DevOps Engineer</span>
              </div>
              <div className={styles.bullet}>
                <FaCode className={styles.bulletIcon} />
                <span>Full Stack Developer</span>
              </div>
              <div className={styles.bullet}>
                <FaCode className={styles.bulletIcon} />
                <span>MERN Stack Specialist</span>
              </div>
              <div className={styles.bullet}>
                <FaServer className={styles.bulletIcon} />
                <span>CI/CD & Automation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default About;
