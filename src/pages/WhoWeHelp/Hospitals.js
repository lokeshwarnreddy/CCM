import '../WhoWeHelp/hospital.css';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import HospitalHero from "../WhoWeHelp/WWHImages/Hospital.jpg";
import ImproveCashflowImg from "../WhoWeHelp/WWHImages/Hospital-WhyUs.jpg";
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
  <section className="hospital-howitworks">
    <h2 className="hospital-howitworks-title"><b>How It Works</b></h2>
    <p className="hospital-howitworks-subtitle">
      Our process is simple, seamless, and designed to fit your workflow. Here’s how we help your hospital deliver better care with less effort.
    </p>
    <div className="hospital-howitworks-cards">
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
  <section className="hospital-testimonial-section">
    <div className="hospital-testimonial-container">
      <div className="hospital-testimonial-left">
        <div className="hospital-testimonial-label">TESTIMONIAL</div>
        <blockquote className="hospital-testimonial-quote">
          <b>Chronic Care Bridge platform allowed us to increase our quality measure scores and reduced hospital readmits, resulting in a decrease in overall spending.</b>
        </blockquote>
        <div className="hospital-testimonial-person" style={{ alignItems: 'center', textAlign: 'center', width: '100%' }}>
          <span className="hospital-testimonial-person-name">- Dr. Patricia Janki, MD.,PA<br/>Ecare Medical Group</span><br />
        </div>
      </div>
      <div className="hospital-testimonial-right">
        <img src={TestimonialPhoto} alt="Testimonial" className="hospital-testimonial-photo" />
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
  <section className="hospital-whyitmatters">
    <h2 className="hospital-whyitmatters-title"><b>Why it Matters</b></h2>
    <WhyItMattersAccordion />
  </section>
);

const whyUsTextBlocks = [
  {
    heading: <b>Reduced readmissions</b>,
    text: "Our platform helps your teams manage post-discharge care more effectively, leading to fewer avoidable readmissions and better patient outcomes—critical for value-based care models."
  },
  {
    heading: <b>Seamless integration</b>,
    text: "Integrates with your existing EHR and care management systems, automatically triggering follow-ups, RPM setup, and care plan updates without extra training or steps. "
  },
  {
    heading: <b>Data-Driven<br />Care Coordination</b>,
    text: "Clinical teams can access dashboards that highlight deteriorating trends, prioritize patient needs, and manage large caseloads efficiently through automated workflows."
  }
];

const WhyUsSection = () => (
  <section className="hospital-whyus">
    <div className="hospital-whyus-header">
      <h2 className="hospital-whyus-title"><b>Why Us</b></h2>
      <p className="hospital-whyus-subtitle">
        Whether you're building a chronic care program from scratch or expanding an existing one,<br />Chronic Care Bridge offers flexible solutions tailored to fit organizations of every size and setting.
      </p>
    </div>
    <div className="hospital-whyus-row-redesign">
      <div className="hospital-whyus-imgcol">
        <img src={ImproveCashflowImg} alt="Why Us" className="hospital-whyus-img-main" />
      </div>
      <div className="hospital-whyus-textcol">
        {whyUsTextBlocks.map((block, idx) => (
          <div className="hospital-whyus-textbox" key={idx}>
            <div className="hospital-whyus-textbox-heading">{block.heading}</div>
            <div className="hospital-whyus-textbox-desc">{block.text}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Hospitals = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);    return (
  <>
    <section className="hospital-hero-redesign">
      <div className="hospital-hero-bg" style={{backgroundImage: `url(${HospitalHero})`}}>
        <div className="hospital-hero-bg-overlay">
          <h1 className="hospital-hero-title-redesign">Hospitals</h1>
        </div>
      </div>
      <div className="hospital-hero-content-redesign">
        <h2 className="hospital-hero-subtitle-redesign"><b>Extend Your Reach Reduce Readmissions</b></h2>
        <p className="hospital-hero-desc-redesign">
          Our platform supports hospitals in delivering continuous care after discharge.<br />With automated monitoring, real-time alerts, and staff-assisted care plans, you can improve outcomes<br/>without increasing workload.
        </p>
        <button className="hospital-hero-btn-redesign" onClick={() => navigate('/contact')}>
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

export default Hospitals;