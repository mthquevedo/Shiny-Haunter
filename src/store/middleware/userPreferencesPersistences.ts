import { Middleware } from "@reduxjs/toolkit";
import { setLang } from "../reducers/userPreferences";
import i18n from "../../lib/i18n";

export const userPreferencesPersistences: Middleware = (storeAPI) => (next) => (action) => {
    const res = next(action);

    if (setLang.match(action)) {
        const settings = storeAPI.getState().userPreferences;
        localStorage.setItem("userPreferences", JSON.stringify(settings));
        i18n.changeLanguage(settings.lang);
    }

    return res;
};