import React from 'react';

import { connect } from 'react-redux';

import { RootReducerProp } from '../../redux/rootReducer';
import { ShopCollectionProps, ShopReducerProps } from '../../redux/shop/shopReducer';
import { CollectionPreview } from './shop/CollectionPreview';

interface ShopProps {
  shopReducer: ShopReducerProps;
}

function _Shop({ shopReducer }: ShopProps) {
  return (
    <div>
      {shopReducer.map((collection: ShopCollectionProps) => {
        return <CollectionPreview key={collection.id} {...collection} />;
      })}
    </div>
  );
}

const mapStateToProps = (state: RootReducerProp) => {
  return {
    shopReducer: state.shopReducer,
  };
};

const Shop = connect(mapStateToProps)(_Shop);

export { Shop };
