import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Universities from './pages/Universities';
import SuccessStories from './pages/SuccessStories';
import Consultation from './pages/Consultation';

function App() {
  return (
    <Router>
      <ScrollToTop />
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
    </Router>
  );
}

export default App;
