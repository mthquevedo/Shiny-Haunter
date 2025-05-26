import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { genericSubListItem, genericSubListProps } from "../../constants/pokemon.constants";

interface WishStateProps extends genericSubListProps {
    hasWishNotification: boolean;
}

function loadList(): genericSubListItem[] {
    try {
        const storedList = localStorage.getItem("wishlist");

        if (!storedList) {
            localStorage.setItem("wishlist", JSON.stringify([]));
            return [];
        }

        return JSON.parse(storedList);
    } catch (error) {
        console.error("Erro ao carregar a wishlist do localStorage", error);
        return [];
    }
}

const initialState: WishStateProps = {
    list: loadList(),
    hasWishNotification: false,
};

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        toggleWishlist: (state, action: PayloadAction<genericSubListItem>) => {
            const alreadyExists = state.list.some(item => item.name === action.payload.name);

            if (alreadyExists) {
                state.list = state.list.filter(item => item.name !== action.payload.name);
            } else {
                state.list = [...state.list, action.payload];
                state.hasWishNotification = true;
            }
            
        },
        deleteWishItem: (state, { payload }) => {
            state.list = state.list.filter(item => item.name !== payload);
        },
        resetNotification: (state) => {
            state.hasWishNotification = false;
        }
    }
});

export const {
    toggleWishlist,
    deleteWishItem,
    resetNotification,
} = wishlistSlice.actions;
export default wishlistSlice.reducer;