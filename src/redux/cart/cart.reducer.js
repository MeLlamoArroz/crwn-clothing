import { createReducer } from '@reduxjs/toolkit';

import { CartActionTypes } from './cart.types';
import { addItemToCart, removeItemToCart } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}

// const cartReducer = (currentState = INITIAL_STATE, action) => {
//   switch(action.type) {
//     case CartActionTypes.TOGGLE_CART_HIDDEN:
//       return {
//         ...currentState,
//         hidden: !currentState.hidden
//       }
//     default:
//       return currentState
//   }
// }

const cartReducer = createReducer(INITIAL_STATE, {
  [CartActionTypes.TOGGLE_CART_HIDDEN]: (currentState, action) =>
    ({...currentState, hidden: !currentState.hidden}),
  [CartActionTypes.ADD_ITEM]: (currentState, action) =>
    ({...currentState, cartItems: addItemToCart(currentState.cartItems, action.payload)}),
  [CartActionTypes.REMOVE_ITEM]: (currentState, action) =>
    ({...currentState, cartItems: removeItemToCart(currentState.cartItems, action.payload)}),
  [CartActionTypes.CLEAR_ITEM_FROM_CART]: (currentState, action) =>
    ({...currentState, cartItems: currentState.cartItems.filter(cartItem => cartItem.id !== action.payload.id)})
})

export default cartReducer