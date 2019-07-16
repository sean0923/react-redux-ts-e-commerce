import React, { FormEvent } from 'react';

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
        <input name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="email">Email</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
}

export { SignIn };
