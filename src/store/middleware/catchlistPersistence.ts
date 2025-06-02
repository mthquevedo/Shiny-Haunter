import { Middleware } from "@reduxjs/toolkit";
import { toggleCatchlist, deleteCatchItem } from "../reducers/catchlist";

export const catchlistPersistenceMiddleware: Middleware = (storeAPI) => (next) => (action) => {
    const res = next(action);

    if (toggleCatchlist.match(action) || deleteCatchItem.match(action)) {
        const catchlist = storeAPI.getState().catchlist.list;
        localStorage.setItem("catchlist", JSON.stringify(catchlist));
    }

    return res;
};