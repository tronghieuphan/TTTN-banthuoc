import { createSlice } from "@reduxjs/toolkit";

export const dataAddSlice = createSlice({
    name: "dataAdd",
    initialState: {
        nhacungcap:[],
        nguoidung:[]
    },
    reducers: {
        setDataNcc: (state,action) => {
           state.nhacungcap= action.payload      
        },
        setDataNd: (state,action) => {
            state.nguoidung= action.payload      
        },
       
    },
});
export const { setDataNcc, setDataNd } = dataAddSlice.actions;
export default dataAddSlice.reducer;
