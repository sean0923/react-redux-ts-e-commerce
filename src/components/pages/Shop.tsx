import React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import keyBy from 'lodash/keyBy';
import { connect } from 'react-redux';

import { ShopItemProps } from '../../redux/shop/shop.data';
import { updateCollections } from '../../redux/rootActions';
import { CollectionRows } from './shop/CollectionRows';
import { Collection } from './shop/Collection';
import { firestore } from '../../firebase/firebase';

interface Props extends RouteComponentProps {
  dispatch: Function;
}

function _Shop({ match, dispatch }: Props) {
  React.useEffect(() => {
    return listenToCollection();
  }, []);

  const listenToCollection = () => {
    return firestore.collection('collections').onSnapshot((snapshot) => {
      const transformedCollection = keyBy(transformCollections(snapshot), (o) => o.routeName);
      dispatch(updateCollections(transformedCollection));
      console.log('transformedCollection: ', transformedCollection);
    });
  };

  const transformCollections = (snapshot: firebase.firestore.QuerySnapshot) => {
    return snapshot.docs.map((doc) => {
      const { title, items } = doc.data() as { title: string; items: ShopItemProps[] };
      return {
        id: doc.id,
        routeName: encodeURI(title.toLowerCase()),
        title,
        items,
      };
    });
  };

  return (
    <div className="shop-page">
      <Switch>
        <Route exact path={`${match.path}`} component={CollectionRows} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
      </Switch>
    </div>
  );
}

const Shop = connect(null)(_Shop);

export { Shop };
