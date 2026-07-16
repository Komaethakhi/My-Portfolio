import React, { useState, useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, 
  FaGitAlt, FaGithub, FaServer, FaCloud, FaAws, FaPython,
  FaRobot
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiExpress, SiMongodb, SiFirebase, 
  SiPostman, SiDocker, SiGithubactions, SiPostgresql,
  SiAndroidstudio, SiRedhat, SiJenkins, SiFigma
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { portfolioData } from '../../data/portfolioData';
import styles from './Skills.module.css';

// Helper to resolve skill icons
const getSkillIcon = (name) => {
  switch (name.toLowerCase()) {
    case 'html5':
      return <FaHtml5 color="#E34F26" />;
    case 'css3':
      return <FaCss3Alt color="#1572B6" />;
    case 'javascript':
      return <FaJs color="#F7DF1E" />;
    case 'react js':
      return <FaReact color="#61DAFB" />;
    case 'ui/ux design':
      return <SiFigma color="#F24E1E" />;
    case 'next.js':
      return <SiNextdotjs color="#FFFFFF" />;
    case 'node.js':
      return <FaNodeJs color="#339933" />;
    case 'express.js':
      return <SiExpress color="#FFFFFF" />;
    case 'rest apis':
      return <FaServer color="#00ADB5" />;
    case 'mongodb':
      return <SiMongodb color="#47A248" />;
    case 'firebase':
      return <SiFirebase color="#FFCA28" />;
    case 'postgresql':
      return <SiPostgresql color="#4169E1" />;
    case 'java':
      return <FaJava color="#007396" />;
    case 'python':
      return <FaPython color="#3776AB" />;
    case 'git':
      return <FaGitAlt color="#F05032" />;
    case 'github':
      return <FaGithub color="#FFFFFF" />;
    case 'vs code':
      return <VscCode color="#007ACC" />;
    case 'postman':
      return <SiPostman color="#FF6C37" />;
    case 'android studio':
      return <SiAndroidstudio color="#3DDC84" />;
    case 'ai prompt engineering':
      return <FaRobot color="#10A37F" />;
    case 'redhat (rhcsa/rhce)':
      return <SiRedhat color="#EE0000" />;
    case 'aws':
      return <FaAws color="#FF9900" />;
    case 'docker':
      return <SiDocker color="#2496ED" />;
    case 'jenkins':
      return <SiJenkins color="#D24939" />;
    case 'github actions':
      return <SiGithubactions color="#2088FF" />;
    default:
      return <FaServer color="#A0AEC0" />;
  }
};

const SkillCard = ({ skill }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className={styles.skillCard} data-aos="fade-up">
      <div className={styles.skillHeader}>
        <div className={styles.skillIcon}>{getSkillIcon(skill.name)}</div>
        <div className={styles.skillInfo}>
          <span className={styles.skillName}>{skill.name}</span>
          <span className={styles.skillPercent}>{skill.percentage}%</span>
        </div>
      </div>
      <div className={styles.barBg}>
        <div 
          className={styles.barFill} 
          style={{ width: isInView ? `${skill.percentage}%` : '0%' }}
        />
      </div>
    </div>
  );
};

export const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');
  const skillsData = portfolioData.skills;

  const tabs = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'programmingLanguages', label: 'Languages' },
    { id: 'tools', label: 'Tools' },
    { id: 'cloudDeployment', label: 'DevOps & Cloud' }
  ];

  // Helper to compile filtered skills
  const getFilteredSkills = () => {
    if (activeTab === 'all') {
      return Object.values(skillsData).flat();
    }
    return skillsData[activeTab] || [];
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section id="skills" className={`${styles.skillsSection} section`}>
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Technical Skills</h2>

        {/* Tab Controls */}
        <div className={styles.tabContainer} data-aos="fade-up">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${styles.tabBtn} ${activeTab === tab.id ? styles.activeTab : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Skills Grid */}
        <motion.div 
          layout
          className={styles.skillsGrid}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              layout
              key={`${skill.name}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Skills;
