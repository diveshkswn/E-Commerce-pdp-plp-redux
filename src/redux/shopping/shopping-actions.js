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

function viewCurrentItem(item) {
  return {
    type: actionTypes.VIEW_CURRENT_ITEM,
    payload: item,
  };
}
