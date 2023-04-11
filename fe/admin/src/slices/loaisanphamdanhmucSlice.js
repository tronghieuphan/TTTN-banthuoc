import { createSlice } from "@reduxjs/toolkit";

export const lspdmSlice = createSlice({
    name: "lspdm",
    initialState: {
        loaisanpham:[],
        danhmuc:[]
    },
    reducers: {
        setDataLSP: (state,action) => {
           state.loaisanpham= action.payload
        },
       setDataDM:(state,action)=>{
            state.danhmuc=action.payload
       }
    },
});
export const { setDataDM, setDataLSP } = lspdmSlice.actions;
export default lspdmSlice.reducer;
