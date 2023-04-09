import { configureStore } from '@reduxjs/toolkit';
import menuSlice from '../slices/menuSlice';
import userSlice from '../slices/userSlice';
import xxdmSlice from '../slices/xuatxudanhmucSlice';
const rootReducer = {
    menu: menuSlice,
    user:userSlice,
    xxdm:xxdmSlice,
};

const store = configureStore({
    reducer: rootReducer  
});

export default store;