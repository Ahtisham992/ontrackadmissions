import React, { useState } from 'react';
import { Send, CheckCircle, Shield, Clock, Phone } from 'lucide-react';
import { useScrollReveal } from '../hooks/useAnimations';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="consultation">
      <section className="page-header">
        <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80" alt="" className="page-header__bg-img" />
        <div className="page-header__bg" />
        <div className="container page-header__inner">
          <span className="section-label">Get Started</span>
          <h1>Book Your<br /><span className="text-gold">Free Consultation</span></h1>
          <p className="page-header__desc">Share your details and an expert consultant will reach out within 24 hours to schedule your strategy session.</p>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="consul-layout">
            <RevealSection>
              <div className="consul-info">
                <div className="consul-info-card">
                  <h3>What happens next?</h3>
                  <div className="consul-steps">
                    <div className="consul-step">
                      <div className="consul-step-num">1</div>
                      <div><strong>Submit Your Details</strong><p>Fill out the form with your academic background and goals.</p></div>
                    </div>
                    <div className="consul-step">
                      <div className="consul-step-num">2</div>
                      <div><strong>Profile Review</strong><p>Our team reviews your profile and assigns a specialist.</p></div>
                    </div>
                    <div className="consul-step">
                      <div className="consul-step-num">3</div>
                      <div><strong>Strategy Call</strong><p>30-minute discovery call to map out your personalised roadmap.</p></div>
                    </div>
                  </div>
                </div>
                <div className="consul-trust">
                  <div className="consul-trust-item"><Clock size={18} /><span>Response within 24 hours</span></div>
                  <div className="consul-trust-item"><Shield size={18} /><span>Your data is secure and private</span></div>
                  <div className="consul-trust-item"><Phone size={18} /><span>No obligations, no pressure</span></div>
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={0.15}>
              <div className="consul-form-wrap">
                {submitted ? (
                  <div className="consul-success animate-fade-up">
                    <div className="consul-success-icon"><CheckCircle size={48} /></div>
                    <h2>Request Received!</h2>
                    <p>Thank you for reaching out. An admissions strategist has been assigned to your profile and will contact you within 24 hours to schedule your complimentary discovery call.</p>
                    <button className="btn btn-outline-dark" onClick={() => setSubmitted(false)}>Submit Another Request</button>
                  </div>
                ) : (
                  <form className="consul-form" onSubmit={handleSubmit}>
                    <div className="consul-form-grid">
                      <div className="form-group"><label className="form-label">Full Name *</label><input className="form-input" type="text" required placeholder="e.g. John Doe" /></div>
                      <div className="form-group"><label className="form-label">Email Address *</label><input className="form-input" type="email" required placeholder="john@example.com" /></div>
                      <div className="form-group"><label className="form-label">Phone Number *</label><input className="form-input" type="tel" required placeholder="+1 234 567 8900" /></div>
                      <div className="form-group"><label className="form-label">Country of Residence *</label><input className="form-input" type="text" required placeholder="e.g. UAE, India, Nigeria" /></div>
                      <div className="form-group">
                        <label className="form-label">Desired Study Destination *</label>
                        <select className="form-select" required defaultValue="">
                          <option value="" disabled>Select destination</option>
                          <option>United Kingdom</option><option>United States</option><option>Canada</option><option>Australia</option><option>Europe (Other)</option><option>Undecided</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Intended Intake *</label>
                        <select className="form-select" required defaultValue="">
                          <option value="" disabled>Select intake</option>
                          <option>Fall 2025</option><option>Spring 2026</option><option>Fall 2026</option><option>2027 or later</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Highest Qualification *</label>
                        <select className="form-select" required defaultValue="">
                          <option value="" disabled>Select qualification</option>
                          <option>High School (Grade 11/12)</option><option>Bachelor's Degree</option><option>Master's Degree</option><option>Other</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">English Test Status</label>
                        <select className="form-select" defaultValue="">
                          <option value="" disabled>Select status</option>
                          <option>Taken (IELTS/TOEFL/PTE)</option><option>Planning to take</option><option>Exempt / Native Speaker</option>
                        </select>
                      </div>
                      <div className="form-group form-group--full">
                        <label className="form-label">Annual Budget (Tuition + Living) *</label>
                        <select className="form-select" required defaultValue="">
                          <option value="" disabled>Select range</option>
                          <option>Under $20,000 USD / year</option><option>$20,000 – $40,000 USD / year</option><option>$40,000 – $60,000 USD / year</option><option>Over $60,000 USD / year</option>
                        </select>
                      </div>
                      <div className="form-group form-group--full">
                        <label className="form-label">Tell us about your goals (Optional)</label>
                        <textarea className="form-textarea" placeholder="Mention specific programs, concerns, or career goals..."></textarea>
                      </div>
                    </div>
                    <div className="consul-privacy"><Shield size={16} /><span>Your information is transmitted securely and never shared with third parties.</span></div>
                    <button type="submit" className="btn btn-primary btn-lg consul-submit">Submit Request <Send size={18} /></button>
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
