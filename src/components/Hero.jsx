import React, { useRef, useState, useEffect } from 'react';
import './Hero.css';
import heroImage from '../assets/image.png';

const logos = [
  { src: require('../assets/company/image1.png'), alt: 'Zapier' },
  { src: require('../assets/company/image2.png'), alt: 'Inframail' },
  { src: require('../assets/company/image3.png'), alt: 'Twilio' },
  { src: require('../assets/company/image4.png'), alt: 'Asana' },
  { src: require('../assets/company/image5.png'), alt: 'Instantly' },
];

const Hero = () => {
  const logosRef = useRef(null);
  const [animationDuration, setAnimationDuration] = useState(20);

  useEffect(() => {
    if (logosRef.current) {
      const logosWidth = logosRef.current.scrollWidth / 3; // width of one set of logos
      const speed = 150; // pixels per second, increased speed for faster scroll
      const duration = logosWidth / speed;
      setAnimationDuration(duration);
    }
  }, []);

  // Render logos array multiple times for seamless scroll
  const renderLogos = (times) => {
    let items = [];
    for (let i = 0; i < times; i++) {
      items = items.concat(
        logos.map((logo, index) => (
          <img key={`${logo.alt}-${i}-${index}`} src={logo.src} alt={logo.alt} />
        ))
      );
    }
    return items;
  };

  return (
    <main>
      <section id="home" className="section hero-section">
        <h1>
          Acces 400M+ Verified B2B Leads from Apollo, LinkedIn &amp; Find and Close Your Next <em>big deal</em>
        </h1>
        <p className="hero-subtitle">
          Get 400M+ Verified B2B Leads for Just $99 &amp; Start Closing High-Paying Deals! One time, Lifetime Access
        </p>
        <div className='bulb'>
          {/* Gradient circles behind hero image */}
          <div className="hero-gradient-circle orange"></div>
          <div className="hero-gradient-circle blue"></div>
          
          <img
            src={heroImage}
            alt="Verified B2B Leads"
            className="hero-image"
          />
        </div>
      </section>
      <section className="ultimate-leads-section">
        <h2>Ultimate B2B Leads Database 🚀</h2>
        <p>
          Find &amp; Close High-Ticket Clients with Verified Data from{' '}
          <span className="highlight">Apollo, LinkedIn, People Data Labs</span> &amp; More!
        </p>
        <a
          href="https://www.paypal.com/ncp/payment/2TRZCQMYYRCWY"
          target="_blank"
          rel="noopener noreferrer"
          className="access-button"
        >
          Get Instant Access Now - Only $99 &rarr;
        </a>
      </section>
      <div className="partner-logos-wrapper">
        <section
          className="partner-logos-section"
          ref={logosRef}
          style={{ animationDuration: `${animationDuration}s` }}
        >
          {renderLogos(3)}
        </section>
      </div>
    </main>
  );
};

export default Hero;