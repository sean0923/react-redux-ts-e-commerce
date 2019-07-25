import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

import { CollectionPreview } from '../CollectionPreview';

import { RootReducerProp } from '../../../../redux/rootReducer';
import { ShopCollectionProps } from '../../../../redux/shop/shop.data';

import { selectCollections } from '../../../../redux/shop/shop.selector';

interface ShopProps {
  collections: ShopCollectionProps[];
}

function _CollectionOverview({ collections }: ShopProps) {
  return (
    <Wrapper>
      <div className="collections-overview">
        {collections.map((items: ShopCollectionProps) => {
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
