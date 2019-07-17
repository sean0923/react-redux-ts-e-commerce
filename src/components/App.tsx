import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import { Header } from './layout/Header';

import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { SignInAndSignUp } from './pages/SignInAndSignUp';

import { firebase, auth } from '../firebase/firebase';

function App() {
  const [authState, setAuthState] = React.useState<null | firebase.User>(null);

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authState) => {
      console.log('authState: ', authState);
      setAuthState(authState);
    });

    return unsubscribe;
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/sign-in-and-sign-up" component={SignInAndSignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export { App };
