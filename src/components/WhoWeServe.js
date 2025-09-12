import "../styles/WhoWeServe.css";
import { getPublicAssetUrl } from '../utils/assetHelper';
import { Link } from 'react-router-dom';

const WHO_WE_SERVE = [
  {
    image: getPublicAssetUrl('images/Private_Practices.jpg'),
    title: <strong>Private Practices</strong>,
    desc: "Deliver continuous patient monitoring and seamless EHR integration from one centralized platform",
    link: "/who-we-help/private-practices"
  },
  {
    image: getPublicAssetUrl('images/Insurance.jpg'),
    title: <strong>Insurance Groups</strong>,
    desc: "Enhance member care management and reduce healthcare costs through proactive monitoring and intervention strategies.",
    link: "/who-we-help/insurance-groups"
  },
  {
    image: getPublicAssetUrl('images/Hospital.jpg'),
    title: <strong>Hospitals</strong>,
    desc: "Enable real-time insights and streamline chronic care management for improved patient outcomes.",
    link: "/who-we-help/hospitals"
  },
  {
    image: getPublicAssetUrl('images/Third_Party.jpg'),
    title: <strong>Third Party Administrator</strong>,
    desc: "Streamline healthcare administration and improve care coordination with our integrated platform solutions.",
    link: "/who-we-help/third-party-administrator"
  },
  {
    image: getPublicAssetUrl('images/Case_Management.jpg'),
    title: <strong>Case Management Groups</strong>,
    desc: "Optimize patient care coordination and improve outcomes with our comprehensive case management tools.",
    link: "/who-we-help/case-management-groups"
  }
];

export default function WhoWeServe() {
  return (
    <section className="who-we-serve-section">
      <h2 className="who-we-serve-title">Who We Serve</h2>
      <div className="who-we-serve-grid">
        {WHO_WE_SERVE.map((item, idx) => (
          <div className="who-we-serve-card" key={idx}>
            <div className="who-we-serve-image-container">
              <img src={item.image} alt={item.title} className="who-we-serve-image" />
            </div>
            <div className="who-we-serve-content">
              <h3 className="who-we-serve-heading">{item.title}</h3>
              <p className="who-we-serve-description">{item.desc}</p>
              <Link className="who-we-serve-btn" to={item.link}>
                Learn more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}