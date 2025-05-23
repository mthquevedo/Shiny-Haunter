import { configureStore } from "@reduxjs/toolkit";
import allPokemonListSlice from "./reducers/allPokemonList";
import catchlistSlice from "./reducers/catchlist";
import pokedexListSlice from "./reducers/pokedexList";
import searchPokedexSlice from "./reducers/searchPokedex";
import wishlistSlice from "./reducers/wishlist";
import { wishlistPersistenceMiddleware } from "./middleware/wishlistPersistence";

const store = configureStore({
    reducer: {
        wishlist: wishlistSlice,
        catchlist: catchlistSlice,
        allPokemonList: allPokemonListSlice,
        searchPokedex: searchPokedexSlice,
        pokedexList: pokedexListSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(wishlistPersistenceMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;