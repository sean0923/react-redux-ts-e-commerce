import React from 'react';
import styled from 'styled-components';
import map from 'lodash/map';

import { connect } from 'react-redux';

import { CollectionRow } from './collectionRows/CollectionRow';

import { RootReducerProp } from '../../../redux/rootReducer';
import { ShopCollectionProps, ShopDataProps } from '../../../redux/shop/shop.data';

import { selectCollections } from '../../../redux/shop/shop.selector';

interface ShopProps {
  collections: ShopDataProps;
}

function _CollectionRows({ collections }: ShopProps) {
  return (
    <Wrapper>
      <div className="collections-overview">
        {map(collections, (items: ShopCollectionProps) => {
          return <CollectionRow key={items.id} {...items} />;
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

const CollectionRows = connect(mapStateToProps)(_CollectionRows);

export { CollectionRows };

const Wrapper = styled.div`
  .collections-overview {
    display: flex;
    flex-direction: column;
  }
`;
