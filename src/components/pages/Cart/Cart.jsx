import React from 'react';
import { IoBagAdd } from 'react-icons/io5';
import './Cart.css';
import CartItem from './CartItem';

function Cart() {
  return (
    <div className="cart-main">
      <div className="cart-items-summary">
        <div className="cart-items">
          <h3>Cart items</h3>
          <CartItem />
          <CartItem />
          {/* Cart items populate */}
        </div>
        <div className="cart-summary">
          <h4>Cart Summary</h4>
          <div className="cart-totalItems">
            <p>
              Total items
              {1}
            </p>
            <p>
              {' '}
              Price :
              {10}
            </p>
          </div>

          <button className="btn btn-dark btn-cart" type="button">
            {' '}
            <IoBagAdd size="25" />
            {' '}
            <span>Proceed to checkout</span>

          </button>
        </div>
      </div>

    </div>
  );
}

export default Cart;
