import React from 'react';
import ReactStripeCheckout, { Token } from 'react-stripe-checkout';
import { publishableKey } from '../../../config/stripe-config';

import { firebase } from '../../../firebase/firebase';

function TestPage() {
  const price = 100;

  const centPrice = price * 100;

  const onToken = (token: Token) => {
    console.log('token: ', token);

    firebase
      .functions()
      .httpsCallable('stripTest')({ token, amount: centPrice })
      .then((data) => {
        console.log('data: ', data);
        alert('Payment Successful');
      });
  };

  return (
    <ReactStripeCheckout
      stripeKey={publishableKey}
      label="Pay Now"
      name="Clothing Comp"
      description={`Your total is $${price}`}
      // image="http://svgshare.com/i/CUz.svg"
      amount={centPrice}
      shippingAddress
      billingAddress
      token={onToken}
    />
  );
}

export { TestPage };

function StripeCheckoutButton() {}

export { StripeCheckoutButton };
