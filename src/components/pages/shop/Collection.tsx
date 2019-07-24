import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface ParamsProps {
  collectionId: string;
}

function Collection({ match }: RouteComponentProps<ParamsProps>) {
  console.log('match.params.collectionId: ', match.params.collectionId);
  // const { params }: { params: ParamsProps } = match;
  // params.collectionId

  // (match.params as ParamsProps).collectionId;
  return (
    <div>
      <h2>Collection Page {match.params.collectionId}</h2>
    </div>
  );
}

export { Collection };
