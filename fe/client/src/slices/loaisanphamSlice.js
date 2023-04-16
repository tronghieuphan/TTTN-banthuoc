import { createSlice } from "@reduxjs/toolkit";

export const loaisanphamSlice = createSlice({
    name: "loaisanpham",
    initialState: {
        thongtinloaisanpham:[]
    },
    reducers: {
        setDataLSP: (state,action) => {
            state.thongtinloaisanpham=action.payload
        },
    },
});
export const { setDataLSP } = loaisanphamSlice.actions;
export default loaisanphamSlice.reducer;
