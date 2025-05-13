import { createSlice } from "@reduxjs/toolkit"
import { Pokemon } from "pokenode-ts";
import { LIMIT_CARDS } from "../../constants/pokemon.constants";

interface pokedexStateProps {
    list: Pokemon[],
    loading: boolean,
    offset: number,
    next: boolean,
    previous: boolean
}

const initialState: pokedexStateProps = {
    list: [],
    loading: false,
    offset: 0,
    next: false,
    previous: false
};

const pokedexListSlice = createSlice({
    name: "pokedexList",
    initialState,
    reducers: {
        setList: (state, { payload }) => {
            state.list = payload;
        },
        handleNextPage: (state) => {
            state.offset = state.offset + LIMIT_CARDS;
        },
        handlePreviousPage: (state) => {
            if (state.offset === 0) {
                return;
            }
            state.offset = state.offset - LIMIT_CARDS;
        },
        setPrevious: (state, { payload }) => {
            state.previous = payload;
        },
        setNext: (state, { payload }) => {
            state.next = payload;
        },
        setLoading: (state, { payload }) => {
            state.loading = payload;
        }

    }
})

export const {
    setList,
    handleNextPage,
    handlePreviousPage,
    setLoading,
    setPrevious,
    setNext
} = pokedexListSlice.actions;
export default pokedexListSlice.reducer;