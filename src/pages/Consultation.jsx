import React, { useState } from 'react';
import { Send, CheckCircle, Shield, Clock, Phone, Loader2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useAnimations';
import { useLanguage } from '../i18n/LanguageContext';
import { crmService } from '../services/crmService';
import './Consultation.css';

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

const Consultation = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.target);
      const leadData = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        country: formData.get('country'),
        destination: formData.get('destination'),
        intake: formData.get('intake'),
        qualification: formData.get('qualification'),
        englishStatus: formData.get('englishStatus'),
        budget: formData.get('budget'),
        goals: formData.get('goals'),
      };

      await crmService.submitConsultationLead(leadData);
      
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Submission failed', error);
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="consultation">
      <section className="page-header">
        <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80" alt="" className="page-header__bg-img" />
        <div className="page-header__bg" />
        <div className="container page-header__inner">
          <span className="section-label">{t('consultation.label')}</span>
          <h1>{t('consultation.title1')}<br /><span className="text-gold">{t('consultation.title2')}</span></h1>
          <p className="page-header__desc">{t('consultation.desc')}</p>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="consul-layout">
            <RevealSection>
              <div className="consul-info">
                <div className="consul-info-card">
                  <h3>{t('consultation.whatNext')}</h3>
                  <div className="consul-steps">
                    <div className="consul-step">
                      <div className="consul-step-num">1</div>
                      <div><strong>{t('consultation.step1')}</strong><p>{t('consultation.step1d')}</p></div>
                    </div>
                    <div className="consul-step">
                      <div className="consul-step-num">2</div>
                      <div><strong>{t('consultation.step2')}</strong><p>{t('consultation.step2d')}</p></div>
                    </div>
                    <div className="consul-step">
                      <div className="consul-step-num">3</div>
                      <div><strong>{t('consultation.step3')}</strong><p>{t('consultation.step3d')}</p></div>
                    </div>
                  </div>
                </div>
                <div className="consul-trust">
                  <div className="consul-trust-item"><Clock size={18} /><span>{t('hero.badge2')}</span></div>
                  <div className="consul-trust-item"><Shield size={18} /><span>{t('consultation.secure')}</span></div>
                  <div className="consul-trust-item"><Phone size={18} /><span>{t('consultation.noObligation')}</span></div>
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={0.15}>
              <div className="consul-form-wrap">
                {submitted ? (
                  <div className="consul-success animate-fade-up">
                    <div className="consul-success-icon"><CheckCircle size={48} /></div>
                    <h2>{t('consultation.received')}</h2>
                    <p>{t('consultation.receivedDesc')}</p>
                    <button className="btn btn-outline-dark" onClick={() => setSubmitted(false)}>
                      {t('consultation.another')}
                    </button>
                  </div>
                ) : (
                  <form className="consul-form" onSubmit={handleSubmit}>
                    <div className="consul-form-grid">
                      <div className="form-group"><label className="form-label">{t('consultation.name')}</label><input className="form-input" name="name" type="text" required placeholder="e.g. John Doe" /></div>
                      <div className="form-group"><label className="form-label">{t('consultation.email')}</label><input className="form-input" name="email" type="email" required placeholder="john@example.com" /></div>
                      <div className="form-group"><label className="form-label">{t('consultation.phone')}</label><input className="form-input" name="phone" type="tel" required placeholder="+1 234 567 8900" /></div>
                      <div className="form-group"><label className="form-label">{t('consultation.country')}</label><input className="form-input" name="country" type="text" required placeholder="e.g. UAE, India, Nigeria" /></div>
                      
                      <div className="form-group">
                        <label className="form-label">{t('consultation.destination')}</label>
                        <select className="form-select" name="destination" required defaultValue="">
                          <option value="" disabled>{t('consultation.selectDest')}</option>
                          <option>{t('dest.uk')}</option><option>{t('dest.us')}</option><option>{t('dest.ca')}</option><option>{t('dest.au')}</option><option>Europe (Other)</option><option>Undecided</option>
                        </select>
                      </div>
                      
                      <div className="form-group">
                        <label className="form-label">{t('consultation.intake')}</label>
                        <select className="form-select" name="intake" required defaultValue="">
                          <option value="" disabled>{t('consultation.selectIntake')}</option>
                          <option>Fall 2025</option><option>Spring 2026</option><option>Fall 2026</option><option>2027 or later</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">{t('consultation.qualification')}</label>
                        <select className="form-select" name="qualification" required defaultValue="">
                          <option value="" disabled>{t('consultation.selectQual')}</option>
                          <option>High School (Grade 11/12)</option><option>Bachelor's Degree</option><option>Master's Degree</option><option>Other</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">{t('consultation.english')}</label>
                        <select className="form-select" name="englishStatus" defaultValue="">
                          <option value="" disabled>{t('consultation.selectStatus')}</option>
                          <option>Taken (IELTS/TOEFL/PTE)</option><option>Planning to take</option><option>Exempt / Native Speaker</option>
                        </select>
                      </div>
                      <div className="form-group form-group--full">
                        <label className="form-label">{t('consultation.budget')}</label>
                        <select className="form-select" name="budget" required defaultValue="">
                          <option value="" disabled>{t('consultation.selectRange')}</option>
                          <option>Under $20,000 USD / year</option><option>$20,000 – $40,000 USD / year</option><option>$40,000 – $60,000 USD / year</option><option>Over $60,000 USD / year</option>
                        </select>
                      </div>
                      <div className="form-group form-group--full">
                        <label className="form-label">{t('consultation.goals')}</label>
                        <textarea className="form-textarea" name="goals" placeholder="Mention specific programs, concerns, or career goals..."></textarea>
                      </div>
                    </div>
                    <div className="consul-privacy"><Shield size={16} /><span>{t('consultation.privacyNote')}</span></div>
                    <button type="submit" className="btn btn-primary btn-lg consul-submit" disabled={isSubmitting}>
                      {isSubmitting ? <><Loader2 size={18} className="animate-spin" /> Processing...</> : <>{t('consultation.submitBtn')} <Send size={18} /></>}
                    </button>
                  </form>
                )}
              </div>
            </RevealSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consultation;
