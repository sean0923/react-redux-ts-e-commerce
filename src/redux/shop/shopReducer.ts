import { ShopDataProps } from './shop.data';

import { ShopAction, ShopActionType } from './shop.action.type';

export interface ShopReducerProps {
  collections: ShopDataProps;
  isFetchingCollections: boolean;
  errorMessage: string;
}

const INITIAL_STATE: ShopReducerProps = {
  collections: {},
  isFetchingCollections: false,
  errorMessage: '',
};

export const shopReducer = (
  state: ShopReducerProps = INITIAL_STATE,
  action: ShopAction
): ShopReducerProps => {
  switch (action.type) {
    case ShopActionType.FETCH_COLLECTION_START:
      return {
        ...state,
        isFetchingCollections: true,
      };

    case ShopActionType.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        isFetchingCollections: false,
        collections: action.payload,
      };

    case ShopActionType.FETCH_COLLECTION_FAIL:
      return {
        ...state,
        isFetchingCollections: false,
      };

    default:
      return state;
  }
};
