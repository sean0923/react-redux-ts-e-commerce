import {
  ToggleIsCartHiddenAction,
  AddItemToCartAction,
  ClearItemFromCartAction,
  DecreaseItemCountFromCartAction,
} from './cartActions';

export type CartAction =
  | ToggleIsCartHiddenAction
  | AddItemToCartAction
  | ClearItemFromCartAction
  | DecreaseItemCountFromCartAction;

export enum CartActionTypes {
  TOGGLE_IS_CART_HIDDEN = 'TOGGLE_IS_CART_HIDDEN',
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  CLEAR_ITEM_FROM_CART = 'CLEAR_ITEM_FROM_CART',
  DECREASE_ITEM_COUNT_FROM_CART = 'DECREASE_ITEM_COUNT_FROM_CART',
}
