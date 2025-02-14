import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    teste: "teste"
}];

const catchlistSlice = createSlice({
    name: "catchlist",
    initialState,
    reducers: {}
});

export default catchlistSlice.reducer;