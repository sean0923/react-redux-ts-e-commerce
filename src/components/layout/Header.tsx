import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase';

import { RootReducerProp } from '../../redux/rootReducer';
import { selectCartIsHidden } from '../../redux/cart/cart.selector';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { ShoppingCartIcon } from './header/ShoppingCartIcon';
import { ShoppingCartDropdown } from './header/ShoppingCartDropdown';

import { AuthContext } from '../../context/AuthContext';

interface HeaderProos {
  isHidden: boolean;
}

function _Header({ isHidden }: HeaderProos) {
  const { authPropsFromFirebase } = React.useContext(AuthContext);

  return (
    <Wrapper>
      <div className="header">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="options">
          <Link className="option" to="/shop">
            Shop
          </Link>
          <Link className="option" to="/contact">
            Contact
          </Link>
          <Link
            className="option"
            to="/sign-in-and-sign-up"
            onClick={() => {
              if (authPropsFromFirebase) {
                auth.signOut();
              }
            }}
          >
            {authPropsFromFirebase ? 'Sign Out' : 'Sign In '}
          </Link>
          <ShoppingCartIcon />
        </div>
        {isHidden ? null : <ShoppingCartDropdown />}
      </div>
    </Wrapper>
  );
}

const mapStateToProps = (state: RootReducerProp) => {
  return {
    isHidden: selectCartIsHidden(state),
  };
};

const Header = connect(mapStateToProps)(_Header);

export { Header };

const Wrapper = styled.div`
  .header {
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    .logo-container {
      height: 100%;
      width: 70px;
      padding: 25px;
    }

    .options {
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .option {
        padding: 10px 15px;
      }
    }
  }
`;
