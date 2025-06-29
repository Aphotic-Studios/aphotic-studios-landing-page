import React from 'react';
import './MissionSection.css';
import '../shared/AppleComponents.css';

const MissionSection = () => {
  return (
    <div className="apple-section">
      {/* Hero Section - Apple massive typography */}
      <header className="apple-hero">
        <div className="apple-hero__content">
          <h1 className="apple-hero__title">
            Our Mission
          </h1>
          <p className="apple-hero__subtitle">
            Navigating the Twilight Zone of Technology
          </p>
        </div>
      </header>
      
      {/* Apple Asymmetrical Content Grid */}
      <div className="apple-content-grid">
        {/* Primary Mission Statement */}
        <article className="apple-card apple-card--primary mission-card--primary">
          <div className="mission-statement__content">
            <h2 className="apple-title--primary">Our Purpose</h2>
            <p className="apple-text--large">
              In the disphotic zone of the digital ocean, where light begins to fade and 
              mysteries emerge, we find our purpose. Aphotic Studios exists to bridge the 
              gap between the familiar surface of technology and the profound depths of 
              innovation.
            </p>
            <p className="apple-text--large">
              We believe that the most transformative solutions exist in the twilight—where 
              conventional thinking meets revolutionary possibilities. Our mission is to 
              guide businesses through this crucial transition zone, helping them discover 
              what lies beneath the surface.
            </p>
          </div>
        </article>
        
        {/* Vision Card */}
        <aside className="apple-card apple-card--secondary mission-card--vision">
          <h3 className="apple-title--secondary">Our Vision</h3>
          <p className="apple-text--base">
            To become the leading guide for organizations ready to explore the depths of 
            digital transformation, where the most profound innovations await discovery.
          </p>
        </aside>
      </div>
      
      {/* Mission Pillars - Card Grid */}
      <div className="apple-content-grid--cards">
        <article className="apple-card apple-card--tertiary">
          <div className="apple-icon">🌊</div>
          <h3 className="apple-title--tertiary">Innovation</h3>
          <p className="apple-text--base">
            Diving deeper than surface-level solutions to discover transformative possibilities
          </p>
        </article>
        
        <article className="apple-card apple-card--tertiary">
          <div className="apple-icon">🔬</div>
          <h3 className="apple-title--tertiary">Exploration</h3>
          <p className="apple-text--base">
            Venturing into uncharted digital territories where others fear to tread
          </p>
        </article>
        
        <article className="apple-card apple-card--tertiary">
          <div className="apple-icon">🚀</div>
          <h3 className="apple-title--tertiary">Excellence</h3>
          <p className="apple-text--base">
            Delivering solutions that illuminate the path forward in the digital darkness
          </p>
        </article>
      </div>
    </div>
  );
};

export default MissionSection;