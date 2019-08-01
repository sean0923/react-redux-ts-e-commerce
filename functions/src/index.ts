import * as functions from 'firebase-functions';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
  console.log('working?????????');
  response.send('Hello from Firebase! eee');
});

export const customFunc1 = functions.https.onRequest((request, response) => {
  console.log('request: ', request.body);
  response.send({ check: request.body });
});
