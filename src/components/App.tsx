import React from 'react';

import { Layout } from './Layout';

import { AuthProvider } from '../context/AuthContext';
import { CurrUserProvider } from '../context/CurrUserContext';

function App() {
  return (
    <AuthProvider>
      <CurrUserProvider>
        <Layout />
      </CurrUserProvider>
    </AuthProvider>
  );
}

export { App };
