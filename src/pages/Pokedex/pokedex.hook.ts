import { Pokemon } from "pokenode-ts";
import { useEffect, useState } from "react";
import { getPokemons } from "../../services/pokemon.service";

const LIMIT = 12;

export function usePokedex() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [offset, setOffset] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [next, setNext] = useState(false);
    const [previous, setPrevious] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getPokemons(offset, LIMIT)
            .then(({ pokemons, previous, next }) => {
                setPokemons(pokemons);
                setPrevious(!!previous);
                setNext(!!next);
            })
            .finally(() => setIsLoading(false));
    }, [offset])

    const handleNextPage = () => {
        setOffset(offset + LIMIT);
    };

    const handlePreviousPage = () => {
        if (offset === 0) return

        setOffset(offset - LIMIT);
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