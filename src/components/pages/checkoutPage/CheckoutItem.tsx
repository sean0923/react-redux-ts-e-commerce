import React from 'react';
import { connect, DispatchProp } from 'react-redux';
import styled from 'styled-components';

import { CartItemProps } from '../../../redux/cart/cartReducer';

import { clearItemFromCart } from '../../../redux/rootActions';

interface CheckoutItemProps {
  cartItem: CartItemProps;
  dispatch: Function;
}

function _CheckoutItem({ cartItem, dispatch }: CheckoutItemProps) {
  const { imageUrl, name, count, price, id } = cartItem;
  return (
    <Wrapper>
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <div className="arrow">&#10094;</div>
        <span className="value">{count}</span>
        <div className="arrow">&#10095;</div>
      </div>
      <div className="price">{price}</div>
      <div
        className="remove-button"
        onClick={() => {
          dispatch(clearItemFromCart(id));
        }}
      >
        &#10005;
      </div>
    </Wrapper>
  );
}

const CheckoutItem = connect(null)(_CheckoutItem);
export { CheckoutItem };

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  .image-container {
    width: 23%;
    padding-right: 15px;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .name,
  .quantity,
  .price {
    width: 23%;
  }

  .quantity {
    display: flex;

    .arrow {
      cursor: pointer;
    }

    .value {
      margin: 0 10px;
    }
  }

  .remove-button {
    padding-left: 12px;
    cursor: pointer;
  }
`;
