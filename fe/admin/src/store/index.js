import { configureStore } from '@reduxjs/toolkit';
import menuSlice from '../slices/menuSlice';
import userSlice from '../slices/userSlice';
const rootReducer = {
    menu: menuSlice,
    user:userSlice
};

const store = configureStore({
    reducer: rootReducer  
});

export default store;