import React from 'react';
import styled, { css } from 'styled-components';

interface CustomButtonProps {
  type?: 'button' | 'submit';
  onClick?(): void;
  isGoogleSignIn?: boolean;
  isInverted?: boolean;
  children: React.ReactChildren | string;
}

function CustomButton({ children, isGoogleSignIn, isInverted, ...rest }: CustomButtonProps) {
  return (
    <ButtonWrapper isGoogleSignIn={isGoogleSignIn} isInverted={isInverted} {...rest}>
      {children}
    </ButtonWrapper>
  );
}

export { CustomButton };

const defaultStyle = css`
  background-color: black;
  color: white;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const googleSigninStyle = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const invertedStyle = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

interface GetCustomButtonStyleProps {
  isGoogleSignIn?: boolean;
  isInverted?: boolean;
}
const getCustomButtonStyle = (props: GetCustomButtonStyleProps) => {
  switch (true) {
    case props.isGoogleSignIn:
      return googleSigninStyle;

    case props.isInverted:
      return invertedStyle;

    default:
      return defaultStyle;
  }
};

const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;

  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;

  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;

  ${getCustomButtonStyle}
`;
