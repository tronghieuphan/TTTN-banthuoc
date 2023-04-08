import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        login: false,
        accout:[]
    },
    reducers: {
        login: (state,action) => {
            state.login = true;
            state.accout=action.payload
        },
        logout: (state) => {
            state.login = false;
            state.accout=[]
        },
    },
});
export const { login,logout } = userSlice.actions;
export default userSlice.reducer;
