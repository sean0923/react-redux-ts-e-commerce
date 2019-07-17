import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import { Header } from './layout/Header';

import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { SignInAndSignUp } from './pages/SignInAndSignUp';

import { AuthProvider } from '../context/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/sign-in-and-sign-up" component={SignInAndSignUp} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export { App };
