import React from 'react';
import styled from 'styled-components';

interface CustomButtonProps {
  type?: 'button' | 'submit';
  onClick?(): void;
  isGoogleSignIn?: boolean;
  isInverted?: boolean;
  isForCollectionItem?: boolean;
  children: React.ReactChildren | string;
}

function CustomButton({
  children,
  isGoogleSignIn,
  isInverted,
  isForCollectionItem,
  ...rest
}: CustomButtonProps) {
  let className = 'custom-button';

  if (isGoogleSignIn) className += ' google-sign-in';
  if (isInverted) className += ' inverted';

  return (
    <ButtonWrapper className={className} {...rest}>
      {children}
    </ButtonWrapper>
  );
}

export { CustomButton };

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

  &.inverted {
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
  }
`;
