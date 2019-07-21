import { createSelector } from 'reselect';

import { RootReducerProp } from '../rootReducer';

const selectCart = (state: RootReducerProp) => state.cartReduccer;

export const selectCartItmes = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItmes],
  (cartItmes) => {
    return cartItmes.reduce((acc, cartItem) => {
      return (acc += cartItem.count);
    }, 0);
  }
);
