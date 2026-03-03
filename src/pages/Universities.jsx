import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe, ArrowRight, X, MapPin, Award, BookOpen, Users, ExternalLink, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useAnimations';
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
      name: "University of Toronto", abbr: "UofT", country: "Canada", type: "Public Research",
      ranking: "Top 20 Global", color: "#002A5C",
      description: "Canada's largest and most prestigious university, the University of Toronto has three campuses across the Greater Toronto Area and offers over 700 undergraduate and 200 graduate programs.",
      programs: ["Engineering", "Computer Science", "Rotman Commerce", "Life Sciences", "Arts & Science"],
      intlStudents: "27% of student body",
      highlights: ["#1 university in Canada (QS Rankings)", "Located in one of the world's most multicultural cities", "Strong co-op and internship opportunities", "Post-graduation work permit (PGWP) eligibility"],
      website: "https://www.utoronto.ca"
    },
    {
      name: "University of British Columbia", abbr: "UBC", country: "Canada", type: "Public Research",
      ranking: "Top 40 Global", color: "#002145",
      description: "Consistently ranked among the top 40 universities globally, UBC is known for its stunning Vancouver campus, innovative research, and commitment to sustainability.",
      programs: ["Forestry", "Sauder Business", "Engineering", "Sciences", "Arts"],
      intlStudents: "30% of student body",
      highlights: ["One of the most beautiful campuses in the world", "Strong sustainability and climate research", "Co-op programs across all faculties", "Located in Vancouver — top student city globally"],
      website: "https://www.ubc.ca"
    },
    {
      name: "McGill University", abbr: "McGill", country: "Canada", type: "Public Research",
      ranking: "Top 30 Global", color: "#ED1B2F",
      description: "Founded in 1821, McGill University is among the most prestigious in Canada. Located in Montreal, it offers a bilingual cultural experience and world-class academics.",
      programs: ["Medicine", "Law", "Engineering", "Music", "Management"],
      intlStudents: "31% of student body",
      highlights: ["Affordable tuition compared to global peers", "Rich bilingual (English/French) environment", "Strong medical and law programs", "Vibrant multicultural Montreal lifestyle"],
      website: "https://www.mcgill.ca"
    },
    {
      name: "University of Melbourne", abbr: "Melbourne", country: "Australia", type: "Group of Eight",
      ranking: "Top 15 Global", color: "#094183",
      description: "The University of Melbourne is Australia's top-ranked university and a global leader in research intensity, graduate employability, and academic reputation.",
      programs: ["Medicine", "Law", "Engineering", "Business", "Arts"],
      intlStudents: "42% of student body",
      highlights: ["#1 university in Australia", "Melbourne Model provides breadth + depth", "Strong post-study work visa pathways", "Vibrant, multicultural city lifestyle"],
      website: "https://www.unimelb.edu.au"
    },
    {
      name: "University of Sydney", abbr: "Sydney", country: "Australia", type: "Group of Eight",
      ranking: "Top 20 Global", color: "#E64626",
      description: "Australia's first university, established in 1850, the University of Sydney combines tradition with innovation across a beautiful heritage campus.",
      programs: ["Health Sciences", "Engineering", "Business", "Law", "Architecture"],
      intlStudents: "38% of student body",
      highlights: ["Australia's oldest and most iconic university", "Strong graduate employment outcomes", "Beautiful sandstone campus in Sydney", "Extensive exchange and study abroad programs"],
      website: "https://www.sydney.edu.au"
    },
    {
      name: "New York University", abbr: "NYU", country: "USA", type: "Private Research",
      ranking: "Top 30 Global", color: "#57068C",
      description: "NYU is one of the largest private universities in the US, with its main campus in the heart of Manhattan, and global campuses in Abu Dhabi and Shanghai.",
      programs: ["Stern Business", "Tisch Arts", "Law", "Engineering", "Liberal Studies"],
      intlStudents: "33% of student body",
      highlights: ["Located in the heart of New York City", "Global campus network (Abu Dhabi, Shanghai)", "Exceptional arts and business programs", "Strong alumni network in finance and media"],
      website: "https://www.nyu.edu"
    },
    {
      name: "Columbia University", abbr: "Columbia", country: "USA", type: "Ivy League",
      ranking: "Top 15 Global", color: "#B9D9EB",
      description: "An Ivy League institution established in 1754, Columbia is the oldest institution of higher education in New York and one of the most prestigious in the world.",
      programs: ["Engineering", "Journalism", "Business", "Law", "Political Science"],
      intlStudents: "36% of student body",
      highlights: ["Ivy League prestige and network", "Located in Morningside Heights, NYC", "Core Curriculum gives intellectual breadth", "World-class journalism and business schools"],
      website: "https://www.columbia.edu"
    },
    {
      name: "Stanford University", abbr: "Stanford", country: "USA", type: "Private Research",
      ranking: "Top 5 Global", color: "#8C1515",
      description: "Located in the heart of Silicon Valley, Stanford University is renowned for entrepreneurship, technology innovation, and consistently top-ranked academic programs.",
      programs: ["Computer Science", "Engineering", "Business", "Medicine", "Law"],
      intlStudents: "24% of student body",
      highlights: ["The birthplace of Silicon Valley innovation", "Consistently ranked top 5 globally", "Exceptional entrepreneurship ecosystem", "Beautiful 8,180-acre campus in California"],
      website: "https://www.stanford.edu"
    }
  ];

  const filters = ['All', 'UK', 'USA', 'Canada', 'Australia'];
  const filtered = filter === 'All' ? universities : universities.filter(u => u.country === filter);

  return (
    <div className="universities">
      <section className="page-header">
        <img src="https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80" alt="" className="page-header__bg-img" />
        <div className="page-header__bg" />
        <div className="container page-header__inner">
          <span className="section-label">Global Network</span>
          <h1>Supported<br /><span className="text-gold">Universities</span></h1>
          <p className="page-header__desc">Comprehensive application support for hundreds of top-tier institutions. Click any university below to learn more.</p>
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
              <p className="text-muted" style={{ marginBottom: '16px' }}>Don't see your target? We support 500+ institutions globally.</p>
              <Link to="/consultation" className="btn btn-outline-dark">Discuss Your Target Schools</Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {selectedUni && <UniversityModal uni={selectedUni} onClose={() => setSelectedUni(null)} />}
    </div>
  );
};

export default Universities;
