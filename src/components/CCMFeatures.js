import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserNurse,
  faNotesMedical,
  faCalendarCheck,
  faShieldAlt,
  faChartLine,
  faHeadset,
} from '@fortawesome/free-solid-svg-icons';
import '../styles/CCMFeatures.css';

function CCMFeatures() {
  return (
    <section className="ccm-features-section">
      <div className="container">
        <h2 className="ccm-features-title">Why Choose <br/>Our Chronic Care Management?</h2>
        <p className="ccm-features-subtitle">A Secure, Comprehensive & Patient-Centric CCM Platform for Your Practice</p>
        <div className="ccm-features-grid">
          <div className="ccm-feature-card">
            <div className="ccm-feature-icon">
              <FontAwesomeIcon icon={faUserNurse} />
            </div>
            <h3>Dedicated Care Team</h3>
            <p>Our experienced care coordinators provide ongoing support, personalized outreach, and proactive follow-up for every patient.</p>
          </div>
          <div className="ccm-feature-card">
            <div className="ccm-feature-icon">
              <FontAwesomeIcon icon={faNotesMedical} />
            </div>
            <h3>Comprehensive Care Plans</h3>
            <p>Individualized care plans tailored to each patient's needs, ensuring adherence to treatment and improved outcomes.</p>
          </div>
          <div className="ccm-feature-card">
            <div className="ccm-feature-icon">
              <FontAwesomeIcon icon={faCalendarCheck} />
            </div>
            <h3>Monthly Check-Ins</h3>
            <p>Automated reminders and regular monthly touchpoints help patients stay engaged and on track with their care goals.</p>
          </div>
          <div className="ccm-feature-card">
            <div className="ccm-feature-icon">
              <FontAwesomeIcon icon={faShieldAlt} />
            </div>
            <h3>HIPAA-Compliant & Secure</h3>
            <p>All patient data is protected with robust security and privacy protocols, ensuring full HIPAA compliance.</p>
          </div>
          <div className="ccm-feature-card">
            <div className="ccm-feature-icon">
              <FontAwesomeIcon icon={faChartLine} />
            </div>
            <h3>Actionable Reporting</h3>
            <p>Gain insights into patient progress, adherence, and program ROI with real-time analytics and customizable reports.</p>
          </div>
          <div className="ccm-feature-card">
            <div className="ccm-feature-icon">
              <FontAwesomeIcon icon={faHeadset} />
            </div>
            <h3>24/7 Patient Support</h3>
            <p>Patients and providers have access to our support team around the clock for questions, scheduling, and urgent needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CCMFeatures;