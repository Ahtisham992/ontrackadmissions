import ReactGA from 'react-ga4';

// Replace with your Google Analytics Measurement ID (G-XXXXXXXXXX)
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; 

export const initGA = () => {
  if (GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    ReactGA.initialize(GA_MEASUREMENT_ID);
    console.log('Analytics initialized');
  }
};

export const logPageView = (path) => {
  if (GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    ReactGA.send({ hitType: "pageview", page: path });
  }
};

export const logEvent = (category, action, label = '') => {
  if (GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    ReactGA.event({
      category,
      action,
      label
    });
  }
};
