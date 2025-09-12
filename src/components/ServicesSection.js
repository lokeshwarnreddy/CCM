import { Link } from 'react-router-dom';
import '../styles/ServicesSection.css';

// Import images directly
import ccmImage from '../assets/images/Chronic_Care.jpg';
import caseImage from '../assets/images/Case_Management.jpg';
import behavioralImage from '../assets/images/Behavioral_Health.jpg';
import rpmImage from '../assets/images/Remote.jpg';

const services = [
  {
    title: <strong>Chronic Care Management</strong>,
    description: "Our CCM program enhances your practice with EHR-integrated technology and dedicated professionals, providing exceptional patient care.",
    image: ccmImage,
    link: "/services/chronic-care-management",
    modalContent: "Our Chronic Care Management (CCM) program is designed to provide comprehensive, continuous care for patients with multiple chronic conditions. Through regular check-ins, medication management, and care coordination, we help improve patient outcomes while generating additional revenue for your practice."
  },
  {
    title: <strong>Case Management</strong>,
    description: "Medical Case Management services coordinate and optimize patient care, collaborating with patients, families, and providers to create personalized plans that help improve health outcomes and quality of life.",
    image: caseImage,
    link: "/services/case-management",
    modalContent: "Our Case Management services provide comprehensive care coordination for complex medical cases. We work closely with healthcare providers, patients, and their families to develop and implement personalized care plans that optimize health outcomes and improve quality of life."
  },
  {
    title: <strong>Behavioral Health</strong>,
    description: "Our team delivers tailored care, support, and therapeutic solutions to assist patients in managing mental health challenges, alleviating stress, and reaching their wellness goals.",
    image: behavioralImage,
    link: "/services/behavioral-health",
    modalContent: "Our Behavioral Health services offer comprehensive mental health support and interventions. We provide evidence-based treatments, counseling, and support services to help patients manage their mental health conditions and improve their overall well-being."
  },
  {
    title: <strong>Remote Patient Monitoring</strong>,
    description: "Access RPM services which are designed to track, monitor, and help provide treatment for your patients, enhancing care in the comfort of their homes.",
    image: rpmImage,
    link: "/services/remote-patient-monitoring",
    modalContent: "Our Remote Patient Monitoring (RPM) program uses cutting-edge technology to track vital signs and health metrics in real-time. This allows for early intervention, reduced hospitalizations, and better management of chronic conditions, all while patients remain comfortable at home."
  }
];

const ServicesSection = () => {


  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <p className="services-subtitle">
          Our programs are led by a licensed team of clinicians,<br /> ensuring professional delivery and support.
        </p>
        <div className="services-grid">
          {services.map((service) => (
            <div
              key={service.title}
              className="service-card"
            //   onClick={() => handleCardClick(service)}
            >
              <div className="image-container">
                <img src={service.image} alt={service.title} className="service-image" />
              </div>
              <div className="card-content">
                <h3 className="card-title">{service.title}</h3>
                <p className="card-description">{service.description}</p>
                <Link to={service.link} className="learn-more-btn">Learn More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 