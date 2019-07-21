import { CartItemProps } from './cartReducer';
import { ShopItemProps } from '../../components/pages/shop/shoppingData';

export const getCartItemsWithCount = (
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
