// import SHOP_DATA from './shop.data';
import shopTypes from './shop.types';

const INITIAL_STATE = {
  collections: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
   case shopTypes.SHOP_TYPES:
     return {
     ...state ,
     collections : action.payload
     }
    default:
      return state;
  }
};

export default shopReducer;

