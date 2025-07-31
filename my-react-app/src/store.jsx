import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productsReducer from './slice/productsSlice';

const rootReducer = combineReducers({
  productsState: productsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  // default middleware (including thunk) used automatically
});

export default store;
