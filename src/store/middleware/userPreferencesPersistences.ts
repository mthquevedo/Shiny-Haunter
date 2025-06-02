import { Middleware } from "@reduxjs/toolkit";
import { changeViewMode } from "../reducers/userPreferences";

export const userPreferencesPersistences: Middleware = (storeAPI) => (next) => (action) => {
    const res = next(action);

    if (changeViewMode.match(action)) {
        const settings = storeAPI.getState().userPreferences;
        localStorage.setItem("userPreferences", JSON.stringify(settings));
    }

    return res;
};