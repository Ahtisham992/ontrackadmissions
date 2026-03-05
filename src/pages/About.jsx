import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Target, Heart, Award, Globe, Zap, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useAnimations';
import { useLanguage } from '../i18n/LanguageContext';
import './About.css';

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

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="about">

      {/* ═══ PAGE HEADER ═══ */}
      <section className="page-header">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c476?w=1920&q=80"
          alt="University campus"
          className="page-header__bg-img"
        />
        <div className="page-header__bg" />
        <div className="container page-header__inner">
          <span className="section-label">{t('about.label')}</span>
          <h1>{t('about.title1')}<br /><span className="text-gold">{t('about.title2')}</span></h1>
          <p className="page-header__desc">
            {t('about.desc')}
          </p>
        </div>
      </section>

      {/* ═══ FOUNDER ═══ */}
      <section className="section">
        <div className="container about-founder">
          <RevealSection>
            <div className="founder-card">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80"
                alt="Dr. Elena Sterling"
                className="founder-img"
              />
              <div className="founder-info">
                <h3>Dr. Elena Sterling</h3>
                <span className="founder-role">{t('about.founderRole')}</span>
                <p>
                  "I founded On Track Admissions after witnessing the immense potential of international students being hindered by systemic barriers and lack of transparent guidance. Our methodology isn't about filling forms — it's about architectural storytelling, helping individuals present their authentic brilliance to the world's most selective institutions."
                </p>
              </div>
            </div>
          </RevealSection>

          <RevealSection delay={0.2} className="about-story">
            <span className="section-label">{t('about.journeyLabel')}</span>
            <h2>{t('about.journeyTitle1')}<br />{t('about.journeyTitle2')}</h2>
            <p>
              Headquartered in London with associate offices across Asia and the Middle East, On Track Admissions was established to bridge the gap between ambitious students and tier-one educational institutions worldwide.
            </p>
            <p>
              We are specialists in the UK admissions system — from crafting world-class UCAS personal statements, to navigating Russell Group and Oxbridge requirements, to supporting students with their UK Student Visa applications. Our proprietary frameworks ensure every student is positioned competitively for the UK's most sought-after programmes.
            </p>
            <div className="about-metrics">
              <div className="about-metric">
                <strong>10+</strong>
                <span>Years Experience</span>
              </div>
              <div className="about-metric">
                <strong>30+</strong>
                <span>Global Partners</span>
              </div>
              <div className="about-metric">
                <strong>500+</strong>
                <span>{t('stats.s1').split(' ')[0] || 'Students'}</span>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ═══ IMAGE STRIP ═══ */}
      <div className="about-image-strip">
        <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80" alt="Students studying" />
        <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80" alt="Graduation" />
        <img src="https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80" alt="Campus" />
        <img src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=600&q=80" alt="University life" />
      </div>

      {/* ═══ MISSION & VISION ═══ */}
      <section className="section mission-section">
        <div className="container">
          <div className="mission-grid">
            <RevealSection>
              <div className="mission-card">
                <Target size={36} />
                <h3>{t('about.missionTitle')}</h3>
                <p>To democratize access to elite global education by providing strategic, transparent, and highly personalised admissions consulting that empowers students to reach their highest academic potential.</p>
              </div>
            </RevealSection>
            <RevealSection delay={0.15}>
              <div className="mission-card">
                <Globe size={36} />
                <h3>{t('about.visionTitle')}</h3>
                <p>To be the world's most trusted international educational consultancy, recognized for ethical practices, unparalleled success rates, and cultivating the next generation of global leaders.</p>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ═══ CORE VALUES ═══ */}
      <section className="section bg-light">
        <div className="container">
          <RevealSection>
            <div className="section-header text-center">
              <span className="section-label" style={{ justifyContent: 'center' }}>{t('about.valuesLabel')}</span>
              <h2>{t('about.valuesTitle')}</h2>
              <p className="section-desc">{t('about.valuesDesc')}</p>
            </div>
          </RevealSection>

          <div className="values-grid">
            {[
              { icon: <Shield size={24} />, title: "Integrity", desc: "No ghostwriting, no false promises — just strategic optimisation grounded in ethics." },
              { icon: <Award size={24} />, title: "Excellence", desc: "Exceptional standards in every personal statement reviewed and every strategy devised." },
              { icon: <Heart size={24} />, title: "Student-Centric", desc: "The student's best interest, well-being, and authentic voice remain central to our process." },
              { icon: <Zap size={24} />, title: "Innovation", desc: "We analyse global admissions trends and use data-driven approaches to maximise chances." },
              { icon: <Globe size={24} />, title: "Global Perspective", desc: "We celebrate diversity and leverage each student's unique international background." }
            ].map((value, i) => (
              <RevealSection key={i} delay={i * 0.1}>
                <div className="value-card card">
                  <div className="value-icon">{value.icon}</div>
                  <h4>{value.title}</h4>
                  <p>{value.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="section text-center">
        <div className="container">
          <RevealSection>
            <h2>{t('about.partnerTitle')}<br />{t('about.partnerTitle2')}</h2>
            <p className="section-desc" style={{ maxWidth: '560px', margin: '0 auto 40px' }}>
              {t('about.partnerDesc')}
            </p>
            <Link to="/consultation" className="btn btn-secondary btn-lg">
              {t('about.partnerCta')} <ArrowRight size={18} />
            </Link>
          </RevealSection>
        </div>
      </section>

    </div>
  );
};

export default About;
