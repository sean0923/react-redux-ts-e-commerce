import {
  FetchCollectionStartAction,
  FetchCollectionSuccessAction,
  FetchCollectionFailAction,
} from './shop.action';

export type ShopAction =
  | FetchCollectionStartAction
  | FetchCollectionSuccessAction
  | FetchCollectionFailAction;

export enum ShopActionType {
  FETCH_COLLECTION_START = 'FETCH_COLLECTION_START',
  FETCH_COLLECTION_SUCCESS = 'FETCH_COLLECTION_SUCCESS',
  FETCH_COLLECTION_FAIL = 'FETCH_COLLECTION_FAIL',
}
