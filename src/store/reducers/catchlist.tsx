import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { genericSubListItem, genericSubListProps } from "../../constants/pokemon.constants";

interface CatchlistStateProps extends genericSubListProps {
    hasCatchNotification: boolean;
}

function loadList(): genericSubListItem[] {
    try {
        const storedList = localStorage.getItem("catchlist");

        if (!storedList) {
            localStorage.setItem("catchlist", JSON.stringify([]));
            return [];
        }

        return JSON.parse(storedList);
    } catch (error) {
        console.error("Erro ao carregar a catchlist do localStorage", error);
        return [];
    }
}

const initialState: CatchlistStateProps = {
    list: loadList(),
    hasCatchNotification: false,
};

const catchlistSlice = createSlice({
    name: "catchlist",
    initialState,
    reducers: {
        toggleCatchlist: (state, action: PayloadAction<genericSubListItem>) => {
            const alreadyExists = state.list.some(item => item.name === action.payload.name);

            if (alreadyExists) {
                state.list = state.list.filter(item => item.name !== action.payload.name);
            } else {
                state.list = [...state.list, action.payload];
                state.hasCatchNotification = true;
            }
        },
        deleteCatchItem: (state, { payload }) => {
            state.list = state.list.filter(item => item.name !== payload);
        },
        resetNotification: (state) => {
            state.hasCatchNotification = false;
        }
    }
});

export const {
    toggleCatchlist,
    deleteCatchItem,
    resetNotification,
} = catchlistSlice.actions;
export default catchlistSlice.reducer;