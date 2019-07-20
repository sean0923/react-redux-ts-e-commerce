import { CartItemProps } from './cartReducer';
import { ShopItemProps } from '../../components/pages/shop/shoppingData';

export const getCartItemsWithCount = (
  cartItems: CartItemProps[],
  newItem: ShopItemProps
): CartItemProps[] => {
  const idxOfFoundItem = cartItems.findIndex((cartItem) => cartItem.id === newItem.id);
  const isFirstItem = idxOfFoundItem === -1;

  if (isFirstItem) {
    return [...cartItems, { ...newItem, count: 1 }];
  }

  return [
    ...cartItems.slice(0, idxOfFoundItem),
    { ...cartItems[idxOfFoundItem], count: cartItems[idxOfFoundItem].count + 1 },
    ...cartItems.slice(idxOfFoundItem + 1),
  ];
};
