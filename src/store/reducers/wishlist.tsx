import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { genericSubListItem } from "../../constants/pokemon.constants";

interface WishlistStateProps {
    wishlist: genericSubListItem[];
    view: "grid" | "list";
}

const initialState: WishlistStateProps = {
    wishlist: JSON.parse(localStorage.getItem("wishlist") || "[]"),
    view: "grid",
};

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        toggleWishlist: (state, action: PayloadAction<genericSubListItem>) => {
            const index = state.wishlist.findIndex((item) => item.name === action.payload.name);

            if (index >= 0) {
                state.wishlist.splice(index, 1);
            } else {
                state.wishlist.push(action.payload);
            }
        }
    }
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;