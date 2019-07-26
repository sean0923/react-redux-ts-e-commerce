import React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';

// import { CollectionOverview } from './shop/collectionPreview/CollectionOverview';
import { CollectionRows } from './shop/CollectionRows';
import { Collection } from './shop/Collection';
import { firestore } from '../../firebase/firebase';

function Shop({ match }: RouteComponentProps) {
  React.useEffect(() => {
    return listenToCollection();
  }, []);

  const listenToCollection = () => {
    return firestore.collection('collections').onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        console.log('doc.data(): ', doc.data());
      });
    });
  };

  // const listenToCollection = () => {
  //   return firestore.collection('collections').onSnapshot((snapshot) => {
  //     snapshot.docs.map((doc) => {
  //       console.log('doc.data(): ', doc.data());
  //     });
  //   });
  // };

  return (
    <div className="shop-page">
      <Switch>
        <Route exact path={`${match.path}`} component={CollectionRows} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
      </Switch>
    </div>
  );
}

export { Shop };
