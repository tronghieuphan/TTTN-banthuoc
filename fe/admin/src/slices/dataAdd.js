import { createSlice } from "@reduxjs/toolkit";

export const dataAddSlice = createSlice({
    name: "dataAdd",
    initialState: {
        nhacungcap: [],
        nguoidung: [],
        hinhanh: [],
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
    },
});
export const { setDataNcc, setDataNd, setDataHa } = dataAddSlice.actions;
export default dataAddSlice.reducer;
