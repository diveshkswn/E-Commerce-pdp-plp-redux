/* eslint-disable no-plusplus */
import React from 'react';

import { useSelector } from 'react-redux';
import Loading from '../../Loading';

import Product from './Product';
import './Products.css';

function populateProducts(product) {
  return (
    <Product
      key={product.id}
      id={product.id}
      name={product.title}
      price={product.price}
      img={product.image}
    />
  );
}

function Products() {
  const productsFromRedux = useSelector((state) => state.shop.products);
  // useEffect(async () => {
  //   const res = await fetch('https://fakestoreapi.com/products/');
  //   const data = await res.json();
  //   setProducts(data);
  // }, []);

  return (
    <>

      <div className="products_main">
        <h1>
          Daily Deals
        </h1>

        {productsFromRedux ? productsFromRedux.map(populateProducts) : <Loading /> }
      </div>

    </>
  );
}

export default React.memo(Products);
