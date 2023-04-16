import { createSlice } from "@reduxjs/toolkit";

export const dondathangSlice = createSlice({
    name: "dondathang",
    initialState: {
        dondathang: null,
        listsp:[],
    },
    reducers: {
        setDataDDH: (state, action) => {
            state.dondathang = action.payload;
        },
        setDataListSP:(state,action)=>{
            state.listsp = action.payload;

        }

    },
});
export const { setDataDDH, setDataListSP } = dondathangSlice.actions;
export default dondathangSlice.reducer;
