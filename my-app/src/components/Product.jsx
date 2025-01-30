import { useState } from "react";
import PropTypes from "prop-types";
import "./Product.css";

function Product({ products }) {
  // State to track sale status and price for each product
  const [productStates, setProductStates] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = { 
        isOnSale: product.isOnSale || false, 
        price: product.price, 
        originalPrice: product.price 
      };
      return acc;
    }, {})
  );

  // Event handler to toggle sale status and update price
  const handleToggle = (id) => {
    setProductStates((prevState) => {
      const isCurrentlyOnSale = prevState[id].isOnSale;

      return {
        ...prevState,
        [id]: {
          ...prevState[id],
          isOnSale: !isCurrentlyOnSale, // Toggle sale status
          price: isCurrentlyOnSale
            ? prevState[id].originalPrice // Restore original price
            : prevState[id].originalPrice * 0.8, // Apply 20% discount
        },
      };
    });
  };

  return (
    <div className="product-container">
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={`Image of ${product.name}`} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>

            {/* Show discounted price when on sale */}
            <p className="product-price">
              ${productStates[product.id].price.toFixed(2)}
            </p>

            {/* Show "On Sale" badge if applicable */}
            {/* {productStates[product.id].isOnSale && (
              <span className="sale-badge">On Sale!</span>
            )} */}

            {/* Toggle Button */}
            <button onClick={() => handleToggle(product.id)}>
              {productStates[product.id].isOnSale ? "On Sale!" : "Not on Sale"}
            </button>
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
      isOnSale: PropTypes.bool, // Optional
    })
  ).isRequired,
};

Product.defaultProps = {
  products: [
    {
      id: 1,
      name: "Dodo",
      description: "Bird",
      price: 200,
      image: "/pic2.jpeg",
      isOnSale: false,
    },
    {
      id: 2,
      name: "Duck",
      description: "Big bird",
      price: 250,
      image: "/pic2.jpeg",
      isOnSale: false,
    },
  ],
};

export default Product;
