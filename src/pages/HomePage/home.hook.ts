import { useState } from "react";
import { useDispatch } from "react-redux";
import { pokemonServices } from "../../services/pokemon.service";
import { createList } from "../../store/reducers/allPokemonList";

export function usePokeList() {
    const [listIsLoading, setListIsLoading] = useState(false);
    const dispatch = useDispatch();

    const fetchAllPokemons = () => {
        setListIsLoading(true);
        pokemonServices.getAllPokemons()
            .then((res) => {
                dispatch(createList(res));
            })
            .finally(() => setListIsLoading(false));
    };

    return { fetchAllPokemons, listIsLoading };
}