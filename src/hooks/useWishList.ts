import { useDispatch } from "react-redux";
import { genericSubListItem } from "../constants/pokemon.constants";
import { toggleWishlist } from "../store/reducers/wishlist";

export function useWishList() {
    const dispatch = useDispatch();

    const handleWishItem = (pokemon: genericSubListItem) => {
        dispatch(toggleWishlist(pokemon));
    }

    return { handleWishItem };
}