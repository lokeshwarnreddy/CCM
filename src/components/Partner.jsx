import React from 'react';
import '../styles/Partner.css';

import Icon1 from '../components/images/personal support icon.png';
import Icon2 from '../components/images/simple integration icon.png';
import Icon3 from '../components/images/new revenue.png';
import Icon4 from '../components/images/proactive care.png';
const PARTNER_FEATURES = [
  {
    icon: <img src={Icon1} alt="Personalized Support" className="partner-img-icon" />,
    title: "Personalized Support",
    desc: "Dedicated care team committed to providing exceptional support for your patients and practice."
  },
  {
    icon: <img src={Icon2} alt="Simple Integration" className="partner-img-icon" />,
    title: "Simple Integration",
    desc: "Our flexible platform seamlessly integrates with your EHR always keeping you in the loop."
  },
  {
    icon: <img src={Icon3} alt="New Revenue" className="partner-img-icon" />,
    title: "New Revenue",
    desc: "We unlock new revenue stream for your practice with no additional overhead or costs to you."
  },
  {
    icon: <img src={Icon4} alt="Proactive Care" className="partner-img-icon" />,
    title: "Proactive Care",
    desc: "Reduced hospital readmissions by proactively managing care and lowering emergency room visits"
  }
];

const Partner = () => (
  <section className="partner-section" aria-labelledby="partner-title">
    <div className="partner-container">
      <h2 id="partner-title" className="partner-title">
        A Partner You Can Rely On
      </h2>
      <div className="partner-features">
        {PARTNER_FEATURES.map((feature, idx) => (
          <div className="partner-feature" key={idx}>
            <div className="partner-icon">{feature.icon}</div>
            <h3 className="partner-feature-title">{feature.title}</h3>
            <p className="partner-feature-desc">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Partner;