import { SHOP_DATA, ShopDataProps } from './shop.data';

export interface ShopReducerProps {
  collections: ShopDataProps;
}

const INITIAL_STATE: ShopReducerProps = { collections: SHOP_DATA };

export const shopReducer = (state: ShopReducerProps = INITIAL_STATE): ShopReducerProps => {
  return state;
};
