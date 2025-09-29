// src/components/NavBar.js
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';
import { getPublicAssetUrl } from '../utils/assetHelper';

function NavBar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef();

  // Close dropdowns when clicking outside the navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Toggle dropdown on click
  const handleDropdownClick = (e, name) => {
    e.stopPropagation();
    setOpenDropdown(openDropdown === name ? null : name);
  };

  // Open dropdown on hover (desktop)
  const handleDropdownMouseEnter = (name) => {
    if (window.innerWidth > 1024) setOpenDropdown(name);
  };
  const handleDropdownMouseLeave = () => {
    if (window.innerWidth > 1024) setOpenDropdown(null);
  };

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null); // Close any open dropdowns when toggling menu
  };

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar__logo">
        <Link to="/">
          <img src={getPublicAssetUrl('images/Logo.png')} alt="Logo" />
        </Link>
      </div>

      <button 
        className={`navbar__hamburger${isMobileMenuOpen ? ' active' : ''}`} 
        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'} 
        onClick={toggleMenu}
      >
        &#9776;
      </button>

      <div className={`navbar__menu-container${isMobileMenuOpen ? ' navbar__menu-container--open' : ''}`}>
        <ul className="navbar__links">
          <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link></li>

          <li
            className={`dropdown${openDropdown === 'who' ? ' open' : ''}`}
            onClick={e => handleDropdownClick(e, 'who')}
            onMouseEnter={() => handleDropdownMouseEnter('who')}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <button type="button" className="dropdown__toggle" aria-expanded={openDropdown === 'who'}>
              Who We Help
            </button>
            <ul className="dropdown__menu">
              <li><Link to="/who-we-help/private-practices" onClick={() => setIsMobileMenuOpen(false)}>Private Practices</Link></li>
              <li><Link to="/who-we-help/hospitals" onClick={() => setIsMobileMenuOpen(false)}>Hospitals</Link></li>
              <li><Link to="/who-we-help/insurance-groups" onClick={() => setIsMobileMenuOpen(false)}>Insurance Groups</Link></li>
              <li><Link to="/who-we-help/third-party-administrator" onClick={() => setIsMobileMenuOpen(false)}>Third Party Administrator</Link></li>
              <li><Link to="/who-we-help/case-management-groups" onClick={() => setIsMobileMenuOpen(false)}>Case Management Groups</Link></li>
            </ul>
          </li>

          <li
            className={`dropdown${openDropdown === 'services' ? ' open' : ''}`}
            onClick={e => handleDropdownClick(e, 'services')}
            onMouseEnter={() => handleDropdownMouseEnter('services')}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <button type="button" className="dropdown__toggle" aria-expanded={openDropdown === 'services'}>
              Our Services
            </button>
            <ul className="dropdown__menu">
              <li><Link to="/services/chronic-care-management" onClick={() => setIsMobileMenuOpen(false)}>Chronic Care Management</Link></li>
              <li><Link to="/services/case-management" onClick={() => setIsMobileMenuOpen(false)}>Case Management</Link></li>
              <li><Link to="/services/behavioral-health" onClick={() => setIsMobileMenuOpen(false)}>Behavioral Health</Link></li>
              <li><Link to="/services/remote-patient-monitoring" onClick={() => setIsMobileMenuOpen(false)}>Remote Patient Monitoring</Link></li>
            </ul>
          </li>
        </ul>

        <div className="navbar__cta">
          <Link to="/contact" className="btn btn--demo">
            Schedule Demo
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;


