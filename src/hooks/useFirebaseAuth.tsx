import React from 'react';

import { firebase, auth, signInWithGoogle } from '../firebase/firebase';

function useFirebaseAuth() {
  const [
    authPropsFromFirebase,
    setAuthPropsFromFirebase,
  ] = React.useState<firebase.UserInfo | null>();

  const toggleSignInStatus = () => {
    if (authPropsFromFirebase) {
      auth.signOut();
    } else {
      signInWithGoogle();
    }
  };

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authPropsFromFirebase) => {
      if (authPropsFromFirebase) {
        setAuthPropsFromFirebase(authPropsFromFirebase);
      } else {
        setAuthPropsFromFirebase(null);
      }
    });

    return unsubscribe;
  }, []);

  return { authPropsFromFirebase, toggleSignInStatus };
}

export { useFirebaseAuth };
