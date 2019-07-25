import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { RootReducerProp } from '../../../redux/rootReducer';
import { selectCollection } from '../../../redux/shop/shop.selector';
import { ShopCollectionProps } from '../../../redux/shop/shop.data';

// interface CollectionProps extends RouteComponentProps<ParamProps> {
//   collection: ShopItemProps;
// }

interface CollectionProps {
  collection: ShopCollectionProps | undefined;
}

// function _Collection({ match, collection }: ) {
function _Collection({ collection }: CollectionProps) {
  console.log('collection: ', collection);
  // const { params }: { params: ParamsProps } = match;
  // params.collectionId

  // (match.params as ParamsProps).collectionId;
  return (
    <div>
      <div>aa</div>

      {/* <h2>Collection Page {match.params}</h2> */}
    </div>
  );
}

interface ParamProps {
  collectionId: string;
}

const mapStateToProps = (state: RootReducerProp, ownProps: RouteComponentProps<ParamProps>) => {
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state),
  };
};

const Collection = connect(mapStateToProps)(_Collection);

export { Collection };
