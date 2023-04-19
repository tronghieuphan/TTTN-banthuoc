import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";
import sanphamSlice from "../slices/sanphamSlice";
import dondathangSlice from "../slices/dondathangSlice";
import danhmucSlice from "../slices/danhmucSlice";

const rootReducer = {
    user: userSlice,
    sanpham: sanphamSlice,
    dondathang: dondathangSlice,
    danhmuc:danhmucSlice
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
