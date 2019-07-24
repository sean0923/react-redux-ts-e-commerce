import { CartItemProps } from './cartReducer';
import { ShopItemProps } from '../shop/shop.data';

export const increaseCountHelper = (
  cartItems: CartItemProps[],
  newItem: ShopItemProps
): CartItemProps[] => {
  const isItemExist = cartItems.find((cartItem) => cartItem.id === newItem.id);
  const isFirstItem = !isItemExist;

  if (isFirstItem) {
    return [...cartItems, { ...newItem, count: 1 }];
  }

  return cartItems.map((cartItem) => {
    if (cartItem.id === newItem.id) {
      return { ...cartItem, count: cartItem.count + 1 };
    }

    return cartItem;
  });
};

export const dcreaseCountHelper = (cartItems: CartItemProps[], id: number): CartItemProps[] => {
  return cartItems.map((cartItem) => {
    if (cartItem.id === id) {
      if (cartItem.count === 0) {
        return cartItem;
      }

      return { ...cartItem, count: cartItem.count - 1 };
    }

    return cartItem;
  });
};
