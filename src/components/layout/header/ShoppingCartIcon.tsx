import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { RootReducerProp } from '../../../redux/rootReducer';

import { ReactComponent as ShoppingBagSvg } from '../../../assets/shopping-cart.svg';

import { toggleIsCartHidden } from '../../../redux/rootActions';
import { selectCartItemsTotalCount } from '../../../redux/cart/cart.selector';

interface _ShoppingCartIconProps {
  toggleIsCartHidden: typeof toggleIsCartHidden;
  itemCount: number;
}

function _ShoppingCartIcon({ toggleIsCartHidden, itemCount }: _ShoppingCartIconProps) {
  return (
    <Wrapper onClick={toggleIsCartHidden}>
      <ShoppingBagSvg className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </Wrapper>
  );
}

const mapStateToProps = (state: RootReducerProp) => {
  return {
    itemCount: selectCartItemsTotalCount(state),
  };
};

const ShoppingCartIcon = connect(
  mapStateToProps,
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
