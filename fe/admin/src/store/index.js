import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "../slices/menuSlice";
import userSlice from "../slices/userSlice";
import xxdmSlice from "../slices/xuatxudanhmucSlice";
import thdmSlice from "../slices/thuonghieudanhmucSlice";
import dataAdd from "../slices/dataAdd";

const rootReducer = {
    menu: menuSlice,
    user: userSlice,
    xxdm: xxdmSlice,
    dataAdd: dataAdd,
    thdm: thdmSlice,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
