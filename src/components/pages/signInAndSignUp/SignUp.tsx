import React, { FormEvent } from 'react';
import styled from 'styled-components';

import { FormInput } from '../../common/FormInput';
import { CustomButton } from '../../common/CustomButton';

import { auth, createUserThenGetUserRef } from '../../../firebase/firebase';

type InputType = React.ChangeEvent<HTMLInputElement>;

function SignUp() {
  const [displayName, setDisplayName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [confirmPassword, setConfirmPassword] = React.useState<string>('');

  const resetForm = () => {
    setDisplayName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }

    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      if (user) {
        createUserThenGetUserRef(user, { displayName });
        resetForm();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Wrapper className="sign-up">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          name="displayName"
          type="displayName"
          value={displayName}
          onChange={(e: InputType) => {
            setDisplayName(e.target.value);
          }}
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={(e: InputType) => {
            setPassword(e.target.value);
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
        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          type="confirmPassword"
          value={confirmPassword}
          onChange={(e: InputType) => {
            setPassword(e.target.value);
          }}
        />
        <div className="buttons">
          <CustomButton type="submit">Sign Up</CustomButton>
          {/* <CustomButton onClick={signInWithGoogle} type="button" isGoogleSignIn>
            Sign In With Google
          </CustomButton> */}
        </div>
      </form>
    </Wrapper>
  );
}

export { SignUp };

const Wrapper = styled.div`
  .sign-up {
    display: flex;
    flex-direction: column;
    width: 380px;

    .title {
      margin: 10px 0;
    }
  }
`;
