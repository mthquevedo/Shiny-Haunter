import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./reducers/wishlist";

const store = configureStore({
    reducer: {
        wishlist: wishlistSlice,
    }
});

export default store