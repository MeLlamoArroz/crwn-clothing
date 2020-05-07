import { createSelector } from 'reselect';

const selectCart = currentState => currentState.cart

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
)

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((acum, { quantity }) => {
    return acum = acum + quantity
  }, 0)
)