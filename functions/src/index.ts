import * as functions from 'firebase-functions';
import * as Stripe from 'stripe';

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

const stripe = new Stripe(functions.config().stripe.secret_key);

export const stripTest = functions.https.onCall(async (data, context) => {
  console.log('data: ', data);

  const { token } = data;

  try {
    // const customer = await stripe.customers.create({ email: 'test@email.com' });
    // const source = await stripe.customers.createSource(customer.id, { source: token.id });

    const chargePromise = stripe.charges.create({
      amount: 100,
      currency: 'usd',
      source: token.id,
    });

    return chargePromise;
  } catch (error) {
    console.log('error: ', error);
    return error;
  }
});
