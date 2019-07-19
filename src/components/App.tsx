import React from 'react';

import { Layout } from './Layout';

import { AuthProvider } from '../context/AuthContext';
// import { CurrUserProvider } from '../context/CurrUserContext';
import { AbstactUserReducer } from './abstract/AbstactUserReducer';

function App() {
  return (
    <AuthProvider>
      {/* <CurrUserProvider> */}
      <AbstactUserReducer>
        <Layout />
      </AbstactUserReducer>
      {/* </CurrUserProvider> */}
    </AuthProvider>
  );
}

export { App };
