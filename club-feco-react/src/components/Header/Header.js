import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Approximate height of fixed header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Mobile menu toggle */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars text-warning"></i>
          </button>

          {/* Navigation menu */}
          <div className={`navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => scrollToSection('smokeless')}
                  aria-label="Read more about our CBD smokeless products here"
                >
                  Oils
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => scrollToSection('cocktails')}
                  aria-label="Read more about our CBD cocktails here"
                >
                  Topicals
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => scrollToSection('chocolates')}
                  aria-label="Read more about our CBD edibles here"
                >
                  Edibles
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => scrollToSection('shots')}
                  aria-label="Read more about our CBD shots here"
                >
                  Shots
                </button>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="nav-link"
                  onClick={() => scrollToSection('honey')}
                  aria-label="Read more about CBD vapes and honey products"
                >
                  Vapes
                </button>
              </li>
            </ul>
          </div>

          {/* Right side - Logo */}
          <div className="navbar-logo">
            <div className="dropdown">
              <button
                className="dropdown-toggle logo-button"
                aria-label="Brand Logo"
              >
                <img
                  src="/images/img/logo/logo113x113.png"
                  className="logo-image"
                  alt="Brand Logo gold lion head with crown"
                  loading="lazy"
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;