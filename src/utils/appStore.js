import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice';
import addressReducer from './slices/addressSlice';

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
        address: addressReducer
    }
});

export default appStore;