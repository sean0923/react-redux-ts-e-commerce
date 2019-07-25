import React from 'react';
import styled from 'styled-components';
import map from 'lodash/map';

import { connect } from 'react-redux';

import { CollectionPreview } from '../CollectionPreview';

import { RootReducerProp } from '../../../../redux/rootReducer';
import { ShopCollectionProps, ShopDataProps } from '../../../../redux/shop/shop.data';

import { selectCollections } from '../../../../redux/shop/shop.selector';

interface ShopProps {
  collections: ShopDataProps;
}

function _CollectionOverview({ collections }: ShopProps) {
  return (
    <Wrapper>
      <div className="collections-overview">
        {map(collections, (items: ShopCollectionProps) => {
          return <CollectionPreview key={items.id} {...items} />;
        })}
      </div>
    </Wrapper>
  );
}

const mapStateToProps = (state: RootReducerProp) => {
  return {
    collections: selectCollections(state),
  };
};

const CollectionOverview = connect(mapStateToProps)(_CollectionOverview);

export { CollectionOverview };

const Wrapper = styled.div`
  .collections-overview {
    display: flex;
    flex-direction: column;
  }
`;
