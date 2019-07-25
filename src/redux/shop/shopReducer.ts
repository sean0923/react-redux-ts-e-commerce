import { SHOP_DATA, ShopCollectionProps } from './shop.data';

export interface ShopReducerProps {
  collections: ShopCollectionProps[];
}

const INITIAL_STATE: ShopReducerProps = { collections: SHOP_DATA };

export const shopReducer = (state: ShopReducerProps = INITIAL_STATE): ShopReducerProps => {
  return state;
};
