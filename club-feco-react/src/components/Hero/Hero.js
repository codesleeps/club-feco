import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div
        className="hero-background"
        style={{
          backgroundImage: `url('/images/img/logo/hero2_501x301.webp')`
        }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <div className="hero-text-wrapper">
              <div className="hero-text-bg">Club Feco</div>
              <div className="hero-text-fg">Club Feco</div>
            </div>

            <a
              href="https://www.bccannabisstores.com/"
              target="_blank"
              className="hero-button"
              rel="noopener noreferrer"
            >
              <h1>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                welcome
              </h1>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;