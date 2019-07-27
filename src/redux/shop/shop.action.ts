import { Dispatch } from 'redux';
import { firestore } from '../../firebase/firebase';
import { transformCollections } from './shop.util';

import { ShopDataProps } from './shop.data';
import { ShopActionType } from './shop.action.type';

export interface FetchCollectionStartAction {
  type: ShopActionType.FETCH_COLLECTION_START;
}
export const fetchCollectionStart = (): FetchCollectionStartAction => {
  return { type: ShopActionType.FETCH_COLLECTION_START };
};

export interface FetchCollectionFailAction {
  type: ShopActionType.FETCH_COLLECTION_FAIL;
  payload: string;
}
export const fetchCollectionFail = (errorMessage: string): FetchCollectionFailAction => {
  return { type: ShopActionType.FETCH_COLLECTION_FAIL, payload: errorMessage };
};

export interface FetchCollectionSuccessAction {
  type: ShopActionType.FETCH_COLLECTION_SUCCESS;
  payload: ShopDataProps;
}
export const fetchCollectionAsync = () => {
  return (dispatch: Dispatch) => {
    dispatch<FetchCollectionStartAction>(fetchCollectionStart());
    const collectionsRef = firestore.collection('collections');
    collectionsRef
      .get()
      .then((snapshot) => {
        const collections = transformCollections(snapshot);
        dispatch<FetchCollectionSuccessAction>({
          type: ShopActionType.FETCH_COLLECTION_SUCCESS,
          payload: collections,
        });
      })
      .catch((error) => {
        dispatch<FetchCollectionFailAction>(fetchCollectionFail(error.message));
      });
  };
};
