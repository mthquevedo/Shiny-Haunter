import { useDispatch } from "react-redux";
import { changeViewMode } from "../store/reducers/userPreferences";
import { ViewMode } from "../constants/app.constants";

export function usePreferences() {
    const dispatch = useDispatch();

    const changeView = (view: ViewMode) => {
        dispatch(changeViewMode(view));        
    }

    return { changeView };
}