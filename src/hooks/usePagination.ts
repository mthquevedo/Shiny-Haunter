import { useDispatch, useSelector } from "react-redux";
import { decreaseOffset, increaseOffset } from "../store/reducers/pokedexList";
import { usePokedex } from "./usePokedex";
import { useEffect } from "react";
import { RootState } from "../store";

export function usePagination() {
    const dispatch = useDispatch();
    const { getPokemonPage } = usePokedex();
    const offset = useSelector((state: RootState) => state.pokedexList.offset);

    useEffect(() => {
        getPokemonPage();
    }, [offset])

    const nextPage = () => {
        dispatch(increaseOffset());
    };

    const previousPage = () => {
        dispatch(decreaseOffset());
    };

    return { nextPage, previousPage };
}