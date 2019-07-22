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

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItmes) => {
    return cartItmes.reduce((acc, cartItem) => {
      return (acc += cartItem.count);
    }, 0);
  }
);
