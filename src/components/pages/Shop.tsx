import React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';

import { CollectionOverview } from './shop/collectionPreview/CollectionOverview';
import { Category } from './shop/Category';

function Shop({ match }: RouteComponentProps) {
  return (
    <div className="shop-page">
      <Switch>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:categoryId`} component={Category} />
      </Switch>
    </div>
  );
}

export { Shop };
