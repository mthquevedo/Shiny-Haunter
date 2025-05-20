import { Middleware } from "@reduxjs/toolkit";
import { toggleWishlist } from "../reducers/wishlist";

export const wishlistPersistenceMiddleware: Middleware = (storeAPI) => (next) => (action) => {
    const res = next(action);

    if (toggleWishlist.match(action)) {
        const wishlist = storeAPI.getState().wishlist.wishlist;
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }

    return res;
};