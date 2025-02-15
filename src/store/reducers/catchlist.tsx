import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CatchlistStateProps {
    catchlist: string[];
}

const loadCatchlist = (): string[] => {
    try {
        const storedCatchlist = localStorage.getItem("catchlist");

        if (storedCatchlist) {
            return JSON.parse(storedCatchlist);
        } else {
            localStorage.setItem("catchlist", JSON.stringify([]));
            return [];
        }

    } catch (error) {
        console.error("Erro ao carregar a catchlist do localStorage", error);
        return [];
    }
}

const initialState: CatchlistStateProps = {
    catchlist: loadCatchlist(),
};

const catchlistSlice = createSlice({
    name: "catchlist",
    initialState,
    reducers: {
        toggleCatchlist: (state, action: PayloadAction<string>) => {
            const pokeName = action.payload;

            if (state.catchlist.includes(pokeName)) {
                state.catchlist = state.catchlist.filter(name => name !== pokeName);
            } else {
                state.catchlist.push(pokeName);
            }

            localStorage.setItem("catchlist", JSON.stringify(state.catchlist));
        }
    }
});

export const { toggleCatchlist } = catchlistSlice.actions;
export default catchlistSlice.reducer;