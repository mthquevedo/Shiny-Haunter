import { createSlice } from "@reduxjs/toolkit";
import { LanguagesSupported } from "../../constants/i18n.constants";
import { ViewMode } from "../../constants/app.constants";

interface userPreferencesProps {
    lang: string;
    view: ViewMode;
}

function loadPreferences(): userPreferencesProps {
    const defaultSettings: userPreferencesProps = {
        lang: LanguagesSupported.BRAZILIAN_PORTUGUESE,
        view: ViewMode.GRID,
    };

    try {
        const storedData = localStorage.getItem("userPreferences");

        if (!storedData) {
            localStorage.setItem("userPreferences", JSON.stringify(defaultSettings));
            return defaultSettings;
        }

        return JSON.parse(storedData);
    } catch (error) {
        console.error("Erro ao carregar as preferências do usuário do localStorage", error);
        return defaultSettings;
    }
}

const initialState: userPreferencesProps = {
    lang: loadPreferences().lang,
    view: loadPreferences().view,
};

const userPreferencesSlice = createSlice({
    name: "userPreferences",
    initialState,
    reducers: {
        changeViewMode: (state, { payload }) => {
            state.view = payload;
        },
        setLang: (state, { payload }) => {
            state.lang = payload;
        }
    }
});

export const { changeViewMode, setLang } = userPreferencesSlice.actions;
export default userPreferencesSlice.reducer;