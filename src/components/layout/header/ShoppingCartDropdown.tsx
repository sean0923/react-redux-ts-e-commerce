import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { ShoppingCartItem } from './shoppingCartDropdown/ShoppingCartItem';
import { CustomButton } from '../../common/CustomButton';

import { RootReducerProp } from '../../../redux/rootReducer';
import { selectCartItems } from '../../../redux/cart/cart.selector';
import { CartItemProps } from '../../../redux/cart/cartReducer';

interface ShoppingCardDropdownProps {
  cartItems: CartItemProps[];
}

function _ShoppingCartDropdown({ cartItems }: ShoppingCardDropdownProps) {
  return (
    <Wrapper>
      <div className="cart-items">
        {cartItems.map((cartItem) => {
          return <ShoppingCartItem key={cartItem.id} cartItem={cartItem} />;
        })}
      </div>

      <CustomButton>Go To Checkout</CustomButton>
    </Wrapper>
  );
}

const mapStateToProps = (state: RootReducerProp) => {
  return {
    cartItems: selectCartItems(state),
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
    overflow-y: scroll;
  }

  button {
    margin-top: auto;
  }
`;
