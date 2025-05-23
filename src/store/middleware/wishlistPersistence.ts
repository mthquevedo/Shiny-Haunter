import { Middleware } from "@reduxjs/toolkit";
import { deleteWishItem, toggleWishlist } from "../reducers/wishlist";

export const wishlistPersistenceMiddleware: Middleware = (storeAPI) => (next) => (action) => {
    const res = next(action);

    if (toggleWishlist.match(action) || deleteWishItem.match(action)) {
        const wishlist = storeAPI.getState().wishlist.list;
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }

    return res;
};