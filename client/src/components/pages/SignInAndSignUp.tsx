import React from 'react';
import styled from 'styled-components';

import { SignIn } from './signInAndSignUp/SignIn';
import { SignUp } from './signInAndSignUp/SignUp';

function SignInAndSignUp() {
  return (
    <Wrapper>
      <SignIn />
      <SignUp />
    </Wrapper>
  );
}

export { SignInAndSignUp };

const Wrapper = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
`;
