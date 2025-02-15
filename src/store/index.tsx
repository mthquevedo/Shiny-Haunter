import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./reducers/wishlist";
import catchlistSlice from "./reducers/catchlist";

const store = configureStore({
    reducer: {
        wishlist: wishlistSlice,
        catchlist: catchlistSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;