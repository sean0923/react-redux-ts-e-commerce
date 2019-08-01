import React from 'react';

import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';

function WithSpinner(WrappedComponent: any) {
  interface SpinnerProps {
    isLoading: boolean;
  }

  const Spinner = ({ isLoading, ...rest }: SpinnerProps) => {
    if (isLoading) {
      return (
        <SpinnerOverlay>
          <SpinnerContainer />
        </SpinnerOverlay>
      );
    }

    return <WrappedComponent {...rest} />;
  };

  return Spinner;
}

export { WithSpinner };
