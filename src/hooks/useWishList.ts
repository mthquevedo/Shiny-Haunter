import { useDispatch } from "react-redux";
import { genericSubListItem } from "../constants/pokemon.constants";
import { toggleWishlist, deleteWishItem } from "../store/reducers/wishlist";

export function useWishList() {
    const dispatch = useDispatch();

    const handleWishItem = (pokemon: genericSubListItem) => {
        dispatch(toggleWishlist(pokemon));
    }
    const deleteItem = (name: string) => {
        dispatch(deleteWishItem(name));
    }

    return {
        handleWishItem,
        deleteItem,
    };
}