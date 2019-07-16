import React from 'react';
import styled from 'styled-components';
import './collectionItem/collection-item.styles.scss';

import { ShopItemProps } from '../shoppingData';

function CollectionItem({ name, imageUrl, price }: ShopItemProps) {
  return (
    <div className="collection-item">
      <Img className="image" imageUrl={imageUrl} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
}

export { CollectionItem };

const Img = styled.div<{ imageUrl: string }>`
  background-image: url(${({ imageUrl }) => imageUrl});
`;
