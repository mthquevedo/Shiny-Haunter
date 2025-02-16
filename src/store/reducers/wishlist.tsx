import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishlistItem {
    name: string;
    image: string;
    date?: string;
}
interface WishlistStateProps {
    wishlist: WishlistItem[];
}

const loadWishlist = (): WishlistItem[] => {
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
        toggleWishlist: (state, action: PayloadAction<WishlistItem>) => {
            const { name, image } = action.payload;

            if (state.wishlist.some(item => item.name === name)) {
                state.wishlist = state.wishlist.filter(item => item.name !== name);
            } else {
                const today = new Date().toLocaleDateString('pt-BR');

                state.wishlist.push({
                    name,
                    image,
                    date: today
                });
            }

            localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
        }
    }
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;