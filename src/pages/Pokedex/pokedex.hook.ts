import { Pokemon } from "pokenode-ts";
import { useEffect, useState } from "react";
import { LIMIT_CARDS } from "../../constants/pokemon.constants";
import { pokemonServices } from "../../services/pokemon.service";

export function usePokedex() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [offset, setOffset] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [next, setNext] = useState(false);
    const [previous, setPrevious] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        pokemonServices.getLimitedPokemons(offset, LIMIT_CARDS)
            .then(({ pokemons, previous, next }) => {
                setPokemons(pokemons);
                setPrevious(!!previous);
                setNext(!!next);
            })
            .finally(() => setIsLoading(false));
    }, [offset])

    const handleNextPage = () => {
        setOffset(offset + LIMIT_CARDS);
    };

    const handlePreviousPage = () => {
        if (offset === 0) return

        setOffset(offset - LIMIT_CARDS);
    };

    return {
        pokemons,
        handleNextPage,
        handlePreviousPage,
        isLoading,
        next,
        previous,
    };
}