import { createSlice } from "@reduxjs/toolkit";

export const xxdmSlice = createSlice({
    name: "xxdm",
    initialState: {
        xuatxu:[],
        danhmuc:[]
    },
    reducers: {
        setDataXX: (state,action) => {
           state.xuatxu= action.payload
        },
       setDataDM:(state,action)=>{
            state.danhmuc=action.payload
       }
    },
});
export const { setDataDM,setDataXX } = xxdmSlice.actions;
export default xxdmSlice.reducer;
