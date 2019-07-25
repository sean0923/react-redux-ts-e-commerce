import { createSelector } from 'reselect';

import { RootReducerProp } from '../rootReducer';

const selectCart = (state: RootReducerProp) => state.cartReduccer;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartIsHidden = createSelector(
  [selectCart],
  (cart) => cart.isHidden
);

export const selectCartItemsTotalCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((acc, cartItem) => {
      return (acc += cartItem.count);
    }, 0);
  }
);

export const selectTotalCost = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((acc, cartItem) => {
      return (acc += cartItem.count * cartItem.price);
    }, 0);
  }
);
