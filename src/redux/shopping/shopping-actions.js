import * as actionTypes from './shopping-types';

function addToCart(itemId) {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemId,
    },
  };
}

function removefromCart(itemId) {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemId,
    },
  };
}

function updateQty(itemId, value) {
  return {
    type: actionTypes.ADJUST_QTY,
    payload: {
      id: itemId,
      qty: value,
    },
  };
}

function viewCurrentItem(itemId) {
  return {
    type: actionTypes.VIEW_CURRENT_ITEM,
    payload: itemId,
  };
}

function loadProducts(productsArray) {
  return {
    type: actionTypes.LOAD_PRODUCTS,
    payload: productsArray,
  };
}

export {
  loadProducts, viewCurrentItem, updateQty, removefromCart, addToCart,
};
