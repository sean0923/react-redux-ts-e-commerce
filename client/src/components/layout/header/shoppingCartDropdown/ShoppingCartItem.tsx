import React from 'react';
import styled from 'styled-components';

import { CartItemProps } from '../../../../redux/cart/cartReducer';

function ShoppingCartItem({ cartItem }: { cartItem: CartItemProps }) {
  const { imageUrl, price, name, count } = cartItem;
  return (
    <Wrapper>
      <div className="cart-item">
        <img src={imageUrl} alt="item" />
        <div className="item-details">
          <div className="name">{name}</div>
          <div className="price">{`${count} X ${price}`}</div>
        </div>
      </div>
    </Wrapper>
  );
}

export { ShoppingCartItem };

const Wrapper = styled.div`
  .cart-item {
    width: 100%;
    display: flex;
    height: 80px;
    margin-bottom: 15px;

    img {
      width: 30%;
    }

    .item-details {
      width: 70%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding: 10px 20px;

      .name {
        font-size: 16px;
      }
    }
  }
`;
