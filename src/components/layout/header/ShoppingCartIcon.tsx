import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingBagSvg } from '../../../assets/shopping-cart.svg';

import { toggleIsCartHidden } from '../../../redux/rootActions';

interface _ShoppingCartIconProps {
  toggleIsCartHidden: typeof toggleIsCartHidden;
}

function _ShoppingCartIcon({ toggleIsCartHidden }: _ShoppingCartIconProps) {
  return (
    <Wrapper onClick={toggleIsCartHidden}>
      <ShoppingBagSvg className="shopping-icon" />
      <span className="item-count">0</span>
    </Wrapper>
  );
}

const ShoppingCartIcon = connect(
  null,
  { toggleIsCartHidden }
)(_ShoppingCartIcon);

export { ShoppingCartIcon };

const Wrapper = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .shopping-icon {
    width: 24px;
    height: 24px;
  }

  .item-count {
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
  }
`;
