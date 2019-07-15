import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route eaxct path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export { App };
