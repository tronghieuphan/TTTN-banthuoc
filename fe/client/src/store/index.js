import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../slices/userSlice';
import sanphamSlice from '../slices/sanphamSlice';
import danhmucSlice from '../slices/danhmucSlice';
import loaisanphamSlice from '../slices/loaisanphamSlice';


const rootReducer = {
    user:userSlice,
    sanpham:sanphamSlice,
    danhmuc:danhmucSlice,
    loaisanpham:loaisanphamSlice
};

const store = configureStore({
    reducer: rootReducer  
});

export default store;