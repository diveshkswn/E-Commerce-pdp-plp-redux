/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './CartItem.css';
import { MdDeleteForever } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { removefromCart, updateQty } from '../../../redux/shopping/shopping-actions';

function CartItem(props) {
  const {
    title, price, qty, description, img, id: cartItemId,
  } = props;
  const dispatch = useDispatch();

  function handleInput(event) {
    dispatch(updateQty(cartItemId, event.target.value));
  }
  return (
    <div className="cartItem-main">
      <img src={img} className="cartItem-img" alt="" />
      <div className="cartItem-desc">
        <h5>{title}</h5>
        <p>
          {description}
        </p>
        <p className="cartItem-price">{price}</p>
      </div>
      <div className="cartItem-action">
        <div className="cartItem-qty">
          <label>Qty</label>
          <input min="1" type="number" id="qty" name="qty" defaultValue={qty} onChange={handleInput} />
        </div>
        <div className="cartItem-deleteButton">
          <button type="button" className="btn btn-danger cartItem-btn" onClick={() => { (dispatch(removefromCart(cartItemId))); }}>
            {' '}
            <MdDeleteForever size="25" />
          </button>
        </div>
      </div>

    </div>
  );
}
export default CartItem;
