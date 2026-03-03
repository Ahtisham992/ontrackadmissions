import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SEO from '../common/SEO';

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <SEO />
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
