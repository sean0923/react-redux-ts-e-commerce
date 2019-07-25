import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { CheckoutItem } from './checkoutPage/CheckoutItem';
import { StripeCheckoutButton } from './checkoutPage/StripeCheckoutButton';

import { RootReducerProp } from '../../redux/rootReducer';
import { CartItemProps } from '../../redux/cart/cartReducer';

import { selectTotalCost, selectCartItems } from '../../redux/cart/cart.selector';

interface CheckoutPageProps {
  totalCost: number;
  cartItems: CartItemProps[];
}

function _CheckoutPage({ totalCost, cartItems }: CheckoutPageProps) {
  console.log('totalCost: ', totalCost);
  return (
    <Wrapper>
      <div>
        <div className="checkout-page">
          <div className="checkout-header">
            <div className="header-block">
              <span>Product</span>
            </div>
            <div className="header-block">
              <span>Description</span>
            </div>
            <div className="header-block">
              <span>Quantity</span>
            </div>
            <div className="header-block">
              <span>Price</span>
            </div>
            <div className="header-block">
              <span>Remove</span>
            </div>
          </div>
          {cartItems.map((cartItem) => {
            return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
          })}

          <div className="total">
            <span>{`TOTAL: $${totalCost}`}</span>
          </div>
          <div className="test-warning">
            *Please use the following test credit card for payments
            <br />
            4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
          </div>
          <StripeCheckoutButton price={totalCost} />
        </div>
      </div>
    </Wrapper>
  );
}

const mapStateToProps = (state: RootReducerProp) => {
  return {
    cartItems: selectCartItems(state),
    totalCost: selectTotalCost(state),
  };
};

const CheckoutPage = connect(mapStateToProps)(_CheckoutPage);

export { CheckoutPage };

const Wrapper = styled.div`
  .checkout-page {
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;

    .checkout-header {
      width: 100%;
      padding: 10px 0;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid darkgrey;

      .header-block {
        text-transform: capitalize;
        width: 23%;

        &:last-child {
          width: 8%;
        }
      }
    }

    .total {
      margin-top: 30px;
      margin-left: auto;
      font-size: 36px;
    }

    .test-warning {
      text-align: center;
      margin-top: 40px;
      font-size: 24px;
      color: red;
    }

    button {
      margin-left: auto;
      margin-top: 50px;
    }
  }
`;
