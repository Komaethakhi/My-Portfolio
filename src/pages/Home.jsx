import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import all sections
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Stats from '../components/About/Stats';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Experience from '../components/Experience/Experience';
import Education from '../components/Education/Education';
import Certifications from '../components/Certifications/Certifications';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

export const Home = () => {
  // Initialize Animate On Scroll (AOS)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 80
    });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
};
export default Home;
