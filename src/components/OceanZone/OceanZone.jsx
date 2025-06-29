import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './OceanZone.css';

const OceanZone = ({ 
  zone, 
  children, 
  className = '', 
  onZoneEnter, 
  onZoneExit 
}) => {
  const zoneRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Update CSS variables when zone enters viewport
            const root = document.documentElement;
            switch (zone) {
              case 'surface':
                root.style.setProperty('--current-primary', 'var(--surface-primary)');
                root.style.setProperty('--current-secondary', 'var(--surface-secondary)');
                root.style.setProperty('--current-accent', 'var(--surface-accent)');
                root.style.setProperty('--current-text', 'var(--surface-text)');
                root.style.setProperty('--current-bg', 'var(--surface-bg)');
                break;
              case 'euphotic':
                root.style.setProperty('--current-primary', 'var(--euphotic-primary)');
                root.style.setProperty('--current-secondary', 'var(--euphotic-secondary)');
                root.style.setProperty('--current-accent', 'var(--euphotic-accent)');
                root.style.setProperty('--current-text', 'var(--euphotic-text)');
                root.style.setProperty('--current-bg', 'var(--euphotic-bg)');
                break;
              case 'disphotic':
                root.style.setProperty('--current-primary', 'var(--disphotic-primary)');
                root.style.setProperty('--current-secondary', 'var(--disphotic-secondary)');
                root.style.setProperty('--current-accent', 'var(--disphotic-accent)');
                root.style.setProperty('--current-text', 'var(--disphotic-text)');
                root.style.setProperty('--current-bg', 'var(--disphotic-bg)');
                break;
              case 'aphotic':
                root.style.setProperty('--current-primary', 'var(--aphotic-primary)');
                root.style.setProperty('--current-secondary', 'var(--aphotic-secondary)');
                root.style.setProperty('--current-accent', 'var(--aphotic-accent)');
                root.style.setProperty('--current-text', 'var(--aphotic-text)');
                root.style.setProperty('--current-bg', 'var(--aphotic-bg)');
                break;
            }
            
            if (onZoneEnter) onZoneEnter(zone);
          } else {
            if (onZoneExit) onZoneExit(zone);
          }
        });
      },
      {
        threshold: [0.1, 0.3, 0.5, 0.7, 0.9], // Multiple thresholds for smoother transitions
        rootMargin: '-20% 0px -20% 0px' // More sensitive triggering
      }
    );

    if (zoneRef.current) {
      observer.observe(zoneRef.current);
    }

    return () => observer.disconnect();
  }, [zone, onZoneEnter, onZoneExit]);

  return (
    <section 
      ref={zoneRef}
      className={`ocean-zone ocean-zone--${zone} ${className}`}
      data-zone={zone}
    >
      <div className="ocean-zone__content">
        {children}
      </div>
    </section>
  );
};

OceanZone.propTypes = {
  zone: PropTypes.oneOf(['surface', 'euphotic', 'disphotic', 'aphotic']).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onZoneEnter: PropTypes.func,
  onZoneExit: PropTypes.func
};

export default OceanZone;