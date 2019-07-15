import React from "react";
import styled from "styled-components";
import "./menuItem/menuItem.styles.scss";

export interface MenuItemProps {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
  size?: string;
}

function MenuItem({ menuItem }: { menuItem: MenuItemProps }) {
  console.log("menuItem.linkUrl: ", menuItem.imageUrl);
  return (
    <Wrapper imageUrl={menuItem.imageUrl} className="menu-item">
      <div className="content">
        <h1 className="title">{menuItem.title}</h1>
        <div className="subtitle">SHOW NOW</div>
      </div>
    </Wrapper>
  );
}

export { MenuItem };

interface WrapperProp {
  imageUrl: string;
  size?: string;
}
const Wrapper = styled.div<WrapperProp>`
  background-image: url(${({ imageUrl }) => imageUrl});
`;
