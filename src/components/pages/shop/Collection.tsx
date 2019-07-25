import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';

import { CollectionItem } from './collectionPreview/collectionOverview/CollectionItem';

import { RootReducerProp } from '../../../redux/rootReducer';
import { selectCollection } from '../../../redux/shop/shop.selector';
import { ShopCollectionProps, ShopItemProps } from '../../../redux/shop/shop.data';

interface CollectionProps {
  collection: ShopCollectionProps | undefined;
}

function _Collection({ collection }: CollectionProps) {
  if (!collection) {
    return null;
  }

  const { items, title } = collection;
  return (
    <Wrapper>
      <div className="collection-page">
        <h2 className="title">{title}</h2>
        <div className="items">
          {items.map((item: ShopItemProps) => {
            return <CollectionItem key={item.id} item={item} />;
          })}
        </div>
      </div>
    </Wrapper>
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

const Wrapper = styled.div`
  .collection-page {
    display: flex;
    flex-direction: column;

    .title {
      font-size: 38px;
      margin: 0 auto 30px;
    }

    .items {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 10px;

      & .collection-item {
        margin-bottom: 30px;
      }
    }
  }
`;
