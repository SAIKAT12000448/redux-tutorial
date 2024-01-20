import { configureStore } from '@reduxjs/toolkit'
// import cartReducer from './feature/cart/cartSlice'
// import productReducer from '../pages/products/productSlice'
import counterReducer from './feature/counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
  })

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;
