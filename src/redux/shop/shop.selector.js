import { createSelector } from "reselect";

// const COLLECTION_ID_MAP = {
//     hats : 1,
//     sneakers : 2,
//     jackets : 3,
//     womens : 4,
//     mens : 5
// }         .find( shopdate => shopdate.id === COLLECTION_ID_MAP[collectionUrlParam])

const shoppageSelect = state => state.shop;


export const ShopSelect = createSelector(
    [shoppageSelect],
    shop =>  shop.collections
)

export const ShopSelect1 = createSelector(
  [ShopSelect],
  collections => Object.keys(collections).map( key => collections[key] )
)



export const selectCollection = collectionUrlParam =>
  createSelector(
    [ShopSelect],
    collections => collections[collectionUrlParam]
  );


  // import { createSelector } from 'reselect';

  // const selectShop = state => state.shop;
  
  // export const selectCollections = createSelector(
  //   [selectShop],
  //   shop => shop.collections
  // );
  
  // export const selectCollectionsForPreview = createSelector(
  //   [selectCollections],
  //   collections => Object.keys(collections).map(key => collections[key])
  // );
  
  // export const selectCollection = collectionUrlParam =>
  //   createSelector(
  //     [selectCollections],
  //     collections => collections[collectionUrlParam]
  //   );