import React from 'react';
import './MissionSection.css';

const MissionSection = () => {
  return (
    <div className="mission-section">
      <div className="mission-section__header">
        <h2 className="mission-section__title">
          Our Mission
        </h2>
        <p className="mission-section__subtitle">
          Navigating the Twilight Zone of Technology
        </p>
      </div>
      
      <div className="mission-section__content">
        <div className="mission-statement">
          <div className="mission-statement__main">
            <p className="mission-statement__text">
              In the disphotic zone of the digital ocean, where light begins to fade and 
              mysteries emerge, we find our purpose. Aphotic Studios exists to bridge the 
              gap between the familiar surface of technology and the profound depths of 
              innovation.
            </p>
            <p className="mission-statement__text">
              We believe that the most transformative solutions exist in the twilight—where 
              conventional thinking meets revolutionary possibilities. Our mission is to 
              guide businesses through this crucial transition zone, helping them discover 
              what lies beneath the surface.
            </p>
          </div>
          
          <div className="mission-pillars">
            <div className="pillar">
              <div className="pillar__icon">🌊</div>
              <h3 className="pillar__title">Innovation</h3>
              <p className="pillar__description">
                Diving deeper than surface-level solutions to discover transformative possibilities
              </p>
            </div>
            
            <div className="pillar">
              <div className="pillar__icon">🔬</div>
              <h3 className="pillar__title">Exploration</h3>
              <p className="pillar__description">
                Venturing into uncharted digital territories where others fear to tread
              </p>
            </div>
            
            <div className="pillar">
              <div className="pillar__icon">🚀</div>
              <h3 className="pillar__title">Excellence</h3>
              <p className="pillar__description">
                Delivering solutions that illuminate the path forward in the digital darkness
              </p>
            </div>
          </div>
        </div>
        
        <div className="mission-vision">
          <h3>Our Vision</h3>
          <p>
            To become the leading guide for organizations ready to explore the depths of 
            digital transformation, where the most profound innovations await discovery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;