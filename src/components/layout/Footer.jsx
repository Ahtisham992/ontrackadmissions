import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <div className="footer__logo-icon">
                <GraduationCap size={20} />
              </div>
              <div>
                <span className="footer__logo-name">On Track</span>
                <span className="footer__logo-sub">ADMISSIONS</span>
              </div>
            </Link>
            <p className="footer__desc">
              Empowering ambitious students worldwide with strategic, transparent admissions consulting for top-tier international universities.
            </p>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Navigation</h4>
            <ul className="footer__links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/universities">Universities</Link></li>
              <li><Link to="/success-stories">Success Stories</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Services</h4>
            <ul className="footer__links">
              <li><span>University Selection</span></li>
              <li><span>Application Strategy</span></li>
              <li><span>Personal Statement</span></li>
              <li><span>Visa Support</span></li>
              <li><span>Interview Prep</span></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Contact</h4>
            <ul className="footer__contact">
              <li><Mail size={16} /> contact@ontrackadmissions.com</li>
              <li><Phone size={16} /> +1 (555) 123-4567</li>
              <li><MapPin size={16} /> London, United Kingdom</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} On Track Admissions. All rights reserved.</p>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
