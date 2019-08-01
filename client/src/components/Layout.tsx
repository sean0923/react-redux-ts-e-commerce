import React from 'react';

import { Header } from './layout/Header';

import { BrowserRouter } from 'react-router-dom';

import { SwitchAndRoutes } from './layout/SwitchAndRoutes';

function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <SwitchAndRoutes />
    </BrowserRouter>
  );
}

export { Layout };
