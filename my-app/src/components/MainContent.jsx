import 'react';
import Product from './Product.jsx';
// import './MainContent.css';

function MainContent() {
  const productList = [
    {
      id: 1,
      name: 'Smartphone',
      description: 'Iphone 15 pro max',
      price: 25,
      image: 'https://via.placeholder.com/250x150'
    },
    {
      id: 1,
      name: 'Laptop',
      description: 'MacBook pro 2024',
      price: 550,
      image: 'https://via.placeholder.com/250x150'
    }
  ];

  return (
    <main className="main-content">
      {/* <h2>Main Content Area</h2> */}
      <p>Welcome to our online store. Browse our products below:</p>
      <Product products={productList} />
    </main>
  );
}

export default MainContent;
