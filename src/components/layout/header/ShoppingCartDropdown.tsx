import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { ShoppingCartItem } from './shoppingCartDropdown/ShoppingCartItem';
import { CustomButton } from '../../common/CustomButton';

import { RootReducerProp } from '../../../redux/rootReducer';
import { CartReducerProps } from '../../../redux/cart/cartReducer';

interface _ShoppingCardDropdownProps {
  cartReducer: CartReducerProps;
}

function _ShoppingCartDropdown({ cartReducer }: _ShoppingCardDropdownProps) {
  if (cartReducer.isHidden) {
    return null;
  }

  return (
    <Wrapper>
      {cartReducer.cartItems.map((cartItem) => {
        return <ShoppingCartItem cartItem={cartItem} />;
      })}

      <CustomButton>Go To Checkout</CustomButton>
    </Wrapper>
  );
}

const mapStateToProps = (state: RootReducerProp) => {
  return {
    cartReducer: state.cartReduccer,
  };
};

const ShoppingCartDropdown = connect(mapStateToProps)(_ShoppingCartDropdown);

export { ShoppingCartDropdown };

const Wrapper = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  .cart-items {
    height: 240px;
    display: flex;
    flex-direction: column;
    /* overflow: scroll; */
  }

  button {
    margin-top: auto;
  }
`;
