import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          We Build <span className="hero-accent">Ultra-Fast</span> Interfaces That Drive Revenue
        </h1>
        <p className="hero-subtitle">
          Stop losing clients with slow websites. We develop high-performance React architectures 
          with integrated automated support to scale your business profile instantly.
        </p>
        <div className="hero-actions">
          <a href="https://wa.me/573026668432" target="_blank" rel="noreferrer" className="hero-btn-primary">
            Quote Project
          </a>
          <a href="#features" className="hero-btn-secondary">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
