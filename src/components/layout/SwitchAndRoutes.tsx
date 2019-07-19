import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Shop } from '../pages/Shop';
import { SignInAndSignUp } from '../pages/SignInAndSignUp';

function SwitchAndRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/shop" component={Shop} />
      <Route path="/sign-in-and-sign-up" component={SignInAndSignUp} />
    </Switch>
  );
}

export { SwitchAndRoutes };
