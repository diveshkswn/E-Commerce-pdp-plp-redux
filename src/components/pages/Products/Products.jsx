import React, { useState, useEffect } from 'react';

import Product from './Product';
import './Products.css';

function populateProducts(product) {
  return (
    <Product
      id={product.id}
      name={product.title}
      price={product.price}
      img={product.image}
    />
  );
}

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(async () => {
    const res = await fetch('https://fakestoreapi.com/products/');
    const data = await res.json();
    setProducts(data);
  }, []);
  return (
    <>
      <div className="products_main">
        <h1>Daily Deals </h1>
        {products.map(populateProducts)}
      </div>

    </>
  );
}

export default Products;
