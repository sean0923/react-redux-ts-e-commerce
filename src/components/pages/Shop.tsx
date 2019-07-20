import React from 'react';

import { connect } from 'react-redux';

import { RootReducerProp } from '../../redux/rootReducer';
import { UserReducerProps } from '../../redux/user/userReducer';

import { CollectionPreview } from './shop/CollectionPreview';

import { SHOP_DATA, ShopCollectionProps } from './shop/shoppingData';

interface _ShopProps {
  userReducer: UserReducerProps;
}

function _Shop({ userReducer }: _ShopProps) {
  console.log('userReducer: ', userReducer);
  const [collections] = React.useState(SHOP_DATA);

  return (
    <div>
      {collections.map((collection: ShopCollectionProps) => {
        return <CollectionPreview key={collection.id} {...collection} />;
      })}
    </div>
  );
}

const mapStateToProps = (state: RootReducerProp) => {
  return {
    userReducer: state.userReducer,
  };
};

const Shop = connect(mapStateToProps)(_Shop);

export { Shop };
