import { createSlice } from "@reduxjs/toolkit"
import { Pokemon } from "pokenode-ts";

interface pokedexStateProps {
    list: Pokemon[],
    loading: boolean
}

const initialState: pokedexStateProps = {
    list: [],
    loading: false
};

const pokedexListSlice = createSlice({
    name: "pokedexList",
    initialState,
    reducers: {
        setList: (state, { payload }) => {
            state.list = payload;
        },
        setLoading: (state, { payload }) => {
            state.loading = payload;
        }

    }
})

export const { setList, setLoading } = pokedexListSlice.actions;
export default pokedexListSlice.reducer;