import { RootState } from "..";

export const selectLang = (state: RootState) => state.userPreferences.lang;
export const selectView = (state: RootState) => state.userPreferences.view;