import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  selectedProductId: null,
  products: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_PRODUCT':
      return {
        ...state,
        selectedProductId: action.payload.productId,
      };
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        ...state,
        products: action.payload.products,
      };
    default:
      return state;
  }
}

const store = configureStore({
  reducer,
});