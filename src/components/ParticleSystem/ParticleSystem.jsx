import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './ParticleSystem.css';

const ParticleSystem = ({ zone, particleCount = 20 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear existing particles
    container.innerHTML = '';

    // Create particles based on zone
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = `particle particle--${zone}`;
      
      // Random positioning
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 10}s`;
      particle.style.animationDuration = `${8 + Math.random() * 12}s`;
      
      // Zone-specific particle sizes
      const size = getParticleSize(zone);
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      container.appendChild(particle);
    }
  }, [zone, particleCount]);

  const getParticleSize = (zone) => {
    switch (zone) {
      case 'surface':
        return 3 + Math.random() * 8; // Bubbles and foam
      case 'euphotic':
        return 2 + Math.random() * 6; // Marine particles
      case 'disphotic':
        return 1 + Math.random() * 4; // Smaller organic matter
      case 'aphotic':
        return 1 + Math.random() * 3; // Bioluminescent specks
      default:
        return 3;
    }
  };

  return (
    <div 
      ref={containerRef} 
      className={`particle-system particle-system--${zone}`}
      aria-hidden="true"
      role="presentation"
      aria-label={`Decorative ${zone} zone particles`}
    />
  );
};

ParticleSystem.propTypes = {
  zone: PropTypes.oneOf(['surface', 'euphotic', 'disphotic', 'aphotic']).isRequired,
  particleCount: PropTypes.number
};

export default ParticleSystem;