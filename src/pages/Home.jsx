import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle, Globe, GraduationCap, Users,
  Award, BookOpen, Star, TrendingUp, Briefcase, Shield,
  ChevronDown, ChevronUp, MapPin, Clock
} from 'lucide-react';
import { useScrollReveal, useAnimatedCounter } from '../hooks/useAnimations';
import { useLanguage } from '../i18n/LanguageContext';
import './Home.css';

const RevealSection = ({ children, className = '', delay = 0 }) => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.7s ${delay}s cubic-bezier(0.22,1,0.36,1), transform 0.7s ${delay}s cubic-bezier(0.22,1,0.36,1)`
      }}
    >
      {children}
    </div>
  );
};

const AnimatedStat = ({ value, label, suffix = '' }) => {
  const [ref, count] = useAnimatedCounter(value, 2000);
  return (
    <div className="stat-item" ref={ref}>
      <strong>{count}{suffix}</strong>
      <span>{label}</span>
    </div>
  );
};

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const { t } = useLanguage();

  const faqs = [
    { q: t('faq.faq1q', "Who is On Track Admissions for?"), a: t('faq.faq1a', "We help students aged 17–30 who are looking to apply to international universities...") },
    { q: t('faq.faq2q', "How does the free consultation work?"), a: t('faq.faq2a', "After submitting your details, an expert consultant is assigned to your profile...") },
    { q: t('faq.faq3q', "Do you guarantee university admission?"), a: t('faq.faq3a', "No ethical consultancy can guarantee admission...") },
    { q: t('faq.faq4q', "How much do your services cost?"), a: t('faq.faq4a', "Our packages vary depending on the number of universities...") },
    { q: t('faq.faq5q', "Can you help with scholarship applications?"), a: t('faq.faq5a', "Yes! Scholarship identification and application guidance is one of our core services...") }
  ];

  return (
    <div className="home">

      {/* ═══ HERO ═══ */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__gradient" />
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c476?w=1920&q=80"
            alt="Prestigious university campus"
            className="hero__bg-image"
          />
          <div className="hero__overlay" />
        </div>

        <div className="container hero__inner">
          <div className="hero__content animate-fade-up">
            <span className="section-label">{t('hero.label')}</span>
            <h1 className="hero__title">
              {t('hero.title1')}<br />
              <span className="text-gold">{t('hero.title2')}</span>
            </h1>
            <p className="hero__subtitle">
              {t('hero.desc')}
            </p>
            <div className="hero__cta">
              <Link to="/consultation" className="btn btn-primary btn-lg">
                {t('hero.cta1')} <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn btn-outline btn-lg">
                {t('hero.cta2')}
              </Link>
            </div>
            <div className="hero__trust-badges">
              <div className="hero__badge"><CheckCircle size={16} /> {t('hero.badge1')}</div>
              <div className="hero__badge"><Clock size={16} /> {t('hero.badge2')}</div>
              <div className="hero__badge"><Shield size={16} /> {t('hero.badge3')}</div>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__image-stack">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80"
                alt="Graduation ceremony"
                className="hero__img hero__img--main"
              />
              <div className="hero__card hero__card--stats">
                <div className="hero__stat">
                  <strong>98%</strong>
                  <span>{t('hero.badge1').replace('98% ', '')}</span>
                </div>
              </div>
              <div className="hero__card hero__card--badge">
                <Award size={20} />
                <span>500+ {t('stats.s1').split(' ')[0] || 'Students'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TRUST BAR ═══ */}
      <section className="trust-bar">
        <div className="container">
          <div className="trust-bar__inner">
            <span className="trust-bar__label">{t('trust.label')}</span>
            <div className="trust-bar__logos">
              {['Oxford', 'Cambridge', 'UCL', 'Imperial', 'LSE', 'Edinburgh', 'Manchester', 'KCL'].map((uni) => (
                <span key={uni} className="trust-bar__logo">{uni}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES OVERVIEW ═══ */}
      <section className="section bg-light" id="services-overview">
        <div className="container">
          <RevealSection>
            <div className="section-header text-center">
              <span className="section-label" style={{ justifyContent: 'center' }}>{t('servicesSection.label')}</span>
              <h2>{t('servicesSection.title1')}<br />{t('servicesSection.title2')}</h2>
              <p className="section-desc">{t('servicesSection.desc')}</p>
            </div>
          </RevealSection>

          <div className="services-grid">
            {[
              { icon: <BookOpen size={28} />, title: t('servicesSection.s1'), desc: t('servicesSection.s1d'), img: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80" },
              { icon: <Briefcase size={28} />, title: t('servicesSection.s2'), desc: t('servicesSection.s2d'), img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80" },
              { icon: <TrendingUp size={28} />, title: t('servicesSection.s3'), desc: t('servicesSection.s3d'), img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80" },
              { icon: <Users size={28} />, title: t('servicesSection.s4'), desc: t('servicesSection.s4d'), img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80" },
              { icon: <Globe size={28} />, title: t('servicesSection.s5'), desc: t('servicesSection.s5d'), img: "https://remote.com/hubfs/Remote%20Website%20-%202025/(Approved)%20Blog%20Images/Blog%20Images/Immigration%20%26%20Visas.png" },
              { icon: <Shield size={28} />, title: t('servicesSection.s6'), desc: t('servicesSection.s6d'), img: "https://media.istockphoto.com/id/1161001258/photo/scholarship-cap-magnified.jpg?s=2048x2048&w=is&k=20&c=yl9K3bNuFlYfUkL-zmvVyLYtmeAkhM7udQyWczCoplo=" }
            ].map((service, i) => (
              <RevealSection key={i} delay={i * 0.1}>
                <div className="service-card card">
                  <div className="service-card__img">
                    <img src={service.img} alt={service.title} />
                  </div>
                  <div className="service-card__body">
                    <div className="service-card__icon">{service.icon}</div>
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                    <Link to="/services" className="service-card__link">
                      {t('servicesSection.learnMore')} <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US + STATS ═══ */}
      <section className="section why-section">
        <div className="container">
          <div className="why-grid">
            <RevealSection className="why-content">
              <span className="section-label">{t('why.label')}</span>
              <h2>{t('why.title1')}<br />{t('why.title2')}</h2>
              <p className="why-desc">
                {t('why.desc')}
              </p>
              <ul className="why-list">
                {t('why.items').map((item, i) => (
                  <li key={i}>
                    <CheckCircle size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn btn-outline-dark" style={{ marginTop: '24px' }}>
                {t('why.aboutTeam')} <ArrowRight size={16} />
              </Link>
            </RevealSection>

            <RevealSection delay={0.2}>
              <div className="stats-panel">
                <div className="stats-grid">
                  <AnimatedStat value="500" label={t('stats.s1')} suffix="+" />
                  <AnimatedStat value="98" label={t('stats.s2')} suffix="%" />
                  <AnimatedStat value="100" label={t('stats.s3')} suffix="+" />
                  <AnimatedStat value="24" label={t('stats.s4')} suffix="h" />
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ═══ FEATURED IMAGE BANNER ═══ */}
      <section className="image-banner">
        <img
          src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1920&q=80"
          alt="Students on campus"
        />
        <div className="image-banner__overlay">
          <div className="container text-center">
            <RevealSection>
              <h2>"Education is the passport to the future"</h2>
              <p>— Malcolm X</p>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ═══ UK UNIVERSITY GROUPS ═══ */}
      <section className="section destinations-section">
        <div className="container">
          <RevealSection>
            <div className="section-header text-center">
              <span className="section-label" style={{ justifyContent: 'center' }}>{t('dest.label')}</span>
              <h2 className="text-white">{t('dest.title1')}<br /><span className="text-gold">{t('dest.title2')}</span></h2>
            </div>
          </RevealSection>

          <div className="dest-grid">
            {[
              { country: 'Russell Group', count: '24 Elite Universities', img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80' },
              { country: 'London Universities', count: 'UCL · LSE · KCL · Imperial', img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=600&q=80' },
              { country: 'Scotland', count: 'Edinburgh · Glasgow · St Andrews', img: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Skyline_of_Edinburgh.jpg' },
              { country: 'Red Brick Universities', count: 'Manchester · Leeds · Bristol', img: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=600&q=80' }
            ].map((dest, i) => (
              <RevealSection key={i} delay={i * 0.1}>
                <div className="dest-card">
                  <img src={dest.img} alt={dest.country} className="dest-card__img" />
                  <div className="dest-card__overlay">
                    <h3>{dest.country}</h3>
                    <span>{dest.count}</span>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '48px' }}>
            <Link to="/universities" className="btn btn-outline btn-lg">
              {t('dest.viewAll')} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="section bg-light">
        <div className="container">
          <RevealSection>
            <div className="section-header text-center">
              <span className="section-label" style={{ justifyContent: 'center' }}>{t('testimonials.label')}</span>
              <h2>{t('testimonials.title')}</h2>
            </div>
          </RevealSection>

          <div className="testimonials-grid">
            {[
              {
                quote: "On Track transformed my confusing application into a clear strategic path. Their personal statement guidance was extraordinary — I was accepted to UCL with a scholarship.",
                name: "Aisha Ahmed",
                origin: "Dubai, UAE",
                uni: "University College London",
                initials: "AA",
                color: "var(--navy-800)"
              },
              {
                quote: "As an international student from China, the UK UCAS system was completely new to me. On Track guided me through every step — I received offers from Imperial College and UCL.",
                name: "Chen Wei",
                origin: "Beijing, China",
                uni: "Imperial College London",
                initials: "CW",
                color: "var(--navy-600)"
              },
              {
                quote: "On Track's knowledge of the UK admissions process is second to none. They helped me craft a personal statement that perfectly matched what Warwick Business School was looking for.",
                name: "Priya Sharma",
                origin: "New Delhi, India",
                uni: "University of Warwick",
                initials: "PS",
                color: "var(--gold-400)"
              }
            ].map((t, i) => (
              <RevealSection key={i} delay={i * 0.15}>
                <div className="testimonial-card card">
                  <div className="testimonial-stars">
                    {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="var(--gold-400)" color="var(--gold-400)" />)}
                  </div>
                  <p className="testimonial-quote">"{t.quote}"</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar" style={{ background: t.color }}>
                      {t.initials}
                    </div>
                    <div>
                      <strong>{t.name}</strong>
                      <span className="testimonial-origin"><MapPin size={12} /> {t.origin}</span>
                      <span>{t.uni}</span>
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link to="/success-stories" className="btn btn-outline-dark">
              {t('testimonials.readAll')} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="section">
        <div className="container">
          <div className="faq-layout">
            <RevealSection className="faq-header">
              <span className="section-label">{t('faq.label')}</span>
              <h2>{t('faq.title1')}<br />{t('faq.title2')}</h2>
              <p className="text-muted">{t('faq.noAnswer')}</p>
              <Link to="/consultation" className="btn btn-secondary" style={{ marginTop: '24px' }}>
                {t('faq.askUs')}
              </Link>
            </RevealSection>

            <div className="faq-list">
              {faqs.map((faq, i) => (
                <RevealSection key={i} delay={i * 0.08}>
                  <div className={`faq-item ${openFaq === i ? 'faq-item--open' : ''}`}>
                    <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                      <span>{faq.q}</span>
                      {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    {openFaq === i && (
                      <div className="faq-answer">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="cta-section">
        <img
          src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="University campus"
          className="cta-bg-img"
        />
        <div className="cta-overlay" />
        <div className="container cta-inner">
          <RevealSection>
            <h2>{t('cta.title1')}<br /><span className="text-gold">{t('cta.title2')}</span></h2>
            <p>{t('cta.desc')}</p>
            <Link to="/consultation" className="btn btn-primary btn-lg">
              {t('cta.btn')} <ArrowRight size={18} />
            </Link>
          </RevealSection>
        </div>
      </section>

    </div>
  );
};

export default Home;
