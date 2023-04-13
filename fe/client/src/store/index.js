import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../slices/userSlice';
import sanphamSlice from '../slices/sanphamSlice';


const rootReducer = {
    user:userSlice,
    sanpham:sanphamSlice
   
};

const store = configureStore({
    reducer: rootReducer  
});

export default store;