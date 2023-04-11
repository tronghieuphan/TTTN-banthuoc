import { configureStore } from '@reduxjs/toolkit';
import menuSlice from '../slices/menuSlice';
import userSlice from '../slices/userSlice';
import xxdmSlice  from '../slices/xuatxudanhmucSlice';
import thdmSlice from'../slices/thuonghieudanhmucSlice';
//import hadmSlice from'../slices/hinhanhdanhmucSlice';
import dataAdd from '../slices/dataAdd';
import lspdmSlice from'../slices/loaisanphamdanhmucSlice';

const rootReducer = {
    menu: menuSlice,
    user:userSlice,
    xxdm:xxdmSlice,
    dataAdd:dataAdd,
    thdm:thdmSlice,
    //hadm:hadmSlice,
    lspdm:lspdmSlice,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
