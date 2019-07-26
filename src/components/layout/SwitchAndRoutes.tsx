import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Shop } from '../pages/Shop';
import { SignInAndSignUp } from '../pages/SignInAndSignUp';
import { CheckoutPage } from '../pages/CheckoutPage';
import { FirebaseDataUpload } from '../pages/FirebaseDataUpload';

import { AuthContext } from '../../context/AuthContext';

function SwitchAndRoutes() {
  const { authPropsFromFirebase } = React.useContext(AuthContext);
  console.log('authPropsFromFirebase: ', authPropsFromFirebase);
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/shop" component={Shop} />
      <Route exact path="/checkout" component={CheckoutPage} />
      <Route exact path="/firebase-data-upload" component={FirebaseDataUpload} />
      {/* <Route path="/sign-in-and-sign-up" component={SignInAndSignUp} /> */}
      <Route
        exact
        path="/sign-in-and-sign-up"
        render={() => (authPropsFromFirebase ? <Redirect to="/" /> : <SignInAndSignUp />)}
      />
    </Switch>
  );
}

export { SwitchAndRoutes };
