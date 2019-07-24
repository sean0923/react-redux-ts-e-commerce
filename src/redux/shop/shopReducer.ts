import { SHOP_DATA, ShopCollectionProps } from './shop.data';

const INITIAL_STATE: ShopCollectionProps[] = SHOP_DATA;
export type ShopReducerProps = ShopCollectionProps[];

export const shopReducer = (state: ShopReducerProps = INITIAL_STATE): ShopReducerProps => {
  return state;
};
