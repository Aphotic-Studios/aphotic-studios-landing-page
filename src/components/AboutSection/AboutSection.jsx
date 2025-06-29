import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <div className="about-section">
      {/* Hero Section - Apple-style massive focus */}
      <header className="hero">
        <div className="hero__content">
          <h1 className="hero__title">
            Aphotic Studios
          </h1>
          <p className="hero__subtitle">
            Diving deep into digital innovation
          </p>
        </div>
      </header>
      
      {/* Content Grid - Apple asymmetrical layout */}
      <div className="content-grid">
        {/* Primary Feature Card - Large, left-aligned */}
        <article className="feature-card feature-card--primary">
          <div className="feature-card__content">
            <h2 className="feature-card__title">Who We Are</h2>
            <p className="feature-card__description">
              Aphotic Studios is a cutting-edge software development company that specializes 
              in creating immersive digital experiences. We explore the depths of possibility, 
              from bright surface ideas to the mysterious depths where true innovation lives.
            </p>
          </div>
        </article>
        
        {/* Secondary Cards - Smaller, purposeful */}
        <div className="feature-cards-secondary">
          <article className="feature-card feature-card--secondary">
            <div className="feature-card__icon">🌊</div>
            <h3 className="feature-card__title">Web Applications</h3>
            <p className="feature-card__description">
              Full-stack solutions that make waves
            </p>
          </article>
          
          <article className="feature-card feature-card--secondary">
            <div className="feature-card__icon">📱</div>
            <h3 className="feature-card__title">Mobile Development</h3>
            <p className="feature-card__description">
              Apps that dive deep into user experience
            </p>
          </article>
          
          <article className="feature-card feature-card--secondary">
            <div className="feature-card__icon">🚀</div>
            <h3 className="feature-card__title">Digital Innovation</h3>
            <p className="feature-card__description">
              Exploring uncharted digital territories
            </p>
          </article>
        </div>
      </div>
      
      {/* CTA Section - Apple minimalist approach */}
      <section className="cta-section">
        <div className="cta-section__content">
          <h2 className="cta-section__title">Ready to explore the depths?</h2>
          <button className="cta-button">
            Start Your Journey
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;