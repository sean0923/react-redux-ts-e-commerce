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
