import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faCheck } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'; // <-- Added Axios
import '../styles/ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('http://localhost:5000/api/contact', formData); // <- Post to your backend
      alert('Thank you! Your demo request has been submitted.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        message: '',
      });
    } catch (error) {
      console.error('Submission error:', error);
      alert('Oops! Something went wrong. Please try again later.');
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="content-box">
          <h2 className="contact-heading">Schedule a Demo</h2>
          <p className="contact-subheading">
            Experience how our solutions can transform your healthcare practice. 
            Let's discuss how we can help you achieve better patient outcomes.
          </p>
          <ul className="feature-list feature-list-grid">
            <li className="feature-item">
              <span className="check-icon"><FontAwesomeIcon icon={faCheck} /></span>
              Personalized Platform Demo
            </li>
            <li className="feature-item">
              <span className="check-icon"><FontAwesomeIcon icon={faCheck} /></span>
              Expert Q&A Session
            </li>
            <li className="feature-item">
              <span className="check-icon"><FontAwesomeIcon icon={faCheck} /></span>
              Custom Solution Discussion
            </li>
            <li className="feature-item">
              <span className="check-icon"><FontAwesomeIcon icon={faCheck} /></span>
              ROI Analysis
            </li>
          </ul>
          <div className="contact-info contact-info-centered">
            <div className="contact-item">
              <span className="contact-icon"><FontAwesomeIcon icon={faEnvelope} /></span>
              info@chroniccarebridge.com
            </div>
            <div className="contact-item">
              <span className="contact-icon"><FontAwesomeIcon icon={faPhone} /></span>
              +1 (832) 617-6222
            </div>
          </div>
        </div>

        <div className="form-box">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label className="form-label">Full Name <span className="required">*</span></label>
              <input
                className="form-input"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div className="input-group">
              <label className="form-label">Email Address <span className="required">*</span></label>
              <input
                className="form-input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>

            <div className="input-group">
              <label className="form-label">Phone Number</label>
              <input
                className="form-input"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567"
              />
            </div>

            <div className="input-group">
              <label className="form-label">Organization</label>
              <input
                className="form-input"
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Healthcare Practice Name"
              />
            </div>

            <div className="input-group">
              <label className="form-label">Message</label>
              <textarea
                className="form-textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your needs and requirements..."
              />
            </div>

            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? 'Submitting...' : 'Schedule Demo'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
