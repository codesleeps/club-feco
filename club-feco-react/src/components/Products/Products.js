import React from 'react';
import ProductCard from './ProductCard';
import './Products.css';

const Products = () => {
  // const [activeSection, setActiveSection] = useState('smokeless');

  const products = {
    smokeless: {
      title: 'Smokeless Selection',
      subtitle: 'CBD with a Burst of Freshness',
      description: 'Our CBD-infused fresh juices offer a delightful way to incorporate CBD into your daily routine. Sourced from premium hemp extracts, our CBD is blended with the purest, juiciest fruits to create a truly refreshing and revitalizing experience.',
      image: '/images/img/about/smokeless_about.webp',
      items: [
        {
          id: 1,
          name: 'Pineapple Juice',
          image: '/images/img/smokeless/pineappleSmokeless-transformed.webp',
          rating: 5,
          flavors: ['Pineapple', 'Mango', 'Apple', 'Orange'],
          strengths: ['100mg', '200mg', '300mg', '400mg', '500mg']
        }
      ]
    },
    shots: {
      title: 'Shots Selection',
      subtitle: 'Pure, Potent, and Packed with Benefits',
      description: 'We\'ve taken the last 7 years to perfect our recipe because we specialize in only providing the Highest Quality Best Tasting infused syrups. No other syrup compares to Feco Shots!',
      image: '/images/img/about/shots_selection_500x332.webp',
      items: [
        {
          id: 2,
          name: 'Fruit Punch Shot',
          image: '/images/img/shots/feco_shots.png',
          rating: 5,
          flavors: ['Fruit Punch', 'Strawberry', 'Kola Champagne', 'Grape', 'Pineapple', 'Mango', 'S&G'],
          strengths: ['100mg', '200mg', '300mg', '400mg', '500mg']
        }
      ]
    },
    cocktails: {
      title: 'Cocktails Selection',
      subtitle: 'Embrace the spirit of adventure',
      description: 'Prepare to transcend ordinary spirits with our unparalleled fusion of high-end oils and Jamaican White Rum. Meticulously crafted for versatility, it seamlessly combines with a multitude of spirits and cocktails.',
      image: '/images/img/about/club_feco_500x282.webp',
      items: [
        {
          id: 3,
          name: 'Mango Contender',
          image: '/images/img/contender/CONTENDER_MANGO400x280.webp',
          rating: 5,
          flavors: ['Mango', 'Kola Champagne', 'Strawberry', 'Fruit Punch', 'Grape', 'Pineapple', 'S&G'],
          strengths: ['100mg', '200mg', '300mg', '400mg', '500mg']
        }
      ]
    },
    chocolates: {
      title: 'Chocolate Selection',
      subtitle: 'CBD-Infused Chocolates: A Decadent Delight',
      description: 'We use a variety of chocolates according to each recipe to ensure that we achieve a unique set of chocolates for our infusion.',
      image: '/images/img/about/chocolate_about_500x391.webp',
      items: [
        {
          id: 4,
          name: 'Vodka & Cranberries Chocolate',
          image: '/images/img/chocolates/VODKA & CRANBERRIES 500MG.webp',
          rating: 5,
          flavors: ['Dry roasted', 'Fruit & Nut', 'Rum & Raisin', 'Cashews'],
          strengths: ['100mg', '200mg', '300mg', '400mg', '500mg']
        }
      ]
    },
    gummies: {
      title: 'Gummies Selection',
      subtitle: 'CBD Gummies: Delicious Wellness',
      description: 'Our CBD gummies are a tasty and discreet way to incorporate CBD into your life. Crafted with care, these delectable treats provide a precise and convenient dosage of CBD.',
      image: '/images/img/about/gummies_batch.webp',
      items: [
        {
          id: 5,
          name: 'CBD Gummies',
          image: '/images/img/gummies/gum_one.webp',
          rating: 5,
          flavors: ['500mg - £39.99'],
          strengths: ['100mg', '200mg', '300mg', '400mg', '500mg']
        }
      ]
    },
    honey: {
      title: 'Honey Selection',
      subtitle: 'Nature\'s Sweetest Wellness Elixir',
      description: 'Experience the harmonious blend of nature\'s sweetness and the potential benefits of CBD with our CBD-infused honey.',
      image: '/images/img/about/about_honey_500x334.webp',
      items: [
        {
          id: 6,
          name: 'CBD Honey',
          image: '/images/img/honey/HONEY 500MG.webp',
          rating: 5,
          flavors: ['500mg - £39.99'],
          strengths: ['100mg', '200mg', '300mg', '400mg', '500mg']
        }
      ]
    }
  };

  return (
    <div className="products-container">
      {/* Product sections */}
      {Object.entries(products).map(([key, product]) => (
        <section key={key} id={key} className="product-section">
          <div className="container">
            <div className="section-header">
              <a
                href="https://codesleeps.github.io/solid-octo-enigma/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enter This Cannabis Quiz"
              >
                <h2 className="section-title">{product.title}</h2>
              </a>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <img
                  src={product.image}
                  className="img-fluid rounded"
                  alt={product.title}
                  loading="lazy"
                />
              </div>
              <div className="col-lg-8">
                <h3 className="text-danger display-5">{product.subtitle}</h3>
                <p className="lead">{product.description}</p>
                <ul className="text-success">
                  <li>100% Pure & Natural.</li>
                  <li>Various strengths available</li>
                  <li>A Refreshing Twist on Wellness</li>
                  <li>Vegan Friendly</li>
                </ul>
              </div>
            </div>

            <div className="product-cards">
              <div className="row">
                {product.items.map(item => (
                  <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <ProductCard product={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Products;