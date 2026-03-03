import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();
  const { language: lang, setLanguage: setLang, t, dir } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setLangOpen(false);
  }, [location]);

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/services', label: t('nav.services') },
    { to: '/universities', label: t('nav.universities') },
    { to: '/success-stories', label: t('nav.stories') },
  ];

  const languages = ['EN', 'AR', 'ZH', 'HI', 'FR'];

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo">
          <div className="navbar__logo-icon">
            <GraduationCap size={22} />
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">On Track</span>
            <span className="navbar__logo-sub">ADMISSIONS</span>
          </div>
        </Link>

        <nav className="navbar__nav">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar__actions">
          {/* Language Selector */}
          <div className="lang-selector">
            <button className="lang-selector__btn" onClick={() => setLangOpen(!langOpen)}>
              {lang} <ChevronDown size={14} />
            </button>
            {langOpen && (
              <div className="lang-selector__dropdown">
                {languages.map((l) => (
                  <button
                    key={l}
                    className={`lang-selector__option ${lang === l ? 'lang-selector__option--active' : ''}`}
                    onClick={() => { setLang(l); setLangOpen(false); }}
                  >
                    {l}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link to="/consultation" className="btn btn-primary btn-sm">
            {t('nav.cta')}
          </Link>
        </div>

        <button
          className="navbar__toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile overlay */}
      <div className={`navbar__mobile ${isOpen ? 'navbar__mobile--open' : ''}`}>
        <nav className="navbar__mobile-nav">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
              }
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="navbar__mobile-lang">
            {languages.map((l) => (
              <button
                key={l}
                className={`lang-pill ${lang === l ? 'lang-pill--active' : ''}`}
                onClick={() => setLang(l)}
              >
                {l}
              </button>
            ))}
          </div>
          <Link to="/consultation" className="btn btn-primary" style={{ marginTop: '8px', width: '100%' }}>
            {t('nav.cta')}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
