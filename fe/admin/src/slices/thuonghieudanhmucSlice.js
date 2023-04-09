import { createSlice } from "@reduxjs/toolkit";

export const thdmSlice = createSlice({
    name: "thdm",
    initialState: {
        thuonghieu:[],
        danhmuc:[]
    },
    reducers: {
        setDataTH: (state,action) => {
           state.thuonghieu= action.payload
        },
       setDataDM:(state,action)=>{
            state.danhmuc=action.payload
       }
    },
});
export const { setDataDM,setDataTH } = thdmSlice.actions;
export default thdmSlice.reducer;
