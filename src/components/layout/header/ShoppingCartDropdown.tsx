import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { ShoppingCartItem } from './shoppingCartDropdown/ShoppingCartItem';
import { CustomButton } from '../../common/CustomButton';

import { RootReducerProp } from '../../../redux/rootReducer';
import { selectCartItems } from '../../../redux/cart/cart.selector';
import { CartItemProps } from '../../../redux/cart/cartReducer';

import { toggleIsCartHidden } from '../../../redux/rootActions';

interface ShoppingCardDropdownProps extends RouteComponentProps {
  cartItems: CartItemProps[];
  dispatch: Function;
}

function _ShoppingCartDropdown({ cartItems, history, dispatch }: ShoppingCardDropdownProps) {
  return (
    <Wrapper>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <span className="empty-message">Your cart is empty</span>
        ) : (
          cartItems.map((cartItem) => {
            return <ShoppingCartItem key={cartItem.id} cartItem={cartItem} />;
          })
        )}
      </div>

      <CustomButton
        onClick={() => {
          dispatch(toggleIsCartHidden());
          history.push('/checkout');
        }}
      >
        Go To Checkout
      </CustomButton>
    </Wrapper>
  );
}

const mapStateToProps = (state: RootReducerProp) => {
  return {
    cartItems: selectCartItems(state),
  };
};

const ShoppingCartDropdown = withRouter(connect(mapStateToProps)(_ShoppingCartDropdown) as any);

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

    .empty-message {
      font-size: 18px;
      margin: 50px auto;
    }
  }

  button {
    margin-top: auto;
  }
`;
