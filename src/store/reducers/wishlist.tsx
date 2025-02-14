import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    teste: "teste"
}];

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {}
});

export default wishlistSlice.reducer;