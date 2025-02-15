import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishlistStateProps {
    wishlist: string[];
}

const loadWishlist = (): string[] => {
    try {
        const storedWishlist = localStorage.getItem("wishlist");

        if (storedWishlist) {
            return JSON.parse(storedWishlist);
        } else {
            localStorage.setItem("wishlist", JSON.stringify([]));
            return [];
        }
    } catch (error) {
        console.error("Erro ao carregar a wishlist do localStorage", error);
        return [];
    }
}

const initialState: WishlistStateProps = {
    wishlist: loadWishlist(),
};

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        toggleWishlist: (state, action: PayloadAction<string>) => {
            const pokeName = action.payload;

            if (state.wishlist.includes(pokeName)) {
                state.wishlist = state.wishlist.filter(name => name !== pokeName);
            } else {
                state.wishlist.push(pokeName);
            }

            localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
        }
    }
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;