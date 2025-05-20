import { useDispatch } from "react-redux";
import { pokemonServices } from "../services/pokemon.service";
import { setList, setLoading } from "../store/reducers/allPokemonList";

export function usePokeList() {
    const dispatch = useDispatch();

    const fetchAllPokemons = () => {
        dispatch(setLoading(true));

        pokemonServices.getAllPokemons()
            .then((res) => {
                dispatch(setList(res));
                localStorage.setItem("pokelist", JSON.stringify(res));
            });

        setTimeout(() => {
            dispatch(setLoading(false));
        }, 3800);
    };

    return { fetchAllPokemons };
}