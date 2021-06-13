/* eslint-disable react/prop-types */
import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import { IoBagAdd } from 'react-icons/io5';
import { VscPreview } from 'react-icons/vsc';

function Product(props) {
  const { name, price, img } = props;
  return (
    <>
      <div className="product-main">
        <img src={img} alt="" className="product-image" />
        <div className="product_details">
          <h4 className="product-title">
            {name}
          </h4>
          {/* <p className="product-desc">
            Your perfect pack for everyday use and walks in the forest. Stash your laptop
            (up to 15 inches)in the padded sleeve, your everyday
          </p> */}
          <p className="product-price">
            {price}
          </p>
        </div>
        <div className="product_buttons">
          <button className="btn btn-dark" type="button">
            {' '}
            <IoBagAdd size="25" />
            {' '}
            <span>Add to Cart</span>

          </button>
          <Link to="/product/01">
            <button className="btn btn-secondary" type="button">

              {' '}
              <VscPreview size="25" />
              {' '}
              <span>View Item</span>

            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Product;
