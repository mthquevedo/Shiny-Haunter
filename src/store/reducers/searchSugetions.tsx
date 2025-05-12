import { createSlice } from "@reduxjs/toolkit";

export interface sugestionsItemProps {
    value: number;
    label: string;
}

interface searchSugestionsProps {
    searchValue: string,
    list: sugestionsItemProps[],
}

const initialState: searchSugestionsProps = {
    searchValue: "",
    list: [],
};

const searchSugestionsSlice = createSlice({
    name: "searchSugestions",
    initialState,
    reducers: {
        setValue: (state, { payload }) => {
            state.searchValue = payload;
        },
        setSugestionsList: (state, { payload }) => {
            state.list = payload;
        },
        resetSearchSugestionsState: () => initialState,
    }
});

export const {
    setValue,
    setSugestionsList,
    resetSearchSugestionsState
} = searchSugestionsSlice.actions;

export default searchSugestionsSlice.reducer;