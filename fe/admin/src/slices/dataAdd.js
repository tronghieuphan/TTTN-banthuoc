import { createSlice } from "@reduxjs/toolkit";

export const dataAddSlice = createSlice({
    name: "dataAdd",
    initialState: {
        nhacungcap: [],
        nguoidung: [],
        hinhanh: [],
<<<<<<< HEAD
        sanpham: [],
        dondathang: null,
=======
        sanpham:[],
        dondathang:[],
        khuyenmai:[]
>>>>>>> 1deb0d107edcf50d9e5658854f98c00b5d0bce2b
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
<<<<<<< HEAD
=======
        setDataKM: (state,action) => {
            state.khuyenmai= action.payload      
        },
        
>>>>>>> 1deb0d107edcf50d9e5658854f98c00b5d0bce2b
    },
});
export const { setDataNcc, setDataNd, setDataHa, setDataSP, setDataDDH,setDataKM } = dataAddSlice.actions;
export default dataAddSlice.reducer;
