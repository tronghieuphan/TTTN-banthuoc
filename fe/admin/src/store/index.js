import { configureStore } from '@reduxjs/toolkit';
import menuSlice from '../slices/menuSlice';

const rootReducer = {
    menu: menuSlice
};

const store = configureStore({
    reducer: rootReducer  
});

export default store;