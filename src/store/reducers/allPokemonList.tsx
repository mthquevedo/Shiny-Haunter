import { createSlice } from "@reduxjs/toolkit";

const initialState: string[] = [];

const allPokemonListSlice = createSlice({
    name: "allPokemonList",
    initialState,
    reducers: {}
});

export default allPokemonListSlice.reducer;