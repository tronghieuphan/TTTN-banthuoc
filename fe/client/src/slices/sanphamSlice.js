import { createSlice } from "@reduxjs/toolkit";

export const sanphamSlice = createSlice({
    name: "sanpham",
    initialState: {
        thongtinsanpham1:[]
    },
    reducers: {
        setDataSP: (state,action) => {
            state.thongtinsanpham1=action.payload
        },
    },
});
export const { setDataSP } = sanphamSlice.actions;
export default sanphamSlice.reducer;
