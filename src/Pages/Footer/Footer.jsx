import React, { useEffect, useState } from 'react';
import './Footer.css';  // Importing the external CSS file

const LiveTime = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="live-time">
      {currentTime}
    </div>
  );
};

const Footer = ({ isMobile }) => {
  return (
    <footer className={`footer-container ${isMobile ? 'mobile-margin' : ''}`}>
      <div className="footer-content">
        <div className="reach-out">
          <a
            className="reach-out-link"
            href="/contact"
          >
            Reach out →
          </a>
        </div>

        <div className="footer-text">
          <span className="hidden-sm">
            Prithwi
          </span>
          <span>
            #
          </span>
        </div>

        <LiveTime />
      </div>
    </footer>
  );
};

export default Footer;

