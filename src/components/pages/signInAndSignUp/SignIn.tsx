import React, { FormEvent } from 'react';
import styled from 'styled-components';

import { FormInput } from '../../common/FormInput';
import { CustomButton } from '../../common/CustomButton';

import { signInWithGoogle, auth } from '../../../firebase/firebase';

type InputType = React.ChangeEvent<HTMLInputElement>;

function SignIn() {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const { user } = await auth.signInWithEmailAndPassword(email, password);

    try {
      if (user) {
      }
    } catch (error) {
      console.error(error);
    }

    resetForm();
  };

  

  return (
    <Wrapper>
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={(e: InputType) => {
            setEmail(e.target.value);
          }}
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={(e: InputType) => {
            setPassword(e.target.value);
          }}
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} type="button" isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </Wrapper>
  );
}

export { SignIn };

const Wrapper = styled.div`
  width: 380px;

  display: flex;
  flex-direction: column;

  .title {
    margin: 10px 0;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }
`;
