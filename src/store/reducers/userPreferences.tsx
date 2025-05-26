import { createSlice } from "@reduxjs/toolkit";
import { ViewType } from "../../constants/pokemon.constants";

interface userPreferencesProps {
    lang: string;
    view: ViewType;
}

function loadPreferences(): userPreferencesProps {
    const defaultSettings: userPreferencesProps = {
        lang: "pt-br",
        view: "grid",
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
        }
    }
});

export const { changeViewMode } = userPreferencesSlice.actions;
export default userPreferencesSlice.reducer;