import React from 'react';
import './Carousel.css';

const Carousel = () => {
  const carouselItems = [
    {
      id: 1,
      image: '/images/carousel/cannabisPlant.webp',
      alt: 'Cannabis Plant'
    },
    {
      id: 2,
      image: '/images/carousel/gummies.webp',
      alt: 'Colored Gummy Bears'
    },
    {
      id: 3,
      image: '/images/carousel/tincturePipe.webp',
      alt: 'CBD Tincture Collection'
    }
  ];

  return (
    <section className="carousel-section">
      <div id="carouselDarkVariant" className="carousel slide carousel-fade carousel-dark" data-bs-ride="carousel">
        {/* Indicators */}
        <div className="carousel-indicators">
          {carouselItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              data-bs-target="#carouselDarkVariant"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Inner */}
        <div className="carousel-inner">
          {carouselItems.map((item, index) => (
            <div
              key={item.id}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <img
                src={`/images/img${item.image}`}
                className="d-block w-100"
                alt={item.alt}
                loading="lazy"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Club FECO Gallery</h5>
                <p>Premium CBD products and lifestyle</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;