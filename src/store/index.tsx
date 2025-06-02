import { configureStore } from "@reduxjs/toolkit";
import allPokemonListSlice from "./reducers/allPokemonList";
import catchlistSlice from "./reducers/catchlist";
import pokedexListSlice from "./reducers/pokedexList";
import searchPokedexSlice from "./reducers/searchPokedex";
import wishlistSlice from "./reducers/wishlist";
import userPreferencesSlice from "./reducers/userPreferences";
import { catchlistPersistenceMiddleware } from "./middleware/catchlistPersistence";
import { wishlistPersistenceMiddleware } from "./middleware/wishlistPersistence";
import { userPreferencesPersistences } from "./middleware/userPreferencesPersistences";

const store = configureStore({
    reducer: {
        wishlist: wishlistSlice,
        catchlist: catchlistSlice,
        allPokemonList: allPokemonListSlice,
        searchPokedex: searchPokedexSlice,
        pokedexList: pokedexListSlice,
        userPreferences: userPreferencesSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            wishlistPersistenceMiddleware,
            catchlistPersistenceMiddleware,
            userPreferencesPersistences
        ),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;