import React from 'react';
import styled from 'styled-components';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { CollectionItem } from '../common/CollectionItem';

import { ShopItemProps, ShopCollectionProps } from '../../../../redux/shop/shop.data';

interface Props extends RouteComponentProps, ShopCollectionProps {}
function _CollectionRow({ title, routeName, items, history, match }: Props) {
  return (
    <Wrapper>
      <div className="collection-preview">
        <h1 className="title" onClick={() => history.push(`${match.path}/${routeName}`)}>
          {title}
        </h1>

        <div className="preview">
          {items
            .filter((item, idx) => idx < 4)
            .map((item: ShopItemProps) => {
              return <CollectionItem key={item.id} item={item} />;
            })}
        </div>
      </div>
    </Wrapper>
  );
}

const CollectionRow = withRouter(_CollectionRow);

export { CollectionRow };

const Wrapper = styled.div`
  .collection-preview {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    .title {
      cursor: pointer;
      font-size: 28px;
      margin-bottom: 25px;

      &:hover {
        text-decoration: underline;
      }
    }

    .preview {
      display: flex;
      justify-content: space-between;
    }
  }
`;
