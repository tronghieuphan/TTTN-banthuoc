import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../slices/userSlice';
import sanphamSlice from '../slices/sanphamSlice';
<<<<<<< HEAD
import dondathangSlice from '../slices/dondathangSlice';
=======
import danhmucSlice from '../slices/danhmucSlice';
import loaisanphamSlice from '../slices/loaisanphamSlice';
>>>>>>> 09eb0968c339bfae1f98aa67b0606c1da1082e15


const rootReducer = {
    user:userSlice,
    sanpham:sanphamSlice,
<<<<<<< HEAD
    dondathang:dondathangSlice
   
=======
    danhmuc:danhmucSlice,
    loaisanpham:loaisanphamSlice
>>>>>>> 09eb0968c339bfae1f98aa67b0606c1da1082e15
};

const store = configureStore({
    reducer: rootReducer  
});

export default store;