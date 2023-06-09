import { createSlice } from "@reduxjs/toolkit";

export const dataAddSlice = createSlice({
    name: "dataAdd",
    initialState: {
        nhacungcap: [],
        nguoidung: [],
        hinhanh: [],
        sanpham: [],
        dondathang: null,
        khuyenmai: [],
    },
    reducers: {
        setDataNcc: (state, action) => {
            state.nhacungcap = action.payload;
        },
        setDataNd: (state, action) => {
            state.nguoidung = action.payload;
        },
        setDataHa: (state, action) => {
            state.hinhanh = action.payload;
        },
        setDataSP: (state, action) => {
            state.sanpham = action.payload;
        },
        setDataDDH: (state, action) => {
            state.dondathang = action.payload;
        },
        setDataKM: (state, action) => {
            state.khuyenmai = action.payload;
        },
    },
});
export const { setDataNcc, setDataNd, setDataHa, setDataSP, setDataDDH, setDataKM } =
    dataAddSlice.actions;
export default dataAddSlice.reducer;
