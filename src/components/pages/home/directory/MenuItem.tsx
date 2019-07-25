import React from 'react';
import styled from 'styled-components';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { MenuItemProps } from '../../../../redux/directory/directoryReducer';

import './menuItem/menuItem.styles.scss';

interface Props extends RouteComponentProps {
  menuItem: MenuItemProps;
}

function _MenuItem({ menuItem, history }: Props) {
  const { title, imageUrl, linkUrl, size } = menuItem;

  return (
    <div className="menu-item" onClick={() => history.push(linkUrl)}>
      <Wrapper imageUrl={imageUrl} size={size} className="background-img" />
      <div className="content">
        <h1 className="title">{title}</h1>
        <div className="subtitle">SHOW NOW</div>
      </div>
    </div>
  );
}

const MenuItem = withRouter(_MenuItem);
export { MenuItem };

interface WrapperProp {
  imageUrl: string;
  size?: string;
}
const Wrapper = styled.div<WrapperProp>`
  background-image: url(${({ imageUrl }) => imageUrl});
  height: ${({ size }) => size && '380px'};
`;
