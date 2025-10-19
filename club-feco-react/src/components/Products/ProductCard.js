import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const [selectedFlavor, setSelectedFlavor] = useState(product.flavors[0]);
  const [selectedStrength, setSelectedStrength] = useState(product.strengths[0]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i key={index} className={`fas fa-star ${index < rating ? 'text-warning' : 'text-muted'}`}></i>
    ));
  };

  return (
    <div className="product-card">
      <div className="card h-100 border border-3 border-warning">
        <img
          src={product.image}
          className="card-img-top"
          alt={product.name}
          loading="lazy"
        />
        <div className="card-body">
          <div className="card-rating">
            <a href="#exampleModal" data-bs-toggle="modal" data-bs-target="#exampleModal">
              {renderStars(product.rating)}
            </a>
          </div>

          <p className="card-text text-light">
            <em className="fs-3">Selection</em>

            <div className="product-size-container">
              <select
                className="form-select"
                value={selectedFlavor}
                onChange={(e) => setSelectedFlavor(e.target.value)}
                aria-label="flavours"
              >
                {product.flavors.map((flavor, index) => (
                  <option key={index} value={flavor}>
                    {flavor}
                  </option>
                ))}
              </select>
            </div>

            <div className="product-quantity-container">
              <select
                className="form-select"
                value={selectedStrength}
                onChange={(e) => setSelectedStrength(e.target.value)}
                aria-label="quantity"
              >
                {product.strengths.map((strength, index) => (
                  <option key={index} value={strength}>
                    {strength}
                  </option>
                ))}
              </select>
            </div>
          </p>

          <button className="order-button">
            <a
              href="https://www.youtube.com/watch?v=-ZhxFtmAoXg"
              target="_blank"
              className="text-light"
              rel="noopener noreferrer"
              aria-label="Order Button"
            >
              Order
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;