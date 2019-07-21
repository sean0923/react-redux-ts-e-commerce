import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { ShoppingCartIcon } from './header/ShoppingCartIcon';
import { ShoppingCartDropdown } from './header/ShoppingCartDropdown';

import { AuthContext } from '../../context/AuthContext';

function Header() {
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
        <ShoppingCartDropdown />
      </div>
    </Wrapper>
  );
}

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
