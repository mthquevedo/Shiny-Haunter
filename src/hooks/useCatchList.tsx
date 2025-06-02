import { useDispatch } from "react-redux";
import { genericSubListItem } from "../constants/pokemon.constants";
import { toggleCatchlist, deleteCatchItem, resetNotification } from "../store/reducers/catchlist";

export function useCatchList() {
    const dispatch = useDispatch();

    const handleCatchItem = (pokemon: genericSubListItem) => {
        dispatch(toggleCatchlist(pokemon));
    };

    const deleteItem = (name: string) => {
        dispatch(deleteCatchItem(name));
    };

    const resetNotificationState = () => {
        dispatch(resetNotification())
    };

    return {
        handleCatchItem,
        deleteItem,
        resetNotificationState,
    };
}