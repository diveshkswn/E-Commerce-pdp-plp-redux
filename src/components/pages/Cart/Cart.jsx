import React from 'react';

import { IoBagAdd } from 'react-icons/io5';
import './Cart.css';
import { connect } from 'react-redux';
import CartItem from './CartItem';

function Cart(props) {
  const { cartList } = props;
  const totalPrice = cartList.reduce((total, eachItem) => total + eachItem.price * eachItem.qty, 0)
    .toFixed(2);
  const totalQty = cartList.reduce((totalQ, eachItem) => Number(totalQ) + Number(eachItem.qty), 0);

  function populateCart(cart) {
    return (
      <CartItem
        id={cart.id}
        key={cart.id}
        title={cart.title}
        description={cart.description}
        price={cart.price}
        img={cart.image}
        qty={cart.qty}

      />
    );
  }

  return (
    <div className="cart-main">
      <div className="cart-items-summary">
        <div className="cart-items">
          <h3>Cart items</h3>

          {cartList.map(populateCart)}
          {/* Cart items populate */}
        </div>
        <div className="cart-summary">
          <h4>Cart Summary</h4>
          <div className="cart-totalItems">
            <p>
              Total items :
              { Math.round(totalQty)}
            </p>
            <p>
              {' '}
              Price :
              { `  ${totalPrice}`}
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

function mapStateToProps(state) {
  return {
    cartList: state.shop.cart,
  };
}

export default connect(mapStateToProps)(Cart);
