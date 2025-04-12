import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./reducers/wishlist";
import catchlistSlice from "./reducers/catchlist";
import allPokemonListSlice from "./reducers/allPokemonList";
import searchSugestionsSlice from "./reducers/searchSugetions";

const store = configureStore({
    reducer: {
        wishlist: wishlistSlice,
        catchlist: catchlistSlice,
        allPokemonList: allPokemonListSlice,
        searchSugestions: searchSugestionsSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;