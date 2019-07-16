import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import { Header } from './layout/Header';

import { Home } from './pages/Home';
import { Shop } from './pages/Shop';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </BrowserRouter>
  );
}

export { App };
