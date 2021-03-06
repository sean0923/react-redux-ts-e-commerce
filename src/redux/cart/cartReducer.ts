import { CartAction, CartActionTypes } from '../rootActions';

import { increaseCountHelper, dcreaseCountHelper } from './cart.util';

import { ShopItemProps } from '../shop/shop.data';

export interface CartItemProps extends ShopItemProps {
  count: number;
}

export interface CartReducerProps {
  isHidden: boolean;
  cartItems: CartItemProps[];
}

const INITIAL_SATATE: CartReducerProps = {
  isHidden: true,
  cartItems: [],
};

export const cartReduccer = (
  state: CartReducerProps = INITIAL_SATATE,
  action: CartAction
): CartReducerProps => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_IS_CART_HIDDEN:
      return {
        ...state,
        isHidden: !state.isHidden,
      };

    case CartActionTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: increaseCountHelper(state.cartItems, action.payload),
      };

    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((cartItem) => {
          return cartItem.id !== action.payload;
        }),
      };

    case CartActionTypes.DECREASE_ITEM_COUNT_FROM_CART:
      return {
        ...state,
        cartItems: dcreaseCountHelper(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};
