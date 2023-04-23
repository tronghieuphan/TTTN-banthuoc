import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchvalue: [],
    },
    reducers: {
        setDataSearch: (state, action) => {
            state.searchvalue = action.payload;
        },
    },
});
export const { setDataSearch } = searchSlice.actions;
export default searchSlice.reducer;
