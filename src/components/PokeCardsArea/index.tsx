import { useSelector } from "react-redux";
import { LIMIT_CARDS } from "../../constants/pokemon.constants";
import { RootState } from "../../store";
import { idValidation, imageValidation, nameValidation, typeValidation } from "../../utils/cardValidation";
import { LoadingCards } from "../LoadingCards";
import { PokeCard } from "../PokeCard";
import { useEffect } from "react";
import { usePokedex } from "../../hooks/usePokedex";

export function PokeCardsArea() {
    const isPageLoading = useSelector((state: RootState) => state.pokedexList.loading);
    const pokemonList = useSelector((state: RootState) => state.pokedexList.list);
    const searchList = useSelector((state: RootState) => state.searchPokedex.searchList);
    const cardsQuantity = searchList.length === 0 ? LIMIT_CARDS : searchList.length;
    const { getPokemonPage } = usePokedex();

    useEffect(() => {
        if (pokemonList.length !== LIMIT_CARDS) {
            getPokemonPage();
        }
    }, []);

    return (
        <div className="w-full h-full flex items-start justify-start flex-wrap gap-5">
            {isPageLoading ?
                <LoadingCards quantity={cardsQuantity} />
                :
                <>
                    {pokemonList.map(pokemon => {
                        return (
                            <PokeCard
                                id={idValidation(pokemon.id)}
                                key={pokemon.id + pokemon.name}
                                name={nameValidation(pokemon.name)}
                                thumbnailDefault={imageValidation(pokemon.sprites?.other?.["official-artwork"]?.front_default)}
                                thumbnailShiny={imageValidation(pokemon.sprites?.other?.["official-artwork"]?.front_shiny)}
                                types={typeValidation(pokemon.types)}
                            />
                        )
                    })}
                </>
            }
        </div>
    )
}