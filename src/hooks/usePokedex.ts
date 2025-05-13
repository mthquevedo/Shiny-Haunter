import { Pokemon } from "pokenode-ts";
import { useDispatch, useSelector } from "react-redux";
import { LIMIT_CARDS } from "../constants/pokemon.constants";
import { pokemonServices } from "../services/pokemon.service";
import { RootState } from "../store";
import { setList, setLoading, setNext, setPrevious } from "../store/reducers/pokedexList";

export function usePokedex() {
    const dispatch = useDispatch();
    const offset = useSelector((state: RootState) => state.pokedexList.offset)
    const namesSearched = useSelector((state: RootState) => state.searchPokedex.searchList);

    const getPokemonPage = () => {
        dispatch(setLoading(true));
        pokemonServices.getLimitedPokemons(offset, LIMIT_CARDS)
            .then(({ pokemons, previous, next }) => {
                dispatch(setList(pokemons));
                dispatch(setPrevious(!!previous));
                dispatch(setNext(!!next));
            })
            .finally(() => {
                dispatch(setLoading(false));
            })
    }

    const getSearchedPokemon = async () => {
        dispatch(setLoading(true));

        try {
            const profiles: Pokemon[] = await Promise.all(
                namesSearched.map(name => pokemonServices.getSinglePokemon(name))
            );

            dispatch(setList(profiles));
        } catch (error) {
            console.error("Erro ao buscar pokemon: ", error);
        } finally {
            dispatch(setLoading(false));
        }
    }

    return {
        getPokemonPage,
        getSearchedPokemon
    };
}