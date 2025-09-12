import '../WhoWeHelp/CaseManagementGroups.css';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import CaseManagementGroupsHero from "../WhoWeHelp/WWHImages/CaseManagement.jpg";
import ImproveCashflowImg from "../WhoWeHelp/WWHImages/Staff.jpg";
import HowItWorksImg1 from "../WhoWeHelp/WWHImages/how1.jpg";
import HowItWorksImg2 from "../WhoWeHelp/WWHImages/how2.jpg";
import HowItWorksImg3 from "../WhoWeHelp/WWHImages/how3.jpg";
import TestimonialPhoto from "../WhoWeHelp/WWHImages/Doctor.jpg";

const howItWorksSteps = [
  {
    number: 1,
    heading: <b>Book a personalized demo</b>,
    subheading: "See how Chronic Care Bridge fits your workflow. We’ll walk you through the features and help you choose the right care program for your needs.",
    img: HowItWorksImg1,
    imgAlt: "Enroll Patients"
  },
  {
    number: 2,
    heading: <b> Onboard with expert guidance</b>,
    subheading: "Our team will set you up quickly and train your staff so they feel confident managing care using our platform from day one",
    img: HowItWorksImg2,
    imgAlt: "Automate Care"
  },
  {
    number: 3,
    heading: <b>Deliver better care, consistently</b>,
    subheading: "Launch high-impact chronic care programs that engage patients, reduce ER visits, and help your organization thrive under value-based care.",
    img: HowItWorksImg3,
    imgAlt: "Track Outcomes"
  }
];

