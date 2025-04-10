import { useDispatch } from "react-redux";
import { pokemonServices } from "../services/pokemon.service";
import { createList, setLoading } from "../store/reducers/allPokemonList";

export function usePokeList() {
    const dispatch = useDispatch();

    const fetchAllPokemons = () => {
        dispatch(setLoading(true));

        pokemonServices.getAllPokemons()
            .then((res) => {
                dispatch(createList(res));
            });

        setTimeout(() => {
            dispatch(setLoading(false));
        }, 3800);
    };

    return { fetchAllPokemons };
}