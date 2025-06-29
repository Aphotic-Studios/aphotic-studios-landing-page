import React from 'react';
import './PortfolioSection.css';
import '../shared/AppleComponents.css';

const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Project Aurora",
      category: "Web Application",
      description: "A luminescent e-commerce platform that glows with user engagement",
      status: "Live",
      glow: "primary"
    },
    {
      id: 2,
      title: "Deep Current",
      category: "Mobile App",
      description: "Real-time data visualization flowing through the depths of analytics",
      status: "Development",
      glow: "secondary"
    },
    {
      id: 3,
      title: "Bioluminescence",
      category: "SaaS Platform",
      description: "AI-powered insights that illuminate the darkest corners of business data",
      status: "Coming Soon",
      glow: "accent"
    },
    {
      id: 4,
      title: "Abyssal Console",
      category: "Developer Tools",
      description: "Command-line interface for navigating the deepest development challenges",
      status: "Beta",
      glow: "primary"
    },
    {
      id: 5,
      title: "Midnight Tides",
      category: "Digital Experience",
      description: "Interactive storytelling platform where narratives come alive in the dark",
      status: "Live",
      glow: "secondary"
    },
    {
      id: 6,
      title: "Echo Location",
      category: "IoT Solution",
      description: "Smart sensor network that finds signal in the digital noise",
      status: "Development",
      glow: "accent"
    }
  ];

  return (
    <div className="apple-section">
      {/* Hero Section - Apple massive typography */}
      <header className="apple-hero">
        <div className="apple-hero__content">
          <h1 className="apple-hero__title">
            Our Portfolio
          </h1>
          <p className="apple-hero__subtitle">
            Illuminating the Depths of Digital Innovation
          </p>
        </div>
      </header>
      
      {/* Portfolio Grid - Apple card system */}
      <div className="apple-content-grid--cards portfolio-grid">
        {portfolioItems.map((item) => (
          <article key={item.id} className={`apple-card apple-card--secondary portfolio-card portfolio-card--${item.glow}`}>
            <div className="portfolio-card__content">
              <div className="portfolio-card__header">
                <h3 className="apple-title--tertiary">{item.title}</h3>
                <span className={`portfolio-card__status status--${item.status.toLowerCase().replace(' ', '-')}`}>
                  {item.status}
                </span>
              </div>
              <p className="portfolio-card__category">{item.category}</p>
              <p className="apple-text--base portfolio-card__description">{item.description}</p>
              <div className="portfolio-card__footer">
                <button className="apple-button apple-button--secondary portfolio-card__button">
                  Explore Project
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      {/* CTA Section - Apple minimal approach */}
      <section className="apple-cta">
        <div className="apple-cta__content">
          <h2 className="apple-cta__title">Ready to Create Something Extraordinary?</h2>
          <p className="apple-text--large">Let&apos;s dive into the depths of your next project together.</p>
          <button className="apple-button apple-button--primary cta-button--aphotic">
            Start Your Journey
          </button>
        </div>
      </section>
    </div>
  );
};

export default PortfolioSection;