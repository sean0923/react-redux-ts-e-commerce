import keyBy from 'lodash/keyBy';

import { firebase } from '../../firebase/firebase';
import { ShopItemProps, ShopDataProps } from './shop.data';

export const transformCollections = (snapshot: firebase.firestore.QuerySnapshot): ShopDataProps => {
  const collections = snapshot.docs.map((doc) => {
    const { title, items } = doc.data() as { title: string; items: ShopItemProps[] };
    return {
      id: doc.id,
      routeName: encodeURI(title.toLowerCase()),
      title,
      items,
    };
  });

  // return collections;
  return keyBy(collections, (o) => o.routeName);
};
