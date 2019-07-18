import React from 'react';

import { firebase, auth } from '../firebase/firebase';

function useFirebaseAuth() {
  const [
    authPropsFromFirebase,
    setAuthPropsFromFirebase,
  ] = React.useState<firebase.UserInfo | null>();

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

  return { authPropsFromFirebase, setAuthPropsFromFirebase };
}

export { useFirebaseAuth };
