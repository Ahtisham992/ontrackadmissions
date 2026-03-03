import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();

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
              {t('footer.desc')}
            </p>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">{t('footer.navigation')}</h4>
            <ul className="footer__links">
              <li><Link to="/">{t('nav.home')}</Link></li>
              <li><Link to="/about">{t('footer.aboutUs')}</Link></li>
              <li><Link to="/services">{t('nav.services')}</Link></li>
              <li><Link to="/universities">{t('nav.universities')}</Link></li>
              <li><Link to="/success-stories">{t('nav.stories')}</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">{t('footer.servicesTitle')}</h4>
            <ul className="footer__links">
              <li><span>{t('footer.uniSelect')}</span></li>
              <li><span>{t('footer.appStrategy')}</span></li>
              <li><span>{t('footer.personalStatement')}</span></li>
              <li><span>{t('footer.visaSupport')}</span></li>
              <li><span>{t('footer.interviewPrep')}</span></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">{t('footer.contact')}</h4>
            <ul className="footer__contact">
              <li><Mail size={16} /> contact@ontrackadmissions.com</li>
              <li><Phone size={16} /> +1 (555) 123-4567</li>
              <li><MapPin size={16} /> London, United Kingdom</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} On Track Admissions. {t('footer.rights')}</p>
          <div className="footer__bottom-links">
            <a href="#">{t('footer.privacy')}</a>
            <a href="#">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
