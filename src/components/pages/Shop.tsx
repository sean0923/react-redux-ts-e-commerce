import React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

import { RootReducerProp } from '../../redux/rootReducer';

import { CollectionRows } from './shop/CollectionRows';
import { Collection } from './shop/Collection';

import { WithSpinner } from '../hoc/with-spinner/with-spinner.component';

import { fetchCollectionAsync, fetchCollectionStart } from '../../redux/rootActions';
import { selectIsFetchingCollections } from '../../redux/shop/shop.selector';

const CollectionRowsWithSpinner = WithSpinner(CollectionRows);
const CollectionWithSpinner = WithSpinner(Collection);

interface Props extends RouteComponentProps {
  dispatch: Function;
  isFetchingCollection: boolean;
}

function _Shop(props: Props) {
  const { match, dispatch, isFetchingCollection } = props;

  React.useEffect(() => {
    // dispatch(fetchCollectionAsync());
    dispatch(fetchCollectionStart());
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Switch>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionRowsWithSpinner isLoading={isFetchingCollection} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => <CollectionWithSpinner isLoading={isFetchingCollection} {...props} />}
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state: RootReducerProp) => {
  return {
    isFetchingCollection: selectIsFetchingCollections(state),
  };
};

const Shop = connect(mapStateToProps)(_Shop);

export { Shop };
