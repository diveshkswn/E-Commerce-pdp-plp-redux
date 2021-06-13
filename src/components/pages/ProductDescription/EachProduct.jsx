import React from 'react';
import './EachProduct.css';
import { IoBagAdd } from 'react-icons/io5';

function EachProduct() {
  return (
    <div className="eachProduct-main">
      <div className="eachProduct">
        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" className="eachProduct-img" />

        <div className="eachProduct-detail">
          <h3>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h3>
          <p>
            Your perfect pack for everyday use and walks in the forest.
            Stash your laptop (up to 15 inches) in the padded sleeve, your everyday
          </p>

          <div className="eachProduct-buttons">
            <p>Price 109.95</p>
            <button className="btn btn-dark" type="button">
              {' '}
              <IoBagAdd size="25" />
              {' '}
              <span>Add to Cart</span>

            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default EachProduct;
