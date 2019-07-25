import { createSelector } from 'reselect';

import { RootReducerProp } from '../rootReducer';
import { ShopCollectionProps, SHOP_DATA } from './shop.data';

interface COLLECTION_ID_MAP_PROPS {
  hats: number;
  sneakers: number;
  jackets: number;
  womens: number;
  mens: number;
}

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

export const selectShop = (state: RootReducerProp) => state.shopReducer;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = (collectionIdKey: string) => {
  return createSelector(
    [selectCollections],
    (collections): ShopCollectionProps | undefined => {
      return collections[collectionIdKey];
    }
  );
};
