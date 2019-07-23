import React from 'react';
import styled from 'styled-components';

function CheckoutPage() {
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
        </div>

        <div className="total">
          <span>TOTAL: </span>
        </div>
      </div>
    </Wrapper>
  );
}

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
  }
`;
