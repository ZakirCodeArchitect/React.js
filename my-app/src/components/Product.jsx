import 'react';
// import './Product.css';

function Product({ products }) {
  return (
    <div className="product-container">
      {/* <h2>Our Products</h2> */}
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            {/* <img src={product.image} alt={product.name} /> */}
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="product-price">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
