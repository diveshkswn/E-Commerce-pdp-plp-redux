/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './CartItem.css';
import { MdDeleteForever } from 'react-icons/md';

function CartItem() {
  return (
    <div className="cartItem-main">
      <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" className="cartItem-img" alt="" />
      <div className="cartItem-desc">
        <h5>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h5>
        <p>
          Your perfect pack for everyday use and walks in the forest
          . Stash your laptop (up to 15 inches) in the padded sleeve, your everyday
        </p>
        <p>109.95</p>
      </div>
      <div className="cartItem-action">
        <div className="cartItem-qty">
          <label>Qty</label>
          <input min="1" type="number" id="qty" name="qty" />
        </div>
        <div className="cartItem-deleteButton">
          <button type="button" className="btn btn-danger cartItem-btn">
            {' '}
            <MdDeleteForever size="25" />
          </button>
        </div>
      </div>

    </div>
  );
}
export default CartItem;
