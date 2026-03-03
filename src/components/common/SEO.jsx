import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../i18n/LanguageContext';

const SEO = ({ title, description, keywords, image, url }) => {
  const { lang, t } = useLanguage();
  
  const siteName = 'On Track Admissions';
  const defaultTitle = `${t('nav.home' || 'Home')} | ${siteName}`;
  const seoTitle = title ? `${title} | ${siteName}` : defaultTitle;
  
  // Default description assuming English if not provided
  const defaultDescription = t('hero.desc' || 'Comprehensive application support for top-tier universities globally.');
  const seoDescription = description || defaultDescription;
  
  const seoImage = image || 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80';
  const seoUrl = url || typeof window !== 'undefined' ? window.location.href : '';

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <html lang={lang} />
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seoUrl} />
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={seoDescription} />
      <meta property="twitter:image" content={seoImage} />
    </Helmet>
  );
};

export default SEO;
