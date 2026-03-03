import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, CheckCircle, Plane, Users, ArrowRight, Shield } from 'lucide-react';
import { useScrollReveal } from '../hooks/useAnimations';
import { useLanguage } from '../i18n/LanguageContext';
import './Services.css';

const RevealSection = ({ children, className = '', delay = 0 }) => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div ref={ref} className={className} style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
      transition: `opacity 0.7s ${delay}s cubic-bezier(0.22,1,0.36,1), transform 0.7s ${delay}s cubic-bezier(0.22,1,0.36,1)`
    }}>
      {children}
    </div>
  );
};

const Services = () => {
  const { t } = useLanguage();

  const services = [
    { icon: <BookOpen size={28} />, title: t('servicesSection.s1'), desc: t('servicesSection.s1d'), img: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80" },
    { icon: <FileText size={28} />, title: t('servicesSection.s2'), desc: t('servicesSection.s2d'), img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80" },
    { icon: <CheckCircle size={28} />, title: t('servicesSection.s3'), desc: t('servicesSection.s3d'), img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80" },
    { icon: <Users size={28} />, title: t('servicesSection.s4'), desc: t('servicesSection.s4d'), img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80" },
    { icon: <Plane size={28} />, title: t('servicesSection.s5'), desc: t('servicesSection.s5d'), img: "https://remote.com/hubfs/Remote%20Website%20-%202025/(Approved)%20Blog%20Images/Blog%20Images/Immigration%20%26%20Visas.png" },
    { icon: <Shield size={28} />, title: t('servicesSection.s6'), desc: t('servicesSection.s6d'), img: "https://media.istockphoto.com/id/1161001258/photo/scholarship-cap-magnified.jpg?s=2048x2048&w=is&k=20&c=yl9K3bNuFlYfUkL-zmvVyLYtmeAkhM7udQyWczCoplo=" }
  ];

  const journey = [
    { step: "01", title: t('consultation.step1'), desc: t('consultation.step1d') },
    { step: "02", title: t('consultation.step2'), desc: t('consultation.step2d') },
    { step: "03", title: t('consultation.step3'), desc: t('consultation.step3d') },
    { step: "04", title: "Submission & Interviews", desc: "Applications submitted. Focus shifts to interview prep and university queries." },
    { step: "05", title: "Acceptance & Enrollment", desc: "Evaluate offers, negotiate scholarships, and finalise enrollment." },
    { step: "06", title: t('servicesSection.s5'), desc: t('servicesSection.s5d') }
  ];

  return (
    <div className="services">
      <section className="page-header">
        <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&q=80" alt="" className="page-header__bg-img" />
        <div className="page-header__bg" />
        <div className="container page-header__inner">
          <span className="section-label">{t('servicesSection.label')}</span>
          <h1>{t('servicesSection.title1')}<br /><span className="text-gold">{t('servicesSection.title2')}</span></h1>
          <p className="page-header__desc">{t('servicesSection.desc')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-detail-grid">
            {services.map((s, i) => (
              <RevealSection key={i} delay={i * 0.08}>
                <div className="service-detail-card card">
                  <div className="service-detail-img">
                    <img src={s.img} alt={s.title} />
                  </div>
                  <div className="service-detail-body">
                    <div className="service-detail-icon">{s.icon}</div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <RevealSection>
            <div className="section-header text-center">
              <span className="section-label" style={{ justifyContent: 'center' }}>The Process</span>
              <h2>Your Student Journey</h2>
              <p className="section-desc">A proven, structured approach refined over hundreds of successful admissions.</p>
            </div>
          </RevealSection>

          <div className="journey-grid">
            {journey.map((item, i) => (
              <RevealSection key={i} delay={i * 0.08}>
                <div className="journey-step">
                  <div className="journey-number">{item.step}</div>
                  <div className="journey-content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <RevealSection>
            <div className="services-cta-box">
              <h2>{t('cta.title1')}</h2>
              <p>{t('cta.desc')}</p>
              <Link to="/consultation" className="btn btn-primary btn-lg">
                {t('cta.btn')} <ArrowRight size={18} />
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
};

export default Services;
