import React from 'react';

import styled from 'styled-components';
import { connect } from 'react-redux';

import { addItemToCart } from '../../../../redux/rootActions';

import { ShopItemProps } from '../../../../redux/shop/shop.data';
import { CustomButton } from '../../../common/CustomButton';

interface CollectionItemProps {
  addItemToCart: typeof addItemToCart;
  item: ShopItemProps;
}

function _CollectionItem({ item, addItemToCart }: CollectionItemProps) {
  const { id, name, imageUrl, price } = item;

  return (
    <Wrapper>
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
    </Wrapper>
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

const Wrapper = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  .image {
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    .image {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  .collection-footer {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

    .name {
      width: 90%;
      margin-bottom: 15px;
    }

    .price {
      width: 10%;
    }
  }
`;
