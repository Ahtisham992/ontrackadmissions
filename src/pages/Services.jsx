import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, CheckCircle, Plane, Users, ArrowRight, Shield } from 'lucide-react';
import { useScrollReveal } from '../hooks/useAnimations';
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
  const services = [
    { icon: <BookOpen size={28} />, title: "University Selection Support", desc: "Our data-driven approach analyses your academic history, extracurriculars, and career ambitions to build a balanced list of 'Reach', 'Target', and 'Safety' institutions across your preferred destinations.", img: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80" },
    { icon: <FileText size={28} />, title: "Application Strategy & Guidance", desc: "Navigate complex portals like Common App, UCAS, and OUAC with expert oversight. We manage timelines, ensure all requirements are met, and structure your entire application narrative.", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80" },
    { icon: <CheckCircle size={28} />, title: "Personal Statement Review", desc: "Transform generic essays into compelling narratives. Our former admissions officers provide structural critiques, thematic brainstorming, and rigorous editing for authenticity.", img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80" },
    { icon: <Users size={28} />, title: "Interview Preparation", desc: "Master alumni and admissions interviews with intensive mock sessions. We cover behavioural questions, program-specific inquiries, and communication strategies.", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80" },
    { icon: <Plane size={28} />, title: "Visa & Pre-Departure Support", desc: "Secure your student visa promptly with meticulous documentation review. Pre-departure briefings cover accommodation, banking, and cultural adaptation.", img: "https://remote.com/hubfs/Remote%20Website%20-%202025/(Approved)%20Blog%20Images/Blog%20Images/Immigration%20%26%20Visas.png" },
    { icon: <Shield size={28} />, title: "Scholarship Identification", desc: "We research and match you with merit-based and need-based scholarships, then provide strategic guidance on applications to maximise your financial aid.", img: "https://media.istockphoto.com/id/1161001258/photo/scholarship-cap-magnified.jpg?s=2048x2048&w=is&k=20&c=yl9K3bNuFlYfUkL-zmvVyLYtmeAkhM7udQyWczCoplo=" }
  ];

  const journey = [
    { step: "01", title: "Discovery Call", desc: "A deep-dive into your academic profile, aspirations, and constraints." },
    { step: "02", title: "Profile Building & Strategy", desc: "Identify target universities and create a strict timeline with requirements." },
    { step: "03", title: "Application Execution", desc: "Draft essays, compile documents, and complete applications with expert oversight." },
    { step: "04", title: "Submission & Interviews", desc: "Applications submitted. Focus shifts to interview prep and university queries." },
    { step: "05", title: "Acceptance & Enrollment", desc: "Evaluate offers, negotiate scholarships, and finalise enrollment." },
    { step: "06", title: "Visa & Departure", desc: "Execute visa application and prepare for your international journey." }
  ];

  return (
    <div className="services">
      <section className="page-header">
        <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&q=80" alt="" className="page-header__bg-img" />
        <div className="page-header__bg" />
        <div className="container page-header__inner">
          <span className="section-label">Our Expertise</span>
          <h1>Comprehensive<br /><span className="text-gold">Admissions Consulting</span></h1>
          <p className="page-header__desc">From initial profile evaluation to stepping onto campus — modular services giving you a decisive competitive advantage.</p>
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
              <h2>Ready to Begin?</h2>
              <p>Schedule a free initial assessment to understand how our services match your unique profile.</p>
              <Link to="/consultation" className="btn btn-primary btn-lg">
                Book Free Consultation <ArrowRight size={18} />
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
};

export default Services;
