import { createSlice } from "@reduxjs/toolkit";

interface PokemonProps {
    id: number;
    name: string;
}

interface pokemonListProps {
    list: PokemonProps[];
    loading: boolean;
}

const loadPokemonList = (): PokemonProps[] => {
    try {
        const storedList = localStorage.getItem("pokelist");

        if (storedList) {
            return JSON.parse(storedList);
        } else {
            localStorage.setItem("pokelist", JSON.stringify([]));
            return [];
        }
    } catch (error) {
        console.error("Erro ao carregar a lista de pokemon do localStorage", error);
        return [];
    }
};

const initialState: pokemonListProps = {
    list: loadPokemonList(),
    loading: false,
};


const allPokemonListSlice = createSlice({
    name: "allPokemonList",
    initialState,
    reducers: {
        createList: (state, { payload }) => {
            state.list.push(payload);
            localStorage.setItem("pokelist", JSON.stringify(payload));
        },
        setLoading: (state, { payload }) => {
            state.loading = payload;
        }
    }
});

export const { createList, setLoading } = allPokemonListSlice.actions;
export default allPokemonListSlice.reducer;