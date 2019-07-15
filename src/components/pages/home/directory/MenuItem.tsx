import React from "react";
import styled from "styled-components";
import "./menuItem/menuItem.styles.scss";

export interface MenuItemProps {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
  size?: "large";
}

function MenuItem({ menuItem }: { menuItem: MenuItemProps }) {
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

export { MenuItem };

interface WrapperProp {
  imageUrl: string;
  size?: string;
}
const Wrapper = styled.div<WrapperProp>`
  background-image: url(${({ imageUrl }) => imageUrl});
  height: ${({ size }) => size && "380px"};
`;
