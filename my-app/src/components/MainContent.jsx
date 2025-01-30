import React from 'react';
import Product from './Product.jsx';
import './MainContent.css';

const productList = [
  {
    id: 1,
    name: "Dodo",
    description: "Large scary pigeon",
    price: 1200,
    image: "/pic2.jpeg",
    isOnSale: true
  },
  {
    id: 2,
    name: "duck",
    description: "cute scary long bird",
    price: 200,
    image: "/pic2.jpeg",
    isOnSale: false
  },
]

function MainContent() {
  return (
    <main className="main-content">
      <p>Welcome to our online store. Browse our products below:</p>
      <Product products={productList} />
    </main>
  );
}


export default MainContent;
