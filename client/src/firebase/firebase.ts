import * as firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

import { firebaseConfig } from '../config/firebase-config';

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

const noUserInDbThenCreateUser: (
  authPropsFromFirebase: firebase.User,
  additionalProps?: firebase.auth.AdditionalUserInfo
) => void = async (authPropsFromFirebase, additionalProps) => {
  if (!authPropsFromFirebase) {
    return;
  }

  const userRef = firestore.doc(`users/${authPropsFromFirebase.uid}`);
  const snapshot = await userRef.get();
  const noUserInDB = !snapshot.exists;

  if (noUserInDB) {
    const { displayName, email } = authPropsFromFirebase;
    const createdAt = new Date();
    userRef.set({ displayName, email, createdAt, ...additionalProps });
  }
};

const signInWithGoogle = async () => {
  const { user } = await auth.signInWithPopup(provider);
  if (user) {
    noUserInDbThenCreateUser(user);
  }
};

export { firebase, auth, firestore, signInWithGoogle, noUserInDbThenCreateUser };
