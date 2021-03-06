import React from 'react';
import ReactStripeCheckout, { Token } from 'react-stripe-checkout';
import { publishableKey } from '../../../config/stripe-config';

interface Props {
  price: number;
}

function StripeCheckoutButton({ price }: Props) {
  const centPrice = price * 100;

  const onToken = (token: Token) => {
    console.log('token: ', token);
    alert('Payment Successful');
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

export { StripeCheckoutButton };
