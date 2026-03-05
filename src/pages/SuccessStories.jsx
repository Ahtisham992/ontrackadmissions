import React from 'react';
import { Link } from 'react-router-dom';
import { Quote, ArrowRight, MapPin, GraduationCap } from 'lucide-react';
import { useScrollReveal } from '../hooks/useAnimations';
import { useLanguage } from '../i18n/LanguageContext';
import './SuccessStories.css';

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

const SuccessStories = () => {
  const { t } = useLanguage();

  const stories = [
    {
      name: "Ahmed Raza", origin: "United Arab Emirates", university: "Imperial College London",
      course: "MSc Computer Science", initials: "AR",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      before: "Had a strong technical background but struggled to articulate his long-term vision in the UK's rigid personal statement format.",
      after: "Secured admission to Imperial College London and King's College London with a structurally refined personal statement.",
      quote: "The consultants didn't just edit my essay — they challenged my thinking. They helped me extract the narrative of my startup experience and mold it into exactly what top UK tech programs were looking for."
    },
    {
      name: "Priya Sharma", origin: "India", university: "London School of Economics",
      course: "BSc Economics", initials: "PS",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
      before: "Strong academic results but struggled to navigate the highly specific UCAS personal statement format required by top UK business schools.",
      after: "Secured admission to LSE Economics and King's College London, with offers from 4 out of 5 UK universities applied to.",
      quote: "Applying to UK universities from India felt overwhelming. On Track broke down the UCAS system step by step, crafted a powerful personal statement narrative, and I got into LSE — my dream school."
    },
    {
      name: "David Chen", origin: "Singapore", university: "University of Edinburgh",
      course: "BEng Artificial Intelligence", initials: "DC",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
      before: "Excellent grades in A-Levels but struggled to stand out in a highly competitive UCAS applicant pool for AI and Computer Science courses.",
      after: "Accepted to the University of Edinburgh's AI programme — one of the most competitive and prestigious CS programmes in the UK.",
      quote: "UK university admissions is a lot more focussed on your personal statement than I expected. On Track helped me craft a compelling narrative that showed not just my grades, but my genuine passion for AI research."
    }
  ];

  return (
    <div className="success-stories">
      <section className="page-header">
        <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=80" alt="" className="page-header__bg-img" />
        <div className="page-header__bg" />
        <div className="container page-header__inner">
          <span className="section-label">{t('stories.label')}</span>
          <h1>{t('stories.title1')}<br /><span className="text-gold">{t('stories.title2')}</span></h1>
          <p className="page-header__desc">{t('stories.desc')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="stories-list">
            {stories.map((s, i) => (
              <RevealSection key={i} delay={i * 0.1}>
                <div className="story-card">
                  <div className="story-sidebar">
                    <img src={s.img} alt={s.name} className="story-photo" />
                    <h3>{s.name}</h3>
                    <div className="story-origin"><MapPin size={14} /> {s.origin}</div>
                    <div className="story-admitted">
                      <GraduationCap size={16} />
                      <div>
                        <strong>{s.university}</strong>
                        <span>{s.course}</span>
                      </div>
                    </div>
                  </div>
                  <div className="story-main">
                    <div className="story-journey">
                      <div className="story-phase story-phase--before">
                        <span className="story-phase-label">The Challenge</span>
                        <p>{s.before}</p>
                      </div>
                      <div className="story-phase story-phase--after">
                        <span className="story-phase-label">The Result</span>
                        <p>{s.after}</p>
                      </div>
                    </div>
                    <div className="story-quote">
                      <Quote size={24} className="story-quote-icon" />
                      <p>"{s.quote}"</p>
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>

          <RevealSection>
            <div className="text-center" style={{ marginTop: '64px' }}>
              <h3 style={{ marginBottom: '16px' }}>{t('stories.ctaTitle')}</h3>
              <Link to="/consultation" className="btn btn-secondary btn-lg">
                {t('stories.ctaBtn')} <ArrowRight size={18} />
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;
