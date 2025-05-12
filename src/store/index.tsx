import { configureStore } from "@reduxjs/toolkit";
import allPokemonListSlice from "./reducers/allPokemonList";
import catchlistSlice from "./reducers/catchlist";
import pokedexListSlice from "./reducers/pokedexList";
import searchSugestionsSlice from "./reducers/searchSugetions";
import wishlistSlice from "./reducers/wishlist";

const store = configureStore({
    reducer: {
        wishlist: wishlistSlice,
        catchlist: catchlistSlice,
        allPokemonList: allPokemonListSlice,
        searchSugestions: searchSugestionsSlice,
        pokedexList: pokedexListSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;