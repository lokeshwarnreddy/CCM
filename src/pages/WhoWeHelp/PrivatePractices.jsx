import '../WhoWeHelp/privatepractices.css';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import privatepracticesHero from "../WhoWeHelp/WWHImages/Hospital_Image.jpg";
import ImproveCashflowImg from "../WhoWeHelp/WWHImages/patient-engagement.jpg";
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
  <section className="privatepractices-howitworks">
    <h2 className="privatepractices-howitworks-title"><b>How It Works</b></h2>
    <p className="privatepractices-howitworks-subtitle">
      Our process is simple, seamless, and designed to fit your workflow. Here’s how we help your hospital deliver better care with less effort.
    </p>
    <div className="privatepractices-howitworks-cards">
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
  <section className="private-testimonial-section">
    <div className="private-testimonial-container">
      <div className="private-testimonial-left">
        <div className="private-testimonial-label">TESTIMONIAL</div>
        <blockquote className="private-testimonial-quote">
          <b>Chronic Care Bridge platform allowed us to increase our quality measure scores and reduced patients readmits, resulting in a decrease in overall spending.</b>
        </blockquote>
        <div className="private-testimonial-person" style={{ alignItems: 'center', textAlign: 'center', width: '100%' }}>
          <span className="private-testimonial-person-name">- Dr. Patricia Janki, MD.,PA<br/>Ecare Medical Group</span><br />
        </div>
      </div>
      <div className="private-testimonial-right">
        <img src={TestimonialPhoto} alt="Testimonial" className="private-testimonial-photo" />
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
  <section className="privatepractices-whyitmatters">
    <h2 className="privatepractices-whyitmatters-title"><b>Why it Matters</b></h2>
    <WhyItMattersAccordion />
  </section>
);

const whyUsTextBlocks = [
  {
    heading: <b>Enhanced Clinical Outcomes</b>,
    text: "Chronic Care Bridge helps reduce ER visits and hospital admissions by improving control of conditions like hypertension, diabetes, and COPD. Our system proactively identifies patient trends and alerts providers early."
  },
  {
    heading: <b>New Revenue Stream</b>,
    text: "We help you unlock Medicare reimbursements for CCM, RPM, and TCM by automating time tracking and billing workflows—generating steady monthly income with minimal disruption."
  },
  {
    heading: <b>Improved Patient Engagement</b>,
    text: "Our virtual tools (calls, texts, remote vitals) ensure patients stay connected and compliant between visits. This improves adherence and satisfaction without burdening your staff."
  }
];

const WhyUsSection = () => (
  <section className="privatepractices-whyus">
    <div className="privatepractices-whyus-header">
      <h2 className="privatepractices-whyus-title"><b>Why Us</b></h2>
      <p className="privatepractices-whyus-subtitle">
        Whether you're building a chronic care program from scratch or expanding an existing one,<br />Chronic Care Bridge offers flexible solutions tailored to fit organizations of every size and setting.
      </p>
    </div>
    <div className="privatepractices-whyus-row-redesign">
      <div className="privatepractices-whyus-imgcol">
        <img src={ImproveCashflowImg} alt="Why Us" className="privatepractices-whyus-img-main" />
      </div>
      <div className="privatepractices-whyus-textcol">
        {whyUsTextBlocks.map((block, idx) => (
          <div className="privatepractices-whyus-textbox" key={idx}>
            <div className="privatepractices-whyus-textbox-heading">{block.heading}</div>
            <div className="privatepractices-whyus-textbox-desc">{block.text}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PrivatePractices = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="privatepractices-hero-redesign">
        <div className="privatepractices-hero-bg" style={{backgroundImage: `url(${privatepracticesHero})`}}>
          <div className="privatepractices-hero-bg-overlay">
            <h1 className="privatepractices-hero-title-redesign">Private Practices</h1>
          </div>
        </div>
        <div className="privatepractices-hero-content-redesign">
          <h2 className="privatepractices-hero-subtitle-redesign"><b>Boost Revenue & Empower Care</b></h2>
          <p className="privatepractices-hero-desc-redesign">
            Chronic Care Bridge helps private clinics deliver value-based care efficiently. By leveraging our staff follow-ups and care coordination, your practice can enhance patient outcomes, reduce hospital visits, and unlock new revenue streams—all while lowering long-term costs.
          </p>
          <button className="privatepractices-hero-btn-redesign" onClick={() => navigate('/contact')}>
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

export default PrivatePractices;