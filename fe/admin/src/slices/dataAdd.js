import { createSlice } from "@reduxjs/toolkit";

export const dataAddSlice = createSlice({
    name: "dataAdd",
    initialState: {
        nhacungcap: [],
        nguoidung: [],
        hinhanh: [],
        sanpham:[],
        dondathang:[]
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
        setDataSP: (state,action) => {
            state.sanpham= action.payload      
        },
        setDataDDH: (state,action) => {
            state.dondathang= action.payload      
        },
        
    },
});
export const { setDataNcc, setDataNd, setDataHa, setDataSP, setDataDDH } = dataAddSlice.actions;
export default dataAddSlice.reducer;
