import React from 'react';
import styled from 'styled-components';

interface CustomButtonProps {
  type?: 'button' | 'submit';
  onClick?(): void;
  isGoogleSignIn?: boolean;
  children: React.ReactChildren | string;
}

function CustomButton({ children, ...rest }: CustomButtonProps) {
  let className = 'custom-button';

  if (rest.isGoogleSignIn) {
    className += ' google-sign-in';
  }

  return (
    <Wrapper>
      <button className={className} {...rest}>
        {children}
      </button>
    </Wrapper>
  );
}

export { CustomButton };

const Wrapper = styled.div`
  .custom-button {
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }

    &.google-sign-in {
      background-color: #4285f4;
      color: white;

      &:hover {
        background-color: #357ae8;
        border: none;
      }
    }
  }
`;
