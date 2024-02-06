import { createSlice } from "@reduxjs/toolkit";

export const userDetails = createSlice({
    name: "userDetails",
    initialState: {
        users:[],
        loading: false,
        error: null,

    },
    reducers: {
       
    }
})

export default userDetails.reducer;