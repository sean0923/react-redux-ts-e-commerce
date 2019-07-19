// import React from 'react';
// import { connect } from 'react-redux';

// import { firestore } from '../firebase/firebase';

// import { AuthContext } from '../context/AuthContext';
// import { UserReducerProps } from '../redux/reducers/userReducer';

// import { updateUser } from '../redux/actions/rootActions';

// function _useCurrUser({ children }: { children: JSX.Element[] | JSX.Element }) {
//   const { authPropsFromFirebase } = React.useContext(AuthContext);

//   React.useEffect(() => {
//     if (authPropsFromFirebase) {
//       const unsubscribe = firestore
//         .doc(`users/${authPropsFromFirebase.uid}`)
//         .onSnapshot((snapshot) => {
//           if (snapshot.exists) {
//             updateUser({ id: snapshot.id, ...(snapshot.data() as ValidCurrUserProps) });
//           }
//         });

//       return unsubscribe;
//     } else {
//       updateUser({});
//     }
//   }, [authPropsFromFirebase]);
// }

// const useCurrUser = connect(
//   null,
//   { updateUser }
// )(_useCurrUser);

// export { useCurrUser };

let res: {} = 'a';
res = null;
res = undefined;
res = 'undefined';

// let res: number = 1;
// res = null;
// res = undefined;
// res = 'a';
