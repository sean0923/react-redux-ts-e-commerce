import React, { FormEvent } from 'react';

import { FormInput } from '../../common/FormInput';

type InputType = React.ChangeEvent<HTMLInputElement>;

function SignIn() {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setEmail('');
    setPassword('');
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
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
        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
}

export { SignIn };
