import React from 'react';
import styled from 'styled-components';

type InputType = React.ChangeEvent<HTMLInputElement>;

interface FormInputProps {
  label?: string;
  value?: string;
  name?: string;
  type?: string;
  onChange(e: InputType): void;
}

function FormInput({ label, ...rest }: FormInputProps) {
  const additionalClassName = rest.value && rest.value.length ? 'shrink' : '';

  return (
    <Wrapper>
      <div className="group">
        <input type="text" className="form-input" {...rest} />
        {label && <label className={`form-input-label ${additionalClassName}`}>{label}</label>}
      </div>
    </Wrapper>
  );
}

export { FormInput };

const shrinkLabel = `
  top: -14px;
  font-size: 12px;
  color: var(--color-main);
`;

const Wrapper = styled.div`
  --color-sub: grey;
  --color-main: black;
  /* --color-sub: grey; */
  /* --color-main: black; */

  /* @mixin shrinkLabel {
    top: -14px;
    font-size: 12px;
    color: var(--color-main);
  } */

  .group {
    position: relative;
    margin: 45px 0;

    .form-input {
      background: none;
      background-color: white;
      color: var(--color-sub);
      font-size: 18px;
      padding: 10px 10px 10px 5px;
      display: block;
      width: 100%;
      border: none;
      border-radius: 0;
      border-bottom: 1px solid var(--color-sub);
      margin: 25px 0;

      &:focus {
        outline: none;
      }

      &:focus ~ .form-input-label {
        ${shrinkLabel}
      }
    }

    input[type='password'] {
      letter-spacing: 0.3em;
    }

    .form-input-label {
      color: var(--color-sub);
      font-size: 16px;
      font-weight: normal;
      position: absolute;
      pointer-events: none;
      left: 5px;
      top: 10px;
      transition: 300ms ease all;

      &.shrink {
        ${shrinkLabel}
      }
    }
  }
`;
