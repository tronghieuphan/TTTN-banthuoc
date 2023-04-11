import { createSlice } from "@reduxjs/toolkit";

export const hadmSlice = createSlice({
    name: "hadm",
    initialState: {
        hinhanh:[],
        danhmuc:[]
    },
    reducers: {
        setDataHA: (state,action) => {
           state.hinhanh= action.payload
        },
       setDataDM:(state,action)=>{
            state.danhmuc=action.payload
       }
    },
});
export const { setDataDM,setDataHA } = hadmSlice.actions;
export default hadmSlice.reducer;
