import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { FaAward } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';
import styles from './Certifications.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const Certifications = () => {
  const certifications = portfolioData.certifications;

  return (
    <section id="certifications" className={`${styles.certificationsSection} section`}>
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Certifications</h2>

        <div className={styles.sliderContainer} data-aos="fade-up">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 25 },
              1024: { slidesPerView: 3, spaceBetween: 30 }
            }}
            className="mySwiper"
          >
            {certifications.map((cert, idx) => (
              <SwiperSlide key={idx} style={{ height: 'auto' }}>
                <div className={styles.certCard}>
                  <div className={styles.certIcon}>
                    <FaAward />
                  </div>
                  <h3 className={styles.certTitle}>{cert.title}</h3>
                  <div className={styles.certOrg}>{cert.organization}</div>
                  <span className={styles.certDate}>Issued: {cert.date}</span>
                  
                  <a 
                    href={cert.credentialLink} 
                    className={`${styles.certLink} glow-btn`}
                    style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
                  >
                    View Credential
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Certifications;
