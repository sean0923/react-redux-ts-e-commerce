import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface ParamsProps {
  categoryId: string;
}

function Category({ match }: RouteComponentProps<ParamsProps>) {
  console.log('match.params.categoryId: ', match.params.categoryId);
  // const { params }: { params: ParamsProps } = match;
  // params.categoryId

  // (match.params as ParamsProps).categoryId;
  return (
    <div>
      <div>Category</div>
    </div>
  );
}

export { Category };
