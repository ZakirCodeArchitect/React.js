import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product.jsx';
import './MainContent.css';

function MainContent({ productList }) {
  return (
    <main className="main-content">
      <p>Welcome to our online store. Browse our products below:</p>
      <Product products={productList} />
    </main>
  );
}

MainContent.propTypes = {
  productList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      isOnSale: PropTypes.bool, // sale status for each product
    })
  ),
};

MainContent.defaultProps = {
  productList: [
    {
      id: 1,
      name: 'Dodo',
      description: 'bird',
      price: 200,
      image: '/pic2.jpeg',
      isOnSale: false, // initial sale status
    },
    {
      id: 2,
      name: 'Duck',
      description: 'Big bird',
      price: 250,
      image: '/pic2.jpeg',
      isOnSale: false, // initial sale status
    },
  ],
};

export default MainContent;
