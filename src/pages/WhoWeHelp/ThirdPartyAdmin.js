import '../WhoWeHelp/ThirdPartyAdmin.css';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import ThirdPartyAdminHero from "../WhoWeHelp/WWHImages/TPA.jpg";// Replace with your actual image path
import ImproveCashflowImg from "../WhoWeHelp/WWHImages/Increase.jpg";
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
  <section className="ThirdPartyAdmin-howitworks">
    <h2 className="ThirdPartyAdmin-howitworks-title"><b>How It Works</b></h2>
    <p className="ThirdPartyAdmin-howitworks-subtitle">
      Our process is simple, seamless, and designed to fit your workflow. Here’s how we help your hospital deliver better care with less effort.
    </p>
    <div className="ThirdPartyAdmin-howitworks-cards">
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
  <section className="third-testimonial-section">
    <div className="third-testimonial-container">
      <div className="third-testimonial-left">
        <div className="third-testimonial-label">TESTIMONIAL</div>
        <blockquote className="third-testimonial-quote">
          <b>Chronic Care Bridge platform allowed us to increase our quality measure scores and reduced Third Party readmits, resulting in a decrease in overall spending.</b>
        </blockquote>
        <div className="third-testimonial-person" style={{ alignItems: 'center', textAlign: 'center', width: '100%' }}>
          <span className="third-testimonial-person-name">- Dr. Patricia Janki, MD.,PA<br/>Ecare Medical Group</span><br />
        </div>
      </div>
      <div className="third-testimonial-right">
        <img src={TestimonialPhoto} alt="Testimonial" className="third-testimonial-photo" />
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
  <section className="ThirdPartyAdmin-whyitmatters">
    <h2 className="ThirdPartyAdmin-whyitmatters-title"><b>Why it Matters</b></h2>
    <WhyItMattersAccordion />
  </section>
);

const whyUsTextBlocks = [
  {
    heading: <b>Turnkey Chronic Care Services</b>,
    text: "Offer a white-label solution that’s fully staffed and managed,helping you expand your services without hiring clinical teams or building tech from scratch."
  },
  {
    heading: <b>Boosted Employer Value</b>,
    text: "Enhance your client offerings with measurable improvements in employee health, fewer sick days, and reduced plan utilization over time."
  },
  {
    heading: <b> Built-In Compliance</b>,
    text: "Every touchpoint is logged and audit-ready, ensuring seamless compliance with CMS requirements and employer reporting needs."
  }
];

const WhyUsSection = () => (
  <section className="ThirdPartyAdmin-whyus">
    <div className="ThirdPartyAdmin-whyus-header">
      <h2 className="ThirdPartyAdmin-whyus-title"><b>Why Us</b></h2>
      <p className="ThirdPartyAdmin-whyus-subtitle">
        Whether you're building a chronic care program from scratch or expanding an existing one,<br />Chronic Care Bridge offers flexible solutions tailored to fit organizations of every size and setting.
      </p>
    </div>
    <div className="ThirdPartyAdmin-whyus-row-redesign">
      <div className="ThirdPartyAdmin-whyus-imgcol">
        <img src={ImproveCashflowImg} alt="Why Us" className="ThirdPartyAdmin-whyus-img-main" />
      </div>
      <div className="ThirdPartyAdmin-whyus-textcol">
        {whyUsTextBlocks.map((block, idx) => (
          <div className="ThirdPartyAdmin-whyus-textbox" key={idx}>
            <div className="ThirdPartyAdmin-whyus-textbox-heading">{block.heading}</div>
            <div className="ThirdPartyAdmin-whyus-textbox-desc">{block.text}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ThirdPartyAdmin = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="ThirdPartyAdmin-hero-redesign">
        <div className="ThirdPartyAdmin-hero-bg" style={{backgroundImage: `url(${ThirdPartyAdminHero})`}}>
          <div className="ThirdPartyAdmin-hero-bg-overlay">
            <h1 className="ThirdPartyAdmin-hero-title-redesign">ThirdPartyAdmin Groups</h1>
          </div>
        </div>
        <div className="ThirdPartyAdmin-hero-content-redesign">
          <h2 className="ThirdPartyAdmin-hero-subtitle-redesign"><b>Streamlined Chronic Care, Delivered</b></h2>
          <p className="ThirdPartyAdmin-hero-desc-redesign">
            Deliver more value to your clients with turnkey chronic care programs. Our platform empowers TPAs to offer fully managed services including billing, compliance, and outcome tracking, designed to drive measurable impact for employer groups.
          </p>
          <button className="ThirdPartyAdmin-hero-btn-redesign" onClick={() => navigate('/contact')}>
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

export default ThirdPartyAdmin;