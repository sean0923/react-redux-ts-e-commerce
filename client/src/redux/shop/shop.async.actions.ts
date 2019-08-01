import { Dispatch } from 'redux';
import { firestore } from '../../firebase/firebase';
import { transformCollections } from './shop.util';

import {
  FetchCollectionStartAction,
  FetchCollectionSuccessAction,
  FetchCollectionFailAction,
  //
  fetchCollectionStart,
  fetchCollectionSuccess,
  fetchCollectionFail,
} from './shop.action';

export const fetchCollectionAsync = () => {
  return (dispatch: Dispatch) => {
    dispatch<FetchCollectionStartAction>(fetchCollectionStart());
    const collectionsRef = firestore.collection('collections');
    collectionsRef
      .get()
      .then((snapshot) => {
        const collections = transformCollections(snapshot);
        dispatch<FetchCollectionSuccessAction>(fetchCollectionSuccess(collections));
      })
      .catch((error) => {
        dispatch<FetchCollectionFailAction>(fetchCollectionFail(error.message));
      });
  };
};
