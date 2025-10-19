import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Social media section */}
      <section className="social-media-section">
        <div className="container">
          <div className="social-content">
            <div className="social-text">
              <span>Get connected with us on social networks:</span>
            </div>

            <div className="social-links">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="social-link"
                rel="noopener noreferrer"
                aria-label="Read more on social media"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com/cannavissyrup"
                target="_blank"
                className="social-link"
                rel="noopener noreferrer"
                aria-label="Read more on social media"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://oaksterdamuniversity.com/feco-distillate-isolate-whats-the-difference/"
                target="_blank"
                className="social-link"
                rel="noopener noreferrer"
                aria-label="Read more on social media"
              >
                <i className="fab fa-google"></i>
              </a>
              <a
                href="https://www.instagram.com/unitedpatientsgroup/"
                target="_blank"
                className="social-link"
                rel="noopener noreferrer"
                aria-label="Read more on social media"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCQNsgOEAzItPZzkjZZw5LwA"
                target="_blank"
                className="social-link"
                rel="noopener noreferrer"
                aria-label="Read more on social media"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Links section */}
      <section className="footer-links-section">
        <div className="container">
          <div className="footer-content">
            {/* Company info */}
            <div className="footer-column">
              <h4 className="footer-heading">
                <i className="fas fa-gem me-3 text-success"></i>Club Feco
              </h4>
              <p className="footer-text">
                <i className="fas fa-home me-3 text-light"></i> Brumstadam
              </p>
              <p className="footer-text">
                <i className="fas fa-envelope me-3 text-light"></i>
                info@example.com
              </p>
              <p className="footer-text">
                <i className="fas fa-phone me-3 text-light"></i> + 0121 456788
              </p>
              <p className="footer-text">
                <i className="fas fa-print me-3 text-light"></i> + 0121 456789
              </p>
            </div>

            {/* Products */}
            <div className="footer-column">
              <h5 className="footer-heading">Products</h5>
              <p className="footer-link">
                <a href="#smokeless">Smokeless Range</a>
              </p>
              <p className="footer-link">
                <a href="#shots">Feco Shots</a>
              </p>
              <p className="footer-link">
                <a href="#chocolates">Chocolates</a>
              </p>
              <p className="footer-link">
                <a href="#cocktails">Contender</a>
              </p>
              <p className="footer-link">
                <a href="#tinctures">CBD Oils</a>
              </p>
              <p className="footer-link">
                <a href="#gummies">Gummies</a>
              </p>
              <p className="footer-link">
                <a href="#topicals">Topicals</a>
              </p>
            </div>

            {/* Useful links */}
            <div className="footer-column">
              <h6 className="footer-heading">Useful links</h6>
              <p className="footer-link">
                <a href="https://homesteadandchill.com/how-to-decarboxylate-cannabis/" target="_blank" rel="noopener noreferrer">
                  Decarbing
                </a>
              </p>
              <p className="footer-link">
                <a href="https://jcyounger.com/5-most-common-cannabis-extraction-methods-in-2020/" target="_blank" rel="noopener noreferrer">
                  Extraction
                </a>
              </p>
              <p className="footer-link">
                <a href="https://www.vice.com/en/article/k7qvyw/investigating-thc-syrup-cannabis-with-the-consistency-of-cough-medicine" target="_blank" rel="noopener noreferrer">
                  THC Syrup Info
                </a>
              </p>
            </div>

            {/* More links */}
            <div className="footer-column">
              <h6 className="footer-heading">More Links</h6>
              <p className="footer-link">
                <a href="https://codesleeps.github.io/Food-Analyzer/" target="_blank" rel="noopener noreferrer">
                  AI Food Analyzer
                </a>
              </p>
              <p className="footer-link">
                <a href="https://www.youtube.com/watch?v=y3RIHnK0_NE" target="_blank" rel="noopener noreferrer">
                  A.I. Action
                </a>
              </p>
              <p className="footer-link">
                <a href="https://www.youtube.com/watch?v=huzhPzLwGz0" target="_blank" rel="noopener noreferrer">
                  Movie
                </a>
              </p>
              <p className="footer-link">
                <a href="https://codesleeps.github.io/solid-octo-enigma/" target="_blank" rel="noopener noreferrer">
                  Quiz
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="footer-copyright">
        <div className="container">
          <div className="copyright-text">
            © 2023 Copyright Club Feco
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;