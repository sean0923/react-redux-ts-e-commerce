import React from 'react';
import { connect } from 'react-redux';

import { RootReducerProp } from '../../../redux/rootReducer';
import { DirectoryReducerProps, MenuItemProps } from '../../../redux/directory/directoryReducer';
import { MenuItem } from './directory/MenuItem';

import './directory/directory.styles.scss';

interface DirectoryProps {
  directoryReducer: DirectoryReducerProps;
}

function _Directory({ directoryReducer }: DirectoryProps) {
  return (
    <div className="directory-menu">
      {directoryReducer.map((menuItem: MenuItemProps) => {
        return <MenuItem key={menuItem.id} menuItem={menuItem} />;
      })}
    </div>
  );
}

const mapStateToProps = (state: RootReducerProp) => {
  return {
    directoryReducer: state.directoryReducer,
  };
};

const Directory = connect(mapStateToProps)(_Directory);
export { Directory };
