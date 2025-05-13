import { Pokemon } from "pokenode-ts";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LIMIT_CARDS } from "../constants/pokemon.constants";
import { pokemonServices } from "../services/pokemon.service";
import { RootState } from "../store";
import { setList, setLoading } from "../store/reducers/pokedexList";

export function usePokedex() {
    const dispatch = useDispatch();
    const [offset, setOffset] = useState(0);
    const [next, setNext] = useState(false);
    const [previous, setPrevious] = useState(false);
    const namesSearched = useSelector((state: RootState) => state.searchPokedex.searchList);

    const getPokemonPage = () => {
        dispatch(setLoading(true));
        pokemonServices.getLimitedPokemons(offset, LIMIT_CARDS)
            .then(({ pokemons, previous, next }) => {
                dispatch(setList(pokemons));
                setPrevious(!!previous);
                setNext(!!next);
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

    const handleNextPage = () => {
        setOffset(offset + LIMIT_CARDS);
    };

    const handlePreviousPage = () => {
        if (offset === 0) return

        setOffset(offset - LIMIT_CARDS);
    };

    return {
        getPokemonPage,
        getSearchedPokemon,
        handleNextPage,
        handlePreviousPage,
        next,
        previous,
    };
}