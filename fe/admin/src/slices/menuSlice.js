import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
    name: "menu",
    initialState: {
        menu: false,
    },
    reducers: {
        open: (state) => {
            state.menu = true;
        },
        hide: (state) => {
            state.menu = false;
        },
    },
});
export const { open, hide } = menuSlice.actions;
export default menuSlice.reducer;
