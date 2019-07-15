import React from "react";
import styled from "styled-components";
import { withRouter, RouteComponentProps } from "react-router-dom";

import "./menuItem/menuItem.styles.scss";

export interface MenuItemProps {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
  size?: "large";
}

interface Props extends RouteComponentProps {
  menuItem: MenuItemProps;
}

function _MenuItem(props: Props) {
  const { menuItem } = props;

  return (
    <div className="menu-item">
      <Wrapper imageUrl={menuItem.imageUrl} size={menuItem.size} className="background-img" />
      <div className="content">
        <h1 className="title">{menuItem.title}</h1>
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
  height: ${({ size }) => size && "380px"};
`;
