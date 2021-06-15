import * as actionTypes from './shopping-types';

const INITIAL_STATE = {
  products: [],
  cart: [], // {id, title, desc , price, img , qty}
  currentItem: null,
};

// We can create one more action to just load data from api to Initial State

function shopReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {};

    case actionTypes.REMOVE_FROM_CART:
      return {};

    case actionTypes.ADJUST_QTY:
      return {};

    case actionTypes.VIEW_CURRENT_ITEM:
      return { };

    default:
      return {
        state,
      };
  }
}

export default shopReducer;
