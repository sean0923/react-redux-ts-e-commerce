import { ShopDataProps } from './shop.data';

import { ShopAction, ShopActionType } from './shop.action.type';

export interface ShopReducerProps {
  collections: ShopDataProps;
}

const INITIAL_STATE: ShopReducerProps = { collections: {} };

export const shopReducer = (
  state: ShopReducerProps = INITIAL_STATE,
  action: ShopAction
): ShopReducerProps => {
  switch (action.type) {
    case ShopActionType.UPDATE_COLLECTIONS:
      return {
        collections: action.payload,
      };

    default:
      return state;
  }
};
