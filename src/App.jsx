import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { initGA, logPageView } from './services/analytics';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/layout/Layout';
import { LanguageProvider } from './i18n/LanguageContext';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Universities from './pages/Universities';
import SuccessStories from './pages/SuccessStories';
import Consultation from './pages/Consultation';

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    logPageView(location.pathname + location.search);
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnalyticsTracker />
      <LanguageProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/universities" element={<Universities />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/consultation" element={<Consultation />} />
          </Routes>
        </Layout>
      </LanguageProvider>
    </Router>
  );
}

export default App;
