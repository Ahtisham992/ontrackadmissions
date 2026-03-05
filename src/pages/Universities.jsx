import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe, ArrowRight, X, MapPin, Award, BookOpen, Users, ExternalLink, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useAnimations';
import { useLanguage } from '../i18n/LanguageContext';
import './Universities.css';

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

const UniversityModal = ({ uni, onClose }) => {
  const { t } = useLanguage();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  if (!uni) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content uni-modal" onClick={(e) => e.stopPropagation()}>
        <button className="uni-modal__close" onClick={onClose}><X size={20} /></button>

        <div className="uni-modal__header" style={{ background: uni.color }}>
          <span className="uni-modal__abbr">{uni.abbr}</span>
          <h2 className="uni-modal__name">{uni.name}</h2>
          <div className="uni-modal__badges">
            <span className="uni-modal__badge"><MapPin size={14} /> {uni.country}</span>
            <span className="uni-modal__badge"><Award size={14} /> {uni.ranking}</span>
          </div>
        </div>

        <div className="uni-modal__body">
          <p className="uni-modal__desc">{uni.description}</p>

          <div className="uni-modal__details">
            <div className="uni-modal__detail">
              <Globe size={18} />
              <div>
                <strong>Classification</strong>
                <span>{uni.type}</span>
              </div>
            </div>
            <div className="uni-modal__detail">
              <BookOpen size={18} />
              <div>
                <strong>Popular Programs</strong>
                <span>{uni.programs.join(', ')}</span>
              </div>
            </div>
            <div className="uni-modal__detail">
              <Users size={18} />
              <div>
                <strong>International Students</strong>
                <span>{uni.intlStudents}</span>
              </div>
            </div>
          </div>

          <div className="uni-modal__highlights">
            <h4>Why Students Choose {uni.abbr}</h4>
            <ul>
              {uni.highlights.map((h, i) => (
                <li key={i}><CheckCircle size={16} /> {h}</li>
              ))}
            </ul>
          </div>

          <div className="uni-modal__actions">
            <Link to="/consultation" className="btn btn-primary" onClick={onClose}>
              Evaluate My Chances <ArrowRight size={16} />
            </Link>
            <a href={uni.website} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
              Visit Website <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Universities = () => {
  const [filter, setFilter] = useState('All');
  const [selectedUni, setSelectedUni] = useState(null);

  const universities = [
    {
      name: "University of Oxford", abbr: "Oxford", country: "UK", type: "Russell Group",
      ranking: "Top 5 Global", color: "#002147",
      description: "The University of Oxford is the oldest university in the English-speaking world, with evidence of teaching dating back to 1096. It consistently ranks among the top 5 universities globally.",
      programs: ["PPE", "Medicine", "Law", "Computer Science", "Engineering"],
      intlStudents: "45% of student body",
      highlights: ["Tutorial-based teaching system unique to Oxford", "One of the largest libraries in the world", "98% graduate employment within 6 months", "World-leading research across all disciplines"],
      website: "https://www.ox.ac.uk"
    },
    {
      name: "University College London", abbr: "UCL", country: "UK", type: "Russell Group",
      ranking: "Top 10 Global", color: "#500778",
      description: "UCL is London's leading multidisciplinary university, with over 13,000 staff and 42,000 students from 150 different countries. It was the first university in England to welcome students of any religion.",
      programs: ["Architecture", "Medicine", "Education", "Data Science", "Economics"],
      intlStudents: "52% of student body",
      highlights: ["Located in the heart of London (Bloomsbury)", "8th in QS World University Rankings", "Consistently high research funding", "Strong industry partnerships across sectors"],
      website: "https://www.ucl.ac.uk"
    },
    {
      name: "Imperial College London", abbr: "Imperial", country: "UK", type: "Russell Group",
      ranking: "Top 10 Global", color: "#003E74",
      description: "Specializing in science, engineering, medicine, and business, Imperial is one of the most prestigious STEM-focused universities globally, located in South Kensington, London.",
      programs: ["Engineering", "Computing", "Medicine", "Physics", "Business"],
      intlStudents: "60% of student body",
      highlights: ["UK's leading STEM university", "Top 3 in the UK for graduate salaries", "State-of-the-art research laboratories", "Strong Silicon Valley & City of London connections"],
      website: "https://www.imperial.ac.uk"
    },
    {
      name: "University of Edinburgh", abbr: "Edinburgh", country: "UK", type: "Russell Group",
      ranking: "Top 20 Global", color: "#6B2C57",
      description: "Founded in 1583, the University of Edinburgh is the sixth-oldest university in the English-speaking world and one of Scotland's ancient universities.",
      programs: ["AI & Machine Learning", "Medicine", "Law", "Veterinary Science", "Business"],
      intlStudents: "47% of student body",
      highlights: ["World-leading AI and informatics school", "Beautiful historic campus in Edinburgh", "Outstanding student city experience", "Strong graduate employability record"],
      website: "https://www.ed.ac.uk"
    },
    {
      name: "University of Manchester", abbr: "Manchester", country: "Russell Group", type: "Russell Group",
      ranking: "Top 30 Global", color: "#660099",
      description: "The University of Manchester is a public research university and a member of the prestigious Russell Group. It's one of the largest universities in the UK with over 40,000 students from 170 countries.",
      programs: ["Business", "Engineering", "Medicine", "Computer Science", "Social Sciences"],
      intlStudents: "35% of student body",
      highlights: ["25 Nobel Prize laureates among staff and alumni", "Strong industry links across the North of England", "#1 in the UK for graduate employability (non-London)", "Vibrant student city with affordable cost of living"],
      website: "https://www.manchester.ac.uk"
    },
    {
      name: "King's College London", abbr: "KCL", country: "London", type: "Russell Group",
      ranking: "Top 40 Global", color: "#990000",
      description: "King's College London is one of the top 40 universities in the world and the fourth oldest in England. Located in the heart of London, it offers exceptional academics with unrivalled connections to industry and government.",
      programs: ["Law", "Medicine", "Nursing", "Business", "War Studies"],
      intlStudents: "50% of student body",
      highlights: ["Exceptional London location across 5 campuses", "Ranked #1 in the UK for Law", "World-leading medical and nursing schools", "Strong links with Parliament, NHS & top law firms"],
      website: "https://www.kcl.ac.uk"
    },
    {
      name: "London School of Economics", abbr: "LSE", country: "London", type: "Russell Group",
      ranking: "Top 50 Global", color: "#B22222",
      description: "LSE is a world-leading social science university specialising in economics, politics, law and sociology. It attracts students and academics from around the globe and has an extraordinary alumni network.",
      programs: ["Economics", "Finance", "Politics", "Law", "Sociology"],
      intlStudents: "70% of student body",
      highlights: ["#1 globally for Social Sciences (QS Rankings)", "Exceptional alumni: 18 world leaders, 35 Nobel laureates", "Unrivalled London networking and placement opportunities", "Specialist focus makes graduates highly sought after"],
      website: "https://www.lse.ac.uk"
    },
    {
      name: "University of Glasgow", abbr: "Glasgow", country: "Scotland", type: "Russell Group",
      ranking: "Top 100 Global", color: "#003865",
      description: "Established in 1451, the University of Glasgow is one of the ancient universities of Scotland and a founding member of Universitas 21. It is consistently ranked in the top 100 universities worldwide.",
      programs: ["Medicine", "Engineering", "Business", "Arts", "Veterinary Medicine"],
      intlStudents: "30% of student body",
      highlights: ["Scotland's most international university", "World-class research output", "Beautiful Gothic campus in Glasgow's West End", "Affordable tuition fees significantly lower than England"],
      website: "https://www.gla.ac.uk"
    },
    {
      name: "University of Bristol", abbr: "Bristol", country: "Russell Group", type: "Russell Group",
      ranking: "Top 60 Global", color: "#B01C2E",
      description: "The University of Bristol is consistently ranked among the top 10 UK universities. Its beautiful Clifton campus combines rich academic heritage with a vibrant student city experience.",
      programs: ["Engineering", "Law", "Medicine", "Computer Science", "Film & Television"],
      intlStudents: "36% of student body",
      highlights: ["Ranked top 10 in the UK (QS 2024)", "Strong employer reputation — top UK graduate recruiters", "Beautiful city campus in Clifton, Bristol", "Leading research in aerospace, quantum computing & sustainable energy"],
      website: "https://www.bristol.ac.uk"
    },
    {
      name: "University of Warwick", abbr: "Warwick", country: "Russell Group", type: "Russell Group",
      ranking: "Top 70 Global", color: "#6B2C91",
      description: "The University of Warwick is one of the UK's leading research-intensive universities, known for exceptional business, engineering, and mathematics departments.",
      programs: ["Business & Management", "Computer Science", "Mathematics", "Law", "Engineering"],
      intlStudents: "40% of student body",
      highlights: ["Warwick Business School ranked #1 in the UK", "Consistently high graduate employability rates", "Award-winning arts centre", "Strong start-up and entrepreneurship culture"],
      website: "https://www.warwick.ac.uk"
    },
    {
      name: "University of Leeds", abbr: "Leeds", country: "Russell Group", type: "Russell Group",
      ranking: "Top 100 Global", color: "#003B7A",
      description: "The University of Leeds is one of the largest Russell Group universities in the UK, with over 38,000 students. It is known for its research excellence and strong graduate employment outcomes.",
      programs: ["Medicine", "Law", "Business", "Engineering", "Fashion & Design"],
      intlStudents: "30% of student body",
      highlights: ["Ranked top 5 in the UK for research power", "Brilliant student city with low cost of living", "95% of graduates in work or further study within 6 months", "Excellent global alumni network"],
      website: "https://www.leeds.ac.uk"
    },
    {
      name: "Durham University", abbr: "Durham", country: "Russell Group", type: "Russell Group",
      ranking: "Top 100 Global", color: "#7B2D8B",
      description: "Durham University is one of the oldest and most prestigious universities in England. Its collegiate system and stunning cathedral city location make it a unique and sought-after destination.",
      programs: ["Law", "Business", "Sciences", "Arts & Humanities", "Engineering"],
      intlStudents: "26% of student body",
      highlights: ["Collegiate lifestyle similar to Oxford and Cambridge", "Stunning UNESCO World Heritage campus", "Top 10 in the UK for student satisfaction", "Strong international reputation for Law and Business"],
      website: "https://www.durham.ac.uk"
    }
  ];

  const filters = ['All', 'Russell Group', 'London', 'Scotland'];
  const filtered = filter === 'All' ? universities : universities.filter(u => u.country === filter);

  return (
    <div className="universities">
      <section className="page-header">
        <img src="https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80" alt="" className="page-header__bg-img" />
        <div className="page-header__bg" />
        <div className="container page-header__inner">
          <span className="section-label">UK University Network</span>
          <h1>Top UK<br /><span className="text-gold">Universities</span></h1>
          <p className="page-header__desc">Specialist application support for the UK's finest institutions — from ancient Oxbridge colleges to world-leading London universities. Click any card to learn more.</p>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="uni-controls">
            <div className="uni-filters">
              {filters.map(f => (
                <button key={f} className={`uni-filter-btn ${filter === f ? 'uni-filter-btn--active' : ''}`} onClick={() => setFilter(f)}>
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="uni-grid">
            {filtered.map((u, i) => (
              <RevealSection key={`${u.abbr}-${filter}`} delay={i * 0.05}>
                <div className="uni-card card" onClick={() => setSelectedUni(u)} role="button" tabIndex={0}>
                  <div className="uni-card__logo" style={{ background: u.color }}>
                    <span>{u.abbr}</span>
                  </div>
                  <div className="uni-card__body">
                    <div className="uni-card__meta">
                      <span className="uni-card__country">{u.country}</span>
                      <span className="uni-card__ranking">{u.ranking}</span>
                    </div>
                    <h3 className="uni-card__name">{u.name}</h3>
                    <div className="uni-card__type"><Globe size={14} /> {u.type}</div>
                  </div>
                  <div className="uni-card__link">
                    View Details <ArrowRight size={14} />
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>

          <RevealSection>
            <div className="text-center" style={{ marginTop: '48px' }}>
              <p className="text-muted" style={{ marginBottom: '16px' }}>Don't see your target UK university listed? We support 100+ UK institutions across England, Scotland, Wales & Northern Ireland.</p>
              <Link to="/consultation" className="btn btn-outline-dark">Book a Free UK Admissions Consultation</Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {selectedUni && <UniversityModal uni={selectedUni} onClose={() => setSelectedUni(null)} />}
    </div>
  );
};

export default Universities;
