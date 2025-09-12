import '../WhoWeHelp/Insurance.css';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import InsuranceHero from "../WhoWeHelp/WWHImages/Insurance.jpg";// Replace with your actual image path
import ImproveCashflowImg from "../WhoWeHelp/WWHImages/revenue.jpg";
import HowItWorksImg1 from "../WhoWeHelp/WWHImages/how1.jpg";
import HowItWorksImg2 from "../WhoWeHelp/WWHImages/how2.jpg";
import HowItWorksImg3 from "../WhoWeHelp/WWHImages/how3.jpg";
import TestimonialPhoto from "../WhoWeHelp/WWHImages/Doctor.jpg"; // Replace with your actual image path

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
  <section className="Insurance-howitworks">
    <h2 className="Insurance-howitworks-title"><b>How It Works</b></h2>
    <p className="Insurance-howitworks-subtitle">
      Our process is simple, seamless, and designed to fit your workflow. Here’s how we help your hospital deliver better care with less effort.
    </p>
    <div className="Insurance-howitworks-cards">
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
  <section className="Insurance-testimonial-section">
    <div className="Insurance-testimonial-container">
      <div className="Insurance-testimonial-left">
        <div className="Insurance-testimonial-label">TESTIMONIAL</div>
        <blockquote className="Insurance-testimonial-quote">
          <b>Chronic Care Bridge platform allowed us to increase our quality measure scores and reduced patient readmits, resulting in a decrease in overall spending.</b>
        </blockquote>
        <div className="Insurance-testimonial-person" style={{ alignItems: 'center', textAlign: 'center', width: '100%' }}>
          <span className="Insurance-testimonial-person-name">- Dr. Patricia Janki, MD.,PA<br/>Ecare Medical Group</span><br />
        </div>
      </div>
      <div className="Insurance-testimonial-right">
        <img src={TestimonialPhoto} alt="Testimonial" className="Insurance-testimonial-photo" />
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
  <section className="Insurance-whyitmatters">
    <h2 className="Insurance-whyitmatters-title"><b>Why it Matters</b></h2>
    <WhyItMattersAccordion />
  </section>
);

const whyUsTextBlocks = [
  {
    heading: <b>Preventative Care at Scale</b>,
    text: "Identify high-risk patients early and engage them in structured, reimbursable care programs—improving outcomes while controlling costs."
  },
  {
    heading: <b>Claims & Risk Insights</b>,
    text: "Track the real-world impact of chronic care on hospitalization rates, ER usage, and adherence with detailed population health analytics and custom reports."
  },
  {
    heading: <b>Member Engagement Tools</b>,
    text: "SMS reminders, virtual check-ins, and remote monitoring keep members on track and reduce the need for costly interventions or follow-up calls"
  }
];

const WhyUsSection = () => (
  <section className="Insurance-whyus">
    <div className="Insurance-whyus-header">
      <h2 className="Insurance-whyus-title"><b>Why Us</b></h2>
      <p className="Insurance-whyus-subtitle">
        Whether you're building a chronic care program from scratch or expanding an existing one,<br />Chronic Care Bridge offers flexible solutions tailored to fit organizations of every size and setting.
      </p>
    </div>
    <div className="Insurance-whyus-row-redesign">
      <div className="Insurance-whyus-imgcol">
        <img src={ImproveCashflowImg} alt="Why Us" className="Insurance-whyus-img-main" />
      </div>
      <div className="Insurance-whyus-textcol">
        {whyUsTextBlocks.map((block, idx) => (
          <div className="Insurance-whyus-textbox" key={idx}>
            <div className="Insurance-whyus-textbox-heading">{block.heading}</div>
            <div className="Insurance-whyus-textbox-desc">{block.text}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Insurance = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="Insurance-hero-redesign">
        <div className="Insurance-hero-bg" style={{backgroundImage: `url(${InsuranceHero})`}}>
          <div className="Insurance-hero-bg-overlay">
            <h1 className="Insurance-hero-title-redesign">Insurance Groups</h1>
          </div>
        </div>
        <div className="Insurance-hero-content-redesign">
          <h2 className="Insurance-hero-subtitle-redesign"><b>Smarter Care. <br/>Stronger Returns.</b></h2>
          <p className="Insurance-hero-desc-redesign">
            Our platform helps insurance groups improve population health with scalable remote monitoring and proactive engagement reducing utilization, boosting member satisfaction, and supporting value-based care.
          </p>
          <button className="Insurance-hero-btn-redesign" onClick={() => navigate('/contact')}>
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

export default Insurance;