const HowItWorksSection = () => (
  <section className="CaseManagementGroups-howitworks">
    <h2 className="CaseManagementGroups-howitworks-title"><b>How It Works</b></h2>
    <p className="CaseManagementGroups-howitworks-subtitle">
      Our process is simple, seamless, and designed to fit your workflow. Here’s how we help your hospital deliver better care with less effort.
    </p>
    <div className="CaseManagementGroups-howitworks-cards">
      {howItWorksSteps.map((step, idx) => (
        <div className="howitworks-flip-card" key={idx}>
          <div className="howitworks-flip-card-inner">
            <div className="howitworks-flip-card-front">
              <div className="howitworks-step-number">{step.number}</div>
              <h3 className="howitworks-step-heading">{step.heading}</h3>
              <p className="howitworks-step-subheading">{step.subheading}</p>
            </div>
            <div className="howitworks-flip-card-back">
              <img src={step.img} alt={step.imgAlt} />
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const TestimonialSection = () => (
  <section className="case-testimonial-section">
    <div className="case-testimonial-container">
      <div className="case-testimonial-left">
        <div className="case-testimonial-label">TESTIMONIAL</div>
        <blockquote className="case-testimonial-quote">
          <b>Chronic Care Bridge platform allowed us to increase our quality measure scores and reduced case readmits, resulting in a decrease in overall spending.</b>
        </blockquote>
        <div className="case-testimonial-person" style={{ alignItems: 'center', textAlign: 'center', width: '100%' }}>
          <span className="case-testimonial-person-name">- Dr. Patricia Janki, MD.,PA<br/>Ecare Medical Group</span><br />
        </div>
      </div>
      <div className="case-testimonial-right">
        <img src={TestimonialPhoto} alt="Testimonial" className="case-testimonial-photo" />
      </div>
    </div>
  </section>
);

const WhyItMattersAccordion = () => {
  const items = [
    {
      title: "Clinical Excellence",
      content: "Better control of chronic conditions through proactive, continuous care. We help you manage complex patient needs with precision and compassion."
    },
    {
      title: "New Revenue Streams",
      content: "Maximize reimbursable services with compliant, automated billing. Expand your revenue without increasing administrative burden."
    },
    {
      title: "EHR and Workflow Integration",
      content: "Designed to fit into your existing staff and tech stack, not replace it. We integrate seamlessly with your EHR and care management systems, automating workflows to reduce manual tasks and errors."
    },
    {
      title: "ROI Measument",
      content: "From readmission reduction and claims recapture to population health improvements and contract performance. We provide the data you need to prove value and drive growth."
    }
  ];
  const [openIdx, setOpenIdx] = React.useState(0);

  return (
    <div className="whyitmatters-accordion">
      {items.map((item, idx) => (
        <div
          key={item.title}
          className={`whyitmatters-accordion-item${openIdx === idx ? " open" : ""}`}
          onMouseEnter={() => setOpenIdx(idx)}
        >
          <button
            className="whyitmatters-accordion-title"
            onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
            aria-expanded={openIdx === idx}
            type="button"
          >
            <span className={openIdx === idx ? "active" : ""}>{item.title}</span>
            <span className="whyitmatters-accordion-icon">
              {openIdx === idx ? "−" : "+"}
            </span>
          </button>
          {openIdx === idx && (
            <div className="whyitmatters-accordion-content">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const WhyItMattersSection = () => (
  <section className="CaseManagementGroups-whyitmatters">
    <h2 className="CaseManagementGroups-whyitmatters-title"><b>Why it Matters</b></h2>
    <WhyItMattersAccordion />
  </section>
);

const whyUsTextBlocks = [
  {
    heading: <b>Centralized Patient Oversight</b>,
    text: "One dashboard brings together vitals, care notes, and engagement metrics—giving your team a real-time view of patient health status and next steps."
  },
  {
    heading: <b>Staff Efficiency</b>,
    text: "Automated alerts, time tracking, and scheduling tools eliminate manual work, allowing your team to focus on clinical impact rather than paperwork. "
  },
  {
    heading: <b>Better Patient Retention</b>,
    text: "Consistent outreach and two-way communication channels build trust, reduce appointment no-shows, and keep patients engaged throughout their care journey."
  }
];

const WhyUsSection = () => (
  <section className="CaseManagementGroups-whyus">
    <div className="CaseManagementGroups-whyus-header">
      <h2 className="CaseManagementGroups-whyus-title"><b>Why Us</b></h2>
      <p className="CaseManagementGroups-whyus-subtitle">
        Whether you're building a chronic care program from scratch or expanding an existing one,<br />Chronic Care Bridge offers flexible solutions tailored to fit organizations of every size and setting.
      </p>
    </div>
    <div className="CaseManagementGroups-whyus-row-redesign">
      <div className="CaseManagementGroups-whyus-imgcol">
        <img src={ImproveCashflowImg} alt="Why Us" className="CaseManagementGroups-whyus-img-main" />
      </div>
      <div className="CaseManagementGroups-whyus-textcol">
        {whyUsTextBlocks.map((block, idx) => (
          <div className="CaseManagementGroups-whyus-textbox" key={idx}>
            <div className="CaseManagementGroups-whyus-textbox-heading">{block.heading}</div>
            <div className="CaseManagementGroups-whyus-textbox-desc">{block.text}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CaseManagementGroups = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="CaseManagementGroups-hero-redesign">
        <div className="CaseManagementGroups-hero-bg" style={{backgroundImage: `url(${CaseManagementGroupsHero})`}}>
          <div className="CaseManagementGroups-hero-bg-overlay">
            <h1 className="CaseManagementGroups-hero-title-redesign">Case Management Groups</h1>
          </div>
        </div>
        <div className="CaseManagementGroups-hero-content-redesign">
          <h2 className="CaseManagementGroups-hero-subtitle-redesign"><b>Simplify workflows, Amplify impact</b></h2>
          <p className="CaseManagementGroups-hero-desc-redesign">
            Simplify care coordination with a centralized system for vitals tracking, patient communication, and structured follow-ups.  More efficient care quality while reducing manual work and patient no-shows.
          </p>
          <button className="CaseManagementGroups-hero-btn-redesign" onClick={() => navigate('/contact')}>
            Book a Demo
          </button>
        </div>
      </section>
      {/* Why Us Section */}
      <WhyUsSection />
      <HowItWorksSection />
      <TestimonialSection />
      <WhyItMattersSection />
    </>
  );
};

export default CaseManagementGroups;