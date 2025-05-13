import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setSugestionsList } from "../store/reducers/searchPokedex";

export function useSearchSugestions() {
    const dispatch = useDispatch();
    const pokemonList = useSelector((state: RootState) => state.allPokemonList.list);

    const handleSugestionsList = useCallback((searchValue: string) => {
            const filteredPokemonList = pokemonList.filter(pokeName =>
                pokeName.label.toLocaleLowerCase().startsWith(searchValue.toLocaleLowerCase())
            );
            dispatch(setSugestionsList(filteredPokemonList));
    }, [pokemonList, dispatch]);


    return { handleSugestionsList };
}