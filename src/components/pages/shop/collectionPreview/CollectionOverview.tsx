import React from 'react';

import { connect } from 'react-redux';

import { CollectionPreview } from '../CollectionPreview';

import { RootReducerProp } from '../../../../redux/rootReducer';
import { ShopReducerProps } from '../../../../redux/shop/shopReducer';
import { ShopCollectionProps } from '../../../../redux/shop/shop.data';

interface ShopProps {
  shopReducer: ShopReducerProps;
}

function _CollectionOverview({ shopReducer }: ShopProps) {
  return (
    <div className="">
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

const CollectionOverview = connect(mapStateToProps)(_CollectionOverview);

export { CollectionOverview };

// .collections-overview {
//   display: flex;
//   flex-direction: column;
// }
