import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import styles from './Stats.module.css';

const AnimatedCounter = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      if (isNaN(end)) {
        setCount(value);
        return;
      }
      if (start === end) return;

      const duration = 1.5; // duration of animation in seconds
      const totalSteps = 50;
      const stepTime = (duration * 1000) / totalSteps;
      const increment = (end - start) / totalSteps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className={styles.statValue}>
      {count}{suffix}
    </span>
  );
};

export const Stats = () => {
  const stats = portfolioData.statistics;

  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={styles.statsGrid}>
          {stats.map((stat, idx) => (
            <div key={idx} className={styles.statCard} data-aos="fade-up" data-aos-delay={idx * 100}>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Stats;
