import {
  ToggleIsCartHiddenAction,
  AddItemToCartAction,
  RemoveItemFromCartAction,
} from './cartActions';

export enum CartActionTypes {
  TOGGLE_IS_CART_HIDDEN = 'TOGGLE_IS_CART_HIDDEN',
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
}

export type CartAction = ToggleIsCartHiddenAction | AddItemToCartAction | RemoveItemFromCartAction;
