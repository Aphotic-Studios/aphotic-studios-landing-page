import React from "react";
import OceanZone from "./components/OceanZone/OceanZone";
import ParticleSystem from "./components/ParticleSystem/ParticleSystem";
import AboutSection from "./components/AboutSection/AboutSection";
import MissionSection from "./components/MissionSection/MissionSection";
import PortfolioSection from "./components/PortfolioSection/PortfolioSection";
import "./App.css";

function App() {
  return (
    <div className="app">
      <OceanZone zone="surface">
        <ParticleSystem zone="surface" particleCount={20} />
        <AboutSection />
      </OceanZone>
      
      <OceanZone zone="euphotic">
        <ParticleSystem zone="euphotic" particleCount={18} />
        <div className="euphotic-transition">
          <h2 className="zone-transition-text">Descending into the depths...</h2>
        </div>
      </OceanZone>
      
      <div className="zone-buffer zone-buffer--euphotic-to-disphotic">
        <ParticleSystem zone="disphotic" particleCount={8} />
      </div>
      
      <OceanZone zone="disphotic">
        <ParticleSystem zone="disphotic" particleCount={15} />
        <MissionSection />
      </OceanZone>
      
      <div className="zone-buffer zone-buffer--disphotic-to-aphotic">
        <ParticleSystem zone="aphotic" particleCount={6} />
      </div>
      
      <OceanZone zone="aphotic">
        <ParticleSystem zone="aphotic" particleCount={12} />
        <PortfolioSection />
      </OceanZone>
    </div>
  );
}

export default App;
