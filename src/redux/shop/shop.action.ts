import { ShopDataProps } from './shop.data';
import { ShopActionType } from './shop.action.type';

export interface UpdateCollectionAction {
  type: ShopActionType.UPDATE_COLLECTIONS;
  payload: ShopDataProps;
}
export const updateCollections = (collections: ShopDataProps): UpdateCollectionAction => {
  return {
    type: ShopActionType.UPDATE_COLLECTIONS,
    payload: collections,
  };
};
