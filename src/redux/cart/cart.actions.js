import { createAction } from '@reduxjs/toolkit';

import { CartActionTypes } from './cart.types';

// export const toggleCartHidden = () => {
//   return ({
//     type: CartActionTypes.TOGGLE_CART_HIDDEN
//   })
// }

export const toggleCartHidden = createAction(CartActionTypes.TOGGLE_CART_HIDDEN)
export const addItem = createAction(CartActionTypes.ADD_ITEM)
export const removeItem = createAction(CartActionTypes.REMOVE_ITEM)
export const clearItemFromCart = createAction(CartActionTypes.CLEAR_ITEM_FROM_CART)