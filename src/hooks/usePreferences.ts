import { useDispatch } from "react-redux";
import { ViewType } from "../constants/pokemon.constants";
import { changeViewMode } from "../store/reducers/userPreferences";

export function usePreferences() {
    const dispatch = useDispatch();

    const changeView = (view: ViewType) => {
        dispatch(changeViewMode(view));        
    }

    return { changeView };
}