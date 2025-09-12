import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/ServicePageLayout.css';
import ImageWithTextSection from './ImageWithTextSection';

// Animation variants for sections
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const benefitVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

// Carousel Component
const FeatureCarousel = ({ features, rotationDuration = 100 }) => {
  // const controls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Calculate items per view based on screen width
  const getItemsPerView = () => {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Only use valid features (no empty/undefined objects)
  const validFeatures = features.filter(
    (feature) => feature && feature.title && feature.description && feature.icon
  );

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % validFeatures.length);
      }, rotationDuration);
      return () => clearInterval(interval);
    }
  }, [validFeatures.length, isHovered, rotationDuration]);

  // No sliding animation, just show the correct cards in a loop

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % validFeatures.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + validFeatures.length) % validFeatures.length);
  };

  return (
    <div 
      className="features-carousel-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="features-track" style={{ display: 'flex', width: '100%' }}>
        {Array.from({ length: itemsPerView }).map((_, i) => {
          const feature = validFeatures[(currentIndex + i) % validFeatures.length];
          return (
            <div
              className="feature-card"
              key={`${feature.title}-${i}`}
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <div className="feature-icon">
                <FontAwesomeIcon icon={feature.icon} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          );
        })}
      </div>
      <button className="carousel-button prev" onClick={handlePrev}>
        <FontAwesomeIcon icon="chevron-left" />
      </button>
      <button className="carousel-button next" onClick={handleNext}>
        <FontAwesomeIcon icon="chevron-right" />
      </button>
      <div className="carousel-dots">
        {validFeatures.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot ${currentIndex === i ? 'active' : ''}`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

// FAQ Item Component
const FaqItem = ({ faq, index, isOpen, onToggle }) => (
  <motion.div
    className={`faq-item ${isOpen ? 'open' : ''}`}
    custom={index}
    variants={cardVariant}
  >
    <button className="faq-question" onClick={onToggle}>
      <span>{faq.question}</span>
      <span className="faq-icon">{isOpen ? '−' : '+'}</span>
    </button>
    <motion.div
      className="faq-answer-container"
      initial={false}
      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="faq-answer">{faq.answer}</div>
    </motion.div>
  </motion.div>
);

const ServicePageLayout = ({ pageData }) => {
  const { hero, intro, features, benefits, howItWorks, howItWorksImage, faq, cta, sections } = pageData;
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="service-page">
      {/* Hero Section */}
      <motion.section 
        className="service-hero"
        style={pageData.heroImage ? {
          backgroundImage: `url(${pageData.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        } : {}}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <div className="service-hero-overlay" />
        <div className="service-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {hero.headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {hero.subheading}
          </motion.p>
        </div>
      </motion.section>

      {/* Intro Paragraph */}
      <motion.section
        className="service-intro"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <p>{intro}</p>
      </motion.section>

      {/* Optional Sections */}
      {sections && sections.map((section, index) => (
        <ImageWithTextSection
          key={index}
          image={section.image}
          title={section.title}
          imageSide={index % 2 === 0 ? 'left' : 'right'}
        >
          <p>{section.text}</p>
        </ImageWithTextSection>
      ))}

      {/* Key Features Section */}
      <motion.section
        className="service-features"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>Key Features</h2>
        <FeatureCarousel features={features} rotationDuration={3000} />
      </motion.section>
      
      {/* Benefits Section */}
      <motion.section
        className="service-benefits"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="benefits-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Benefits
          </motion.h2>
          <div className="benefits-grid">
            {benefits.map((benefit, i) => (
              <motion.div 
                className={`benefit-card ${i >= 3 ? 'second-row' : ''}`}
                key={benefit.title}
                custom={i}
                variants={benefitVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                  borderColor: "#3949ab"
                }}
              >
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        className="service-how-it-works"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>How It Works</h2>
        <div className="how-it-works-container">
          <div className="how-it-works-image">
            <img src={howItWorksImage} alt="How It Works" />
          </div>
          <div className="timeline">
            {howItWorks.map((step, i) => (
              <motion.div 
                className="timeline-item" 
                key={step.title}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <div className="timeline-number">0{i + 1}</div>
                <div className="timeline-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      {faq && (
        <motion.section
          className="service-faq"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2>Frequently Asked Questions</h2>
          <div className="faq-container">
            {faq.map((item, i) => (
              <FaqItem
                key={i}
                index={i}
                faq={item}
                isOpen={openFaq === i}
                onToggle={() => toggleFaq(i)}
              />
            ))}
          </div>
        </motion.section>
      )}

      {/* CTA Section */}
      <motion.section
        className="service-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <h2>{cta.headline}</h2>
        <div className="cta-buttons">
          <a href="/#/contact" className="cta-button-primary">{cta.buttonText || 'Schedule a Demo'}</a>
          {/* <p>or contact us at {cta.contact}</p> */}
        </div>
      </motion.section>
    </div>
  );
};

export default ServicePageLayout; 