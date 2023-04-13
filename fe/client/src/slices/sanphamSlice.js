import { createSlice } from "@reduxjs/toolkit";

export const sanphamSlice = createSlice({
    name: "sanpham",
    initialState: {
        thongtinsanpham:[]
    },
    reducers: {
        setDataSP: (state,action) => {
            state.thongtinsanpham=action.payload
        },
    },
});
export const { setDataSP } = sanphamSlice.actions;
export default sanphamSlice.reducer;
