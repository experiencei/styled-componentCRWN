import shopTypes from "./shop.types";

 const CollectionMap = collectionto => ({
    type: shopTypes.SHOP_TYPES,
    payload : collectionto
  });

export default CollectionMap;