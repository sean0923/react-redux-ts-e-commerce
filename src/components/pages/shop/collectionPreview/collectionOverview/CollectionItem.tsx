import React from 'react';

import styled from 'styled-components';
import { connect } from 'react-redux';

import { addItemToCart } from '../../../../../redux/rootActions';

import './collectionItem/collection-item.styles.scss';

import { ShopItemProps } from '../../../../../redux/shop/shop.data';
import { CustomButton } from '../../../../common/CustomButton';

interface CollectionItemProps {
  addItemToCart: typeof addItemToCart;
  item: ShopItemProps;
}

function _CollectionItem({ item, addItemToCart }: CollectionItemProps) {
  const { id, name, imageUrl, price } = item;

  return (
    <div className="collection-item">
      <Img className="image" imageUrl={imageUrl} />

      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

      <CustomButton
        isInverted
        onClick={() => {
          addItemToCart({ name, id, imageUrl, price });
        }}
      >
        Add to cart
      </CustomButton>
    </div>
  );
}

const CollectionItem = connect(
  null,
  { addItemToCart }
)(_CollectionItem);

export { CollectionItem };

const Img = styled.div<{ imageUrl: string }>`
  background-image: url(${({ imageUrl }) => imageUrl});
`;
