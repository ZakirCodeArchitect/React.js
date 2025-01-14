import { useState } from 'react';
import PropTypes from 'prop-types';
import './Product.css';

function Product({ products }) {

  const [isToggled, setIsToggled] = useState(false);

  // Event handler function
  const handleToggle = () => {
    setIsToggled((prev) => !prev); // Toggle the boolean value
  };

  return (
    <div className="product-container">
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={`Image of ${product.name}`} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="product-price">${product.price.toFixed(2)}</p>

            {/* Conditionally render the Sale badge if product is on sale */}
            {product.isOnSale && <span className="sale-badge">On Sale!</span>}

            {/* Sale Button to trigger the sale */}
            <p>{isToggled ? "On Sale" : "Not on Sale"}</p>
            <button onClick={handleToggle}>Sale</button>
          </div>
        ))}
      </div>
    </div>
  );
}

Product.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      isOnSale: PropTypes.bool, // Optional, used to check sale status
    })
  ).isRequired,
};

Product.defaultProps = {
  products: [],
};

export default Product;
