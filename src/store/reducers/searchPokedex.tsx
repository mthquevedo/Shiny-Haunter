import { createSlice } from "@reduxjs/toolkit";

export interface sugestionsItemProps {
    value: number;
    label: string;
}

interface searchSugestionsProps {
    searchInputValue: string,
    searchList: string[],
    sugestionsList: sugestionsItemProps[],
}

const initialState: searchSugestionsProps = {
    searchInputValue: "",
    searchList: [],
    sugestionsList: [],
};

const searchPokedexSlice = createSlice({
    name: "searchPokedex",
    initialState,
    reducers: {
        setValue: (state, { payload }) => {
            state.searchInputValue = payload;
        },
        setSearchList: (state, { payload }) => {
            state.searchList = payload;
        },
        setSugestionsList: (state, { payload }) => {
            state.sugestionsList = payload;
        },
        resetSearchSugestionsState: (state) => {
            state.searchInputValue = initialState.searchInputValue;
            state.sugestionsList = initialState.sugestionsList;
        },
    }
});

export const {
    setValue,
    setSearchList,
    setSugestionsList,
    resetSearchSugestionsState
} = searchPokedexSlice.actions;

export default searchPokedexSlice.reducer;