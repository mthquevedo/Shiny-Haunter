import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { genericSubListItem, genericSubListProps } from "../../constants/pokemon.constants";

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

const initialState: genericSubListProps = {
    list: loadList(),
    view: "grid",
};

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        toggleWishlist: (state, action: PayloadAction<genericSubListItem>) => {
            const index = state.list.findIndex((item) => item.name === action.payload.name);

            if (index >= 0) {
                state.list.splice(index, 1);
            } else {
                state.list.push(action.payload);
            }
        }
    }
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;