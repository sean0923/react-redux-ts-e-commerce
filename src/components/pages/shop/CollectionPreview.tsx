import React from 'react';

import { ShopCollectionProps, ShopItemProps } from './shoppingData';

function CollectionPreview({ title, routeName, items }: ShopCollectionProps) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>

      <div className="preview">
        {items.map((item: ShopItemProps) => {
          return <div key={item.id}>{item.name}</div>;
        })}
      </div>
    </div>
  );
}

export { CollectionPreview };
