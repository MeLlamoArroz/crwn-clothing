import { createSelector } from 'reselect';

const selectShop = currentState => currentState.shop

export const selectShopItems = createSelector(
  [selectShop],
  shop => shop.collections
)