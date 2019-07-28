import { takeEvery } from 'redux-saga/effects';

import { ShopActionType } from './shop.action.type';

export function* fetchCollectionAsync() {
  yield console.log('I am fired');
}

export function* fectchCollectionStart() {
  yield takeEvery(ShopActionType.FETCH_COLLECTION_START, fetchCollectionAsync);
}
