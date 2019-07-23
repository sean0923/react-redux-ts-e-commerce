import { CartActionTypes } from './cartActionTypes';
import { ShopItemProps } from '../../components/pages/shop/shoppingData';

export interface ToggleIsCartHiddenAction {
  type: CartActionTypes.TOGGLE_IS_CART_HIDDEN;
}
export const toggleIsCartHidden = () => {
  return {
    type: CartActionTypes.TOGGLE_IS_CART_HIDDEN,
  };
};

export interface AddItemToCartAction {
  type: CartActionTypes.ADD_ITEM_TO_CART;
  payload: ShopItemProps;
}
export const addItemToCart = (item: ShopItemProps): AddItemToCartAction => {
  return {
    type: CartActionTypes.ADD_ITEM_TO_CART,
    payload: item,
  };
};

export interface RemoveItemFromCartAction {
  type: CartActionTypes.REMOVE_ITEM_FROM_CART;
  payload: number;
}
export const removeItemFromCart = (id: number): RemoveItemFromCartAction => {
  return {
    type: CartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: id,
  };
};
