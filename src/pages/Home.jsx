import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle, Globe, GraduationCap, Users,
  Award, BookOpen, Star, TrendingUp, Briefcase, Shield,
  ChevronDown, ChevronUp, MapPin, Clock
} from 'lucide-react';
import { useScrollReveal, useAnimatedCounter } from '../hooks/useAnimations';
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

  const faqs = [
    { q: "Who is On Track Admissions for?", a: "We help students aged 17–30 who are looking to apply to international universities in the UK, USA, Canada, Australia, and Europe. We also support parents seeking guidance for their children." },
    { q: "How does the free consultation work?", a: "After submitting your details, an expert consultant is assigned to your profile. Within 24 hours, you'll receive an email to book a 30-minute discovery call where we evaluate your goals and create a preliminary roadmap." },
    { q: "Do you guarantee university admission?", a: "No ethical consultancy can guarantee admission. What we guarantee is a meticulously crafted application strategy that maximises your chances, backed by our 98% historical acceptance rate." },
    { q: "How much do your services cost?", a: "Our packages vary depending on the number of universities, services required, and destination country. We offer transparent pricing starting from a single personal statement review up to comprehensive end-to-end support." },
    { q: "Can you help with scholarship applications?", a: "Yes! Scholarship identification and application guidance is one of our core services. We've helped students secure over $2M in scholarship funding collectively." }
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
            <span className="section-label">Global Education Consultancy</span>
            <h1 className="hero__title">
              Your Global Future<br />
              <span className="text-gold">Starts Here.</span>
            </h1>
            <p className="hero__subtitle">
              Strategic admissions consulting for ambitious students targeting
              top universities across the UK, USA, Canada, Australia &amp; Europe.
              Trusted by 500+ students worldwide.
            </p>
            <div className="hero__cta">
              <Link to="/consultation" className="btn btn-primary btn-lg">
                Book Free Consultation <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn btn-outline btn-lg">
                Explore Services
              </Link>
            </div>
            <div className="hero__trust-badges">
              <div className="hero__badge"><CheckCircle size={16} /> 98% Acceptance Rate</div>
              <div className="hero__badge"><Clock size={16} /> Response within 24hrs</div>
              <div className="hero__badge"><Shield size={16} /> Free Initial Consultation</div>
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
                  <span>Acceptance Rate</span>
                </div>
              </div>
              <div className="hero__card hero__card--badge">
                <Award size={20} />
                <span>500+ Students Placed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TRUST BAR ═══ */}
      <section className="trust-bar">
        <div className="container">
          <div className="trust-bar__inner">
            <span className="trust-bar__label">Students accepted at</span>
            <div className="trust-bar__logos">
              {['Oxford', 'Cambridge', 'MIT', 'Stanford', 'UCL', 'Toronto', 'Melbourne'].map((uni) => (
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
              <span className="section-label" style={{ justifyContent: 'center' }}>What We Do</span>
              <h2>End-to-End Admissions<br />Support</h2>
              <p className="section-desc">Comprehensive guidance from university selection to visa approval, designed to maximise your chances at the world's most competitive institutions.</p>
            </div>
          </RevealSection>

          <div className="services-grid">
            {[
              { icon: <BookOpen size={28} />, title: "University Selection", desc: "Data-driven matching to find institutions aligned with your academic profile, budget, and career ambitions.", img: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80" },
              { icon: <Briefcase size={28} />, title: "Application Strategy", desc: "Expert management of timelines, documents, and narratives across Common App, UCAS, OUAC, and more.", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80" },
              { icon: <TrendingUp size={28} />, title: "Personal Statement", desc: "Compelling, authentic essays reviewed by former admissions officers from top global universities.", img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80" },
              { icon: <Users size={28} />, title: "Interview Preparation", desc: "Intensive mock sessions covering behavioural, technical, and program-specific interview formats.", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80" },
              { icon: <Globe size={28} />, title: "Visa & Relocation", desc: "Meticulous visa documentation and pre-departure briefings for a seamless international transition.", img: "https://remote.com/hubfs/Remote%20Website%20-%202025/(Approved)%20Blog%20Images/Blog%20Images/Immigration%20%26%20Visas.png" },
              { icon: <Shield size={28} />, title: "Scholarship Guidance", desc: "Strategic scholarship identification and application support to reduce your financial burden.", img: "https://media.istockphoto.com/id/1161001258/photo/scholarship-cap-magnified.jpg?s=2048x2048&w=is&k=20&c=yl9K3bNuFlYfUkL-zmvVyLYtmeAkhM7udQyWczCoplo=" }
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
                      Learn more <ArrowRight size={14} />
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
              <span className="section-label">Why On Track</span>
              <h2>Why Students &amp; Parents<br />Trust Us</h2>
              <p className="why-desc">
                We combine insider admissions knowledge with personalised strategy to give every student an authentic competitive edge — not templates, not generic advice.
              </p>
              <ul className="why-list">
                {[
                  "Former admissions officers from Russell Group & Ivy League universities.",
                  "Personalised 1-on-1 strategy sessions tailored to your unique profile.",
                  "Proven methodology with a 98% university acceptance rate.",
                  "Transparent pricing with no hidden costs or surprise upsells.",
                  "Support for students from 30+ countries across Asia, Middle East & Africa."
                ].map((item, i) => (
                  <li key={i}>
                    <CheckCircle size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn btn-outline-dark" style={{ marginTop: '24px' }}>
                About Our Team <ArrowRight size={16} />
              </Link>
            </RevealSection>

            <RevealSection delay={0.2}>
              <div className="stats-panel">
                <div className="stats-grid">
                  <AnimatedStat value="500" label="Students Placed" suffix="+" />
                  <AnimatedStat value="2" label="Scholarships Won" suffix="M+" />
                  <AnimatedStat value="15" label="Countries Served" suffix="+" />
                  <AnimatedStat value="98" label="Visa Success Rate" suffix="%" />
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

      {/* ═══ DESTINATIONS ═══ */}
      <section className="section destinations-section">
        <div className="container">
          <RevealSection>
            <div className="section-header text-center">
              <span className="section-label" style={{ justifyContent: 'center' }}>Study Destinations</span>
              <h2 className="text-white">Your Dream Destination,<br /><span className="text-gold">Within Reach</span></h2>
            </div>
          </RevealSection>

          <div className="dest-grid">
            {[
              { country: 'United Kingdom', count: '120+ Universities', img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80' },
              { country: 'United States', count: '200+ Universities', img: 'https://thispriceisusuallyright.com/wp-content/uploads/2014/09/new-york-2.jpg' },
              { country: 'Canada', count: '80+ Universities', img: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&q=80' },
              { country: 'Australia', count: '40+ Universities', img: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600&q=80' }
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
              View All Universities <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="section bg-light">
        <div className="container">
          <RevealSection>
            <div className="section-header text-center">
              <span className="section-label" style={{ justifyContent: 'center' }}>Testimonials</span>
              <h2>What Our Students Say</h2>
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
                quote: "As an international student, the US system was daunting. The team secured me a significant scholarship at NYU and handled my visa documentation flawlessly.",
                name: "Chen Wei",
                origin: "Beijing, China",
                uni: "New York University",
                initials: "CW",
                color: "var(--navy-600)"
              },
              {
                quote: "I wouldn't have gotten into the University of Toronto without On Track. Their strategy for the supplementary application was a game-changer.",
                name: "Priya Sharma",
                origin: "New Delhi, India",
                uni: "University of Toronto",
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
              Read All Stories <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="section">
        <div className="container">
          <div className="faq-layout">
            <RevealSection className="faq-header">
              <span className="section-label">Common Questions</span>
              <h2>Frequently Asked<br />Questions</h2>
              <p className="text-muted">Can't find your answer here? Book a free consultation and we'll help you directly.</p>
              <Link to="/consultation" className="btn btn-secondary" style={{ marginTop: '24px' }}>
                Ask Us Directly
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
            <h2>Ready to Accelerate Your<br /><span className="text-gold">Global Journey?</span></h2>
            <p>Schedule a complimentary strategy session with our senior consultants and get a personalised admissions roadmap.</p>
            <Link to="/consultation" className="btn btn-primary btn-lg">
              Book Your Free Session <ArrowRight size={18} />
            </Link>
          </RevealSection>
        </div>
      </section>

    </div>
  );
};

export default Home;
