import { createSelector } from 'reselect';

import { RootReducerProp } from '../rootReducer';
import { ShopCollectionProps } from './shop.data';

export const selectShop = (state: RootReducerProp) => state.shopReducer;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectIsFetchingCollections = createSelector(
  [selectShop],
  (shop) => shop.isFetchingCollections
);

export const selectCollection = (collectionIdKey: string) => {
  return createSelector(
    [selectCollections],
    (collections): ShopCollectionProps | undefined => {
      return collections[collectionIdKey];
    }
  );
};
