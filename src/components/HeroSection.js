// src/components/HeroSection.js
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/HeroSection.css';
import { getPublicAssetUrl } from '../utils/assetHelper';

function HeroSection() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className="hero-section">
      {/* Background Video */}
      <video
        className="hero-video"
        src={getPublicAssetUrl('Video1.mp4')}
        autoPlay
        loop
        muted
        playsInline
        controls={false}
      />

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        >
          Improve Health Outcomes
          <br />
          And Increase Revenue
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        >
          Our Chronic Care Management and Remote Patient Monitoring solutions
          help you increase patient engagement, improve health outcomes,
          and drive new revenue for your business.
        </motion.p>
        <button
          className="hero-cta"
          onClick={() => {
            const el = document.getElementById("contact");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Schedule Demo
        </button>
      </div>
    </section>
  );
}

export default HeroSection;