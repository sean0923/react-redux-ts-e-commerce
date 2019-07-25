import React from 'react';
import './collectionPreview/collection-preview.styles.scss';

import { CollectionItem } from './collectionPreview/collectionOverview/CollectionItem';

import { ShopCollectionProps, ShopItemProps } from '../../../redux/shop/shop.data';

function CollectionPreview({ title, routeName, items }: ShopCollectionProps) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>

      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item: ShopItemProps) => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
}

export { CollectionPreview };
