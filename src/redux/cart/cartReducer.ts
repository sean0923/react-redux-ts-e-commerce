import { CartAction, CartActionTypes } from '../rootActions';

import { getCartItemsWithCount } from './cart.util';

import { ShopItemProps } from '../../components/pages/shop/shoppingData';

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
        cartItems: getCartItemsWithCount(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};
