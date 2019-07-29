import { takeEvery, call, put } from 'redux-saga/effects';

import { ShopActionType } from './shop.action.type';
import { fetchCollectionSuccess, fetchCollectionFail } from './shop.action';
import { firestore } from '../../firebase/firebase';
import { transformCollections } from './shop.util';

export function* fetchCollectionAsync() {
  yield console.log('I am fired');

  try {
    const collectionRef = firestore.collection('collections');
    const snaphot = yield collectionRef.get();
    const collections = yield call(transformCollections, snaphot);
    yield put(fetchCollectionSuccess(collections));
  } catch (error) {
    yield put(fetchCollectionFail(error.message));
  }
}

// dispatch<FetchCollectionStartAction>(fetchCollectionStart());
// const collectionsRef = firestore.collection('collections');
// collectionsRef
//   .get()
//   .then((snapshot) => {
//     const collections = transformCollections(snapshot);
//     dispatch<FetchCollectionSuccessAction>({
//       type: ShopActionType.FETCH_COLLECTION_SUCCESS,
//       payload: collections,
//     });
//   })
//   .catch((error) => {
//     dispatch<FetchCollectionFailAction>(fetchCollectionFail(error.message));
//   });

export function* fectchCollectionStart() {
  yield takeEvery(ShopActionType.FETCH_COLLECTION_START, fetchCollectionAsync);
}
