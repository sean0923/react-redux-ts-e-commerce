import React from 'react';
import styled from 'styled-components';

interface CustomButtonProps {
  type?: 'button' | 'submit';
  children: React.ReactChildren | string;
}

function CustomButton({ children, ...rest }: CustomButtonProps) {
  return (
    <Wrapper>
      <button className="custom-button" {...rest}>
        {children}
      </button>
    </Wrapper>
  );
}

export { CustomButton };

const shrinkLabel = `
  top: -14px;
  font-size: 12px;
  color: var(--color-main);
`;

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
  }
`;
