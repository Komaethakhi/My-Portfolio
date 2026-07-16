import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';
import styles from './Contact.module.css';

export const Contact = () => {
  const { email, phone, location, socialLinks } = portfolioData.personalInfo;

  // Form States
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Field change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Validation rules
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 4) {
      newErrors.subject = 'Subject must be at least 4 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Mock submit (can connect to Formspree, Web3Forms, or custom backend later)
      console.log('Form data submitted:', formData);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      // Clear success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact" className={`${styles.contactSection} section`}>
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Get In Touch</h2>

        <div className={styles.contactGrid}>
          {/* Left Info Panel */}
          <div className={styles.contactInfo} data-aos="fade-right">
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <FaEnvelope />
              </div>
              <div className={styles.infoContent}>
                <span className={styles.infoTitle}>Email</span>
                <span className={styles.infoVal}>{email}</span>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <FaPhoneAlt />
              </div>
              <div className={styles.infoContent}>
                <span className={styles.infoTitle}>Phone</span>
                <span className={styles.infoVal}>{phone}</span>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <FaMapMarkerAlt />
              </div>
              <div className={styles.infoContent}>
                <span className={styles.infoTitle}>Location</span>
                <span className={styles.infoVal}>{location}</span>
              </div>
            </div>

            {/* Social media Links */}
            <div className={styles.socialContainer}>
              <h3 className={styles.socialTitle}>Connect with me</h3>
              <div className={styles.socialIcons}>
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub Account">
                  <FaGithub />
                </a>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn Account">
                  <FaLinkedin />
                </a>
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram Account">
                  <FaInstagram />
                </a>
                <a href={socialLinks.email} className={styles.socialLink} aria-label="Send Email">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>

          {/* Right Input Form */}
          <div className={styles.contactFormWrapper} data-aos="fade-left">
            {isSubmitted && (
              <div className={styles.successText}>
                Thank you! Your message has been sent successfully. I will get back to you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className={styles.formGroup}>
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`${styles.inputField} ${errors.name ? styles.errorBorder : ''}`}
                  placeholder="John Doe"
                />
                {errors.name && <span className={styles.errorText}>{errors.name}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${styles.inputField} ${errors.email ? styles.errorBorder : ''}`}
                  placeholder="john@example.com"
                />
                {errors.email && <span className={styles.errorText}>{errors.email}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`${styles.inputField} ${errors.subject ? styles.errorBorder : ''}`}
                  placeholder="Inquiry about full-stack opportunity"
                />
                {errors.subject && <span className={styles.errorText}>{errors.subject}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`${styles.textArea} ${errors.message ? styles.errorBorder : ''}`}
                  placeholder="Hi Komaethakhi, I would love to talk about..."
                />
                {errors.message && <span className={styles.errorText}>{errors.message}</span>}
              </div>

              <button type="submit" className="glow-btn-accent" style={{ width: '100%', justifyContent: 'center' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
