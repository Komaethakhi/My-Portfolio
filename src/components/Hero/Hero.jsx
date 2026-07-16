import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaReact, FaNodeJs, FaChevronDown, FaDownload, FaEye } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { portfolioData } from '../../data/portfolioData';
import styles from './Hero.module.css';

export const Hero = () => {
  const { name, titles, introduction, resumeUrl } = portfolioData.personalInfo;
  const canvasRef = useRef(null);

  // HTML5 Canvas Particle Background Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    const maxParticles = 60;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Particle constructor
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2 + 1;
        this.color = 'rgba(0, 173, 181, ' + (Math.random() * 0.3 + 0.1) + ')';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce on boundaries
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Populate particles
    for (let i = 0; i < maxParticles; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw links between nearby particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update();
        p1.draw();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 173, 181, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleScrollDown = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = nextSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Type Animation Sequence definition
  const sequence = [];
  titles.forEach((title) => {
    sequence.push(title);
    sequence.push(2000); // delay in milliseconds
  });

  return (
    <section id="home" className={styles.heroSection}>
      {/* Interactive Background */}
      <canvas ref={canvasRef} className={styles.canvasBg} />

      <div className={`${styles.heroContainer} container`}>
        {/* Left Side: Developer Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.heroContent}
        >
          <span className={styles.welcomeText}>Welcome to my space</span>
          <h1 className={styles.name}>
            Hi, I'm <span className="text-gradient">{name}</span>
          </h1>

          <div className={styles.typewriter}>
            <TypeAnimation
              sequence={sequence}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className={styles.intro}>{introduction}</p>

          <div className={styles.ctaGroup}>
            <a href="#projects" className="glow-btn-accent" onClick={(e) => {
              e.preventDefault();
              handleScrollDown();
            }}>
              Explore Projects
            </a>
            <a href="#contact" className="glow-btn" onClick={(e) => {
              e.preventDefault();
              const contactSec = document.getElementById('contact');
              if (contactSec) {
                contactSec.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
              Contact Me
            </a>
            <a 
              href={resumeUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="glow-btn"
              style={{ border: '2px solid var(--accent-color)' }}
            >
              <FaEye /> View Resume
            </a>
            <a 
              href={resumeUrl} 
              download 
              className="glow-btn"
              style={{ border: '2px solid var(--accent-color)' }}
            >
              <FaDownload /> Resume
            </a>
          </div>
        </motion.div>

        {/* Right Side: Visual Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.heroVisual}
        >
          <div className={styles.avatarWrapper}>
            <div className={styles.avatar}>
              {/* Premium Developer Vector SVG */}
              <svg
                width="80%"
                height="80%"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="svgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00ADB5" />
                    <stop offset="100%" stopColor="#393E46" />
                  </linearGradient>
                  <filter id="svgGlow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                {/* Desk/Background Screen */}
                <rect x="30" y="30" width="140" height="100" rx="10" fill="#1A2238" stroke="url(#svgGrad)" strokeWidth="4" />
                <rect x="40" y="40" width="120" height="80" rx="5" fill="#0D1324" />
                
                {/* Floating Code Lines on Screen */}
                <line x1="50" y1="55" x2="80" y2="55" stroke="#00ADB5" strokeWidth="3" strokeLinecap="round" />
                <line x1="50" y1="65" x2="105" y2="65" stroke="#A0AEC0" strokeWidth="3" strokeLinecap="round" />
                <line x1="50" y1="75" x2="95" y2="75" stroke="#FFB703" strokeWidth="3" strokeLinecap="round" />
                <line x1="50" y1="85" x2="70" y2="85" stroke="#00ADB5" strokeWidth="3" strokeLinecap="round" />
                <line x1="50" y1="95" x2="110" y2="95" stroke="#A0AEC0" strokeWidth="3" strokeLinecap="round" />

                {/* Keyboard & Mouse Pad */}
                <rect x="55" y="145" width="90" height="8" rx="2" fill="#393E46" />
                <rect x="70" y="148" width="60" height="2" fill="#00ADB5" />
                
                {/* Laptop Stand */}
                <path d="M90 130 L80 150 L120 150 L110 130 Z" fill="#393E46" stroke="url(#svgGrad)" strokeWidth="2" />
                
                {/* Glowing Core / Processor Graphic */}
                <circle cx="100" cy="80" r="15" fill="#0D1324" stroke="#00ADB5" strokeWidth="2" filter="url(#svgGlow)" />
                <path d="M100 65 L100 95 M85 80 L115 80" stroke="#00ADB5" strokeWidth="2" opacity="0.8" />
                <circle cx="100" cy="80" r="6" fill="#FFB703" />
              </svg>
            </div>
          </div>

          {/* Floating Badges */}
          <div className={`${styles.floatingTag} ${styles.tagReact}`}>
            <FaReact color="#61DAFB" /> React JS
          </div>
          <div className={`${styles.floatingTag} ${styles.tagNode}`}>
            <FaNodeJs color="#339933" /> Node.js
          </div>
          <div className={`${styles.floatingTag} ${styles.tagMongo}`}>
            <SiMongodb color="#47A248" /> MongoDB
          </div>
        </motion.div>
      </div>

      {/* Bounce scroll-down indicator */}
      <div className={styles.scrollIndicator} onClick={handleScrollDown}>
        <span className={styles.scrollText}>Scroll Down</span>
        <div className={styles.mouse}>
          <div className={styles.wheel} />
        </div>
        <FaChevronDown color="var(--primary-color)" />
      </div>
    </section>
  );
};
export default Hero;
