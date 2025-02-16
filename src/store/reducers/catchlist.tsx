import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CatchlistItem {
    name: string;
    image: string;
    date?: string;
}
interface CatchlistStateProps {
    catchlist: CatchlistItem[];
}

const loadCatchlist = (): CatchlistItem[] => {
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
        toggleCatchlist: (state, action: PayloadAction<CatchlistItem>) => {
            const { name, image } = action.payload;

            if (state.catchlist.some(item => item.name === name)) {
                state.catchlist = state.catchlist.filter(item => item.name !== name);
            } else {
                const today = new Date().toLocaleDateString('pt-BR');

                state.catchlist.push({
                    name,
                    image,
                    date: today
                });
            }

            localStorage.setItem("catchlist", JSON.stringify(state.catchlist));
        }
    }
});

export const { toggleCatchlist } = catchlistSlice.actions;
export default catchlistSlice.reducer;