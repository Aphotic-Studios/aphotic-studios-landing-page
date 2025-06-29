import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-section__header">
        <h1 className="about-section__title">
          Aphotic Studios
        </h1>
        <p className="about-section__subtitle">
          Diving Deep Into Digital Innovation
        </p>
      </div>
      
      <div className="about-section__content">
        <div className="about-section__card">
          <h2>Who We Are</h2>
          <p>
            Welcome to the surface of our digital ocean. Aphotic Studios is a cutting-edge 
            software development company that specializes in creating immersive digital 
            experiences that go deeper than conventional solutions.
          </p>
          <p>
            Like the ocean zones that inspire our name, we believe in exploring the depths 
            of possibility, from the bright surface ideas to the mysterious depths where 
            true innovation lives.
          </p>
        </div>
        
        <div className="about-section__card">
          <h2>Our Expertise</h2>
          <div className="about-section__expertise">
            <div className="expertise-item">
              <h3>Web Applications</h3>
              <p>Full-stack solutions that make waves</p>
            </div>
            <div className="expertise-item">
              <h3>Mobile Development</h3>
              <p>Apps that dive deep into user experience</p>
            </div>
            <div className="expertise-item">
              <h3>Digital Innovation</h3>
              <p>Exploring uncharted digital territories</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="about-section__cta">
        <p>Ready to explore the depths of digital possibility?</p>
        <button className="cta-button">
          Dive Deeper
        </button>
      </div>
    </div>
  );
};

export default AboutSection;