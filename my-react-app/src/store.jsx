import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productsReducer from './slice/productsSlice';
import productReducer from './slice/singleproductSlice';

const rootReducer = combineReducers({
  productsState: productsReducer,
  productState:productReducer
});

const store = configureStore({
  reducer: rootReducer,

});

export default store;
