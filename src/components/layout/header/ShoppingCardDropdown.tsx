import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { CustomButton } from '../../common/CustomButton';
import { RootReducerProp } from '../../../redux/rootReducer';
import { CartReducerProps } from '../../../redux/cart/cartReducer';

interface _ShoppingCardDropdownProps {
  cartReducer: CartReducerProps;
}

function _ShoppingCardDropdown({ cartReducer }: _ShoppingCardDropdownProps) {
  if (cartReducer.isHidden) {
    return null;
  }

  return (
    <Wrapper>
      <div className="cart-items" />
      <CustomButton>Go To Checkout</CustomButton>
    </Wrapper>
  );
}

const mapStateToProps = (state: RootReducerProp) => {
  return {
    cartReducer: state.cartReduccer,
  };
};

const ShoppingCardDropdown = connect(mapStateToProps)(_ShoppingCardDropdown);

export { ShoppingCardDropdown };

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
