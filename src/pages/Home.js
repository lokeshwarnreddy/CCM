import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import Partner from '../components/Partner';
import CCMFeatures from '../components/CCMFeatures';
import WhoWeServe from '../components/WhoWeServe';


const Home = () => {
  return (
    <div>
      <HeroSection />
      <Partner />
      <ServicesSection />
      <WhoWeServe />
      <CCMFeatures />
      <ContactSection />
      <footer />
    </div>
  );
};

export default Home;