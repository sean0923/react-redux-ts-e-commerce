import React from 'react';
import styled from 'styled-components';

import { CollectionItem } from '../common/CollectionItem';

import { ShopCollectionProps, ShopItemProps } from '../../../../redux/shop/shop.data';

function CollectionRow({ title, routeName, items }: ShopCollectionProps) {
  return (
    <Wrapper>
      <div className="collection-preview">
        <h1 className="title">{title}</h1>

        <div className="preview">
          {items
            .filter((item, idx) => idx < 4)
            .map((item: ShopItemProps) => {
              return <CollectionItem key={item.id} item={item} />;
            })}
        </div>
      </div>
    </Wrapper>
  );
}

export { CollectionRow };

const Wrapper = styled.div`
  .collection-preview {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    .title {
      font-size: 28px;
      margin-bottom: 25px;
    }

    .preview {
      display: flex;
      justify-content: space-between;
    }
  }
`;
