/* eslint-disable no-case-declarations */
import * as actionTypes from './shopping-types';

const INITIAL_STATE = {

  products: [], // {id, title, description , price, img }
  cart: [], // {id, title, description , price, img , qty}
  currentItem: 'lol',
};

// We can create one more action to just load data from api to Initial State

function shopReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS:
      return {
        ...state, products: action.payload,
      };

    case actionTypes.ADD_TO_CART:

      if (state.cart.length >= 1) {
        const item = state.products.find((p) => p.id === action.payload.id);
        const isInCart = state.cart.find((c) => (c.id === item.id));
        const updatedCart = state.cart.map((eachCart) => {
          if (eachCart.id === item.id) {
            return {
              ...eachCart,
              qty: eachCart.qty + 1,
            };
          }

          return eachCart;
        });
        return { ...state, cart: isInCart ? updatedCart : [...state.cart, { qty: 1, ...item }] };
      }

      const item = state.products.find((p) => p.id === action.payload.id);
      item.qty = 1;

      return {
        ...state,
        cart: [...state.cart, item],

      };

    case actionTypes.REMOVE_FROM_CART:
      const updatedCartList = state.cart.filter((i) => i.id !== action.payload.id);
      return {
        ...state,
        cart: updatedCartList,
      };

    case actionTypes.ADJUST_QTY:
      const updatedCartListADJUSTQTY = state.cart.map((i) => {
        if (i.id === action.payload.id) {
          return { ...i, qty: action.payload.qty };
        }
        return i;
      });

      return { ...state, cart: updatedCartListADJUSTQTY };

    case actionTypes.VIEW_CURRENT_ITEM:
      return { };

    default:
      return state;
  }
}

export default shopReducer;
