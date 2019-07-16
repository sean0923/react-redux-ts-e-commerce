import React from 'react';

import { CollectionPreview } from './shop/CollectionPreview';

import { SHOP_DATA, ShopCollectionProps } from './shop/shoppingData';

function Shop() {
  const [collections] = React.useState(SHOP_DATA);

  return (
    <div>
      <div>Shop</div>
      {collections.map((collection: ShopCollectionProps) => {
        return <CollectionPreview key={collection.id} {...collection} />;
      })}
    </div>
  );
}

export { Shop };
