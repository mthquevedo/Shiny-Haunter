import { useDispatch } from "react-redux";
import { genericSubListItem } from "../constants/pokemon.constants";
import { deleteWishItem, resetNotification, toggleWishlist } from "../store/reducers/wishlist";

export function useWishList() {
    const dispatch = useDispatch();

    const handleWishItem = (pokemon: genericSubListItem) => {
        dispatch(toggleWishlist(pokemon));
    };

    const deleteItem = (name: string) => {
        dispatch(deleteWishItem(name));
    };

    const resetNotificationState = () => {
        dispatch(resetNotification())
    };

    return {
        handleWishItem,
        deleteItem,
        resetNotificationState,
    };
